import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { NEXT_AUTH } from '@/app/api/lib/auth'; // Your NextAuth config
import { PrismaClient, RunStatus } from '@/generated/prisma'; // Adjust path to your generated Prisma client
import { NseIndia, DateRange, EquityHistoricalData as NseEquityHistoricalRecord } from 'stock-nse-india';
import path from 'path';
import fs from 'fs/promises'; // For async file operations for creating CSV to send
import os from 'os'; // For temporary directory

const prisma = new PrismaClient();
const nseIndia = new NseIndia();

// Re-using the CSV conversion logic (can be moved to a shared util)
interface ActualHistoricalRecord {
    _id: string; CH_SYMBOL: string; CH_SERIES: string; CH_MARKET_TYPE: string;
    CH_TRADE_HIGH_PRICE: number; CH_TRADE_LOW_PRICE: number; CH_OPENING_PRICE: number;
    CH_CLOSING_PRICE: number; CH_LAST_TRADED_PRICE: number; CH_PREVIOUS_CLS_PRICE: number;
    CH_TOT_TRADED_QTY: number; CH_TOT_TRADED_VAL: number; CH_52WEEK_HIGH_PRICE: number;
    CH_52WEEK_LOW_PRICE: number; CH_TOTAL_TRADES: number | null; CH_ISIN: string;
    CH_TIMESTAMP: string; TIMESTAMP: string; createdAt: string; updatedAt: string;
    __v?: number; SLBMH_TOT_VAL?: number | null; VWAP?: number; mTIMESTAMP?: string;
}
type NseHistoricalApiResponse = Array<{ data: ActualHistoricalRecord[] }> | ActualHistoricalRecord[];

function convertToCSV(data: ActualHistoricalRecord[]): string {
    if (!data || data.length === 0) return "";
    const headers = ["Date", "Open", "High", "Low", "Close", "Volume", "Turnover", "Symbol", "Series", "PrevClose", "LTP", "Trades"];
    const csvRows = [headers.join(',')];
    data.sort((a, b) => new Date(a.CH_TIMESTAMP).getTime() - new Date(b.CH_TIMESTAMP).getTime());
    data.forEach(record => {
        const row = [
            record.CH_TIMESTAMP, record.CH_OPENING_PRICE, record.CH_TRADE_HIGH_PRICE, record.CH_TRADE_LOW_PRICE,
            record.CH_CLOSING_PRICE, record.CH_TOT_TRADED_QTY, record.CH_TOT_TRADED_VAL, record.CH_SYMBOL,
            record.CH_SERIES, record.CH_PREVIOUS_CLS_PRICE, record.CH_LAST_TRADED_PRICE,
            record.CH_TOTAL_TRADES === null ? '' : record.CH_TOTAL_TRADES
        ];
        csvRows.push(row.map(String).join(',')); // Ensure all are strings
    });
    return csvRows.join('\n');
}


export async function POST(req: NextRequest) {
    const session = await getServerSession(NEXT_AUTH);
    let currentUserId: number | undefined = undefined;

    if (session?.user?.id) { // Assuming user.id from session is string, convert to number if your DB expects int
        currentUserId = parseInt(session.user.id as string, 10);
        if (isNaN(currentUserId)) {
            currentUserId = undefined; // Invalid user ID from session
            console.warn("Could not parse user ID from session for ML trigger.");
        }
    } else {
        console.log("[predict/trigger] No active session or user ID found. Proceeding as anonymous run if allowed, or this might be an issue.");
        // For a hackathon, you might allow anonymous runs or enforce login.
        // If login is enforced, return 401 here.
        // return NextResponse.json({ success: false, message: "Authentication required." }, { status: 401 });
    }

    let requestBody;
    try {
        requestBody = await req.json();
    } catch (e) {
        return NextResponse.json({ success: false, message: "Invalid JSON body." }, { status: 400 });
    }

    const { stockSymbol, market, email, startDate, endDate } = requestBody;

    if (!stockSymbol || !market || !email || !startDate || !endDate) {
        return NextResponse.json({ success: false, message: "stockSymbol, market, email, startDate, and endDate are required." }, { status: 400 });
    }
    if (market.toUpperCase() !== "INDIA") {
        return NextResponse.json({ success: false, message: "Currently, only INDIA market is supported." }, { status: 400 });
    }

    let predictionRun;
    try {
        // 1. Create Initial PredictionRun record in DB
        predictionRun = await prisma.predictionRun.create({
            data: {
                userId: currentUserId, // Will be null if no user session
                stockSymbol: stockSymbol.toUpperCase(),
                market: market.toUpperCase(),
                status: RunStatus.PENDING,
                requestedAt: new Date(),
                // Other fields will be updated later
            },
        });
        console.log(`[predict/trigger] Created PENDING PredictionRun ID: ${predictionRun.id} for ${stockSymbol}`);
    } catch (dbError) {
        console.error(`[predict/trigger] Error creating initial PredictionRun in DB for ${stockSymbol}:`, dbError);
        return NextResponse.json({ success: false, message: "Failed to initiate prediction job.", internalError: "DB_CREATE_FAILED" }, { status: 500 });
    }

    // --- From here, wrap in a try-finally to update status on error ---
    let csvFilePath: string | null = null;
    try {
        // 2. Fetch Historical Data
        const range: any = { start: new Date(startDate), end: new Date(endDate) };
        console.log(`[predict/trigger] Fetching historical data for ${stockSymbol.toUpperCase()} (Run ID: ${predictionRun.id})`);
        const rawHistoricalResponse: NseHistoricalApiResponse = await nseIndia.getEquityHistoricalData(stockSymbol.toUpperCase(), range);

        let actualHistoricalData: ActualHistoricalRecord[] = [];
        if (Array.isArray(rawHistoricalResponse)) {
            if (rawHistoricalResponse.length > 0 && rawHistoricalResponse[0] && Array.isArray(rawHistoricalResponse[0].data)) {
                actualHistoricalData = rawHistoricalResponse[0].data as ActualHistoricalRecord[];
            } else if (rawHistoricalResponse.length > 0 && typeof rawHistoricalResponse[0].CH_SYMBOL === 'string') {
                actualHistoricalData = rawHistoricalResponse as any;
            }
        }
        if (actualHistoricalData.length === 0) {
            throw new Error(`No historical data found for ${stockSymbol} in the specified range.`);
        }
        console.log(`[predict/trigger] Fetched ${actualHistoricalData.length} records for ${stockSymbol} (Run ID: ${predictionRun.id})`);

        // 3. Convert to CSV and Save Temporarily
        const csvData = convertToCSV(actualHistoricalData);
        const tempDir = os.tmpdir(); // Use OS temp directory
        const tempFileName = `${predictionRun.id}_${stockSymbol}_${Date.now()}.csv`;
        csvFilePath = path.join(tempDir, tempFileName);
        await fs.writeFile(csvFilePath, csvData);
        console.log(`[predict/trigger] Temporary CSV created at: ${csvFilePath} (Run ID: ${predictionRun.id})`);

        // 4. Prepare FormData to call FastAPI ML Service
        const formData = new FormData();
        const fileBuffer = await fs.readFile(csvFilePath);
        const blob = new Blob([fileBuffer], { type: 'text/csv' });
        formData.append('csv_file', blob, tempFileName);
        formData.append('user_email_to_send_to', email);
        
        const mlServiceUrl = process.env.ML_SERVICE_URL; // e.g., https://mj665-stox-sight-ml-service.hf.space/train-predict/
        if (!mlServiceUrl) {
            throw new Error("ML_SERVICE_URL environment variable is not set.");
        }

        console.log(`[predict/trigger] Calling ML Service at ${mlServiceUrl} for Run ID: ${predictionRun.id}`);
        await prisma.predictionRun.update({
            where: { id: predictionRun.id },
            data: { status: RunStatus.PROCESSING },
        });

        // **ASYNC CALL TO ML SERVICE (DO NOT AWAIT THE FULL RESPONSE HERE for long processes)**
        // For a hackathon, you might await it to get the immediate result and store it.
        // For production, this should be a non-blocking call or handed off to a queue/worker.

        const mlResponse = await fetch(mlServiceUrl, {
            method: 'POST',
            body: formData, // FormData will set Content-Type to multipart/form-data automatically
            // No explicit 'Content-Type' header needed when sending FormData with fetch
        });

        if (!mlResponse.ok) {
            const errorText = await mlResponse.text();
            throw new Error(`ML service failed with status ${mlResponse.status}: ${errorText}`);
        }

        const mlResult = await mlResponse.json();
        console.log(`[predict/trigger] ML Service response for Run ID ${predictionRun.id}:`, JSON.stringify(mlResult).substring(0, 300) + "...");

        // 5. Update PredictionRun with results from ML service
        await prisma.predictionRun.update({
            where: { id: predictionRun.id },
            data: {
                status: RunStatus.COMPLETED,
                runIdFromML: mlResult.run_id,
                completedAt: new Date(),
                lstmResultsJson: mlResult.lstm_results as any, // Cast to any or define Prisma.JsonValue
                gruResultsJson: mlResult.gru_results as any,
                transformerResultsJson: mlResult.transformer_results as any,
                polynomialResultsJson: mlResult.polynomial_results as any,
                tradingSuggestionJson: mlResult.trading_suggestion_tomorrow as any,
                aiAnalysisJson: mlResult.ai_qualitative_analysis as any,
                plotUrlsJson: mlResult.plot_urls as any,
                pdfReportUrl: mlResult.pdf_report_url,
                emailSentStatus: mlResult.email_sent_status,
                mlServiceMessage: mlResult.message,
            },
        });
        console.log(`[predict/trigger] Updated PredictionRun ID: ${predictionRun.id} to COMPLETED.`);

        return NextResponse.json({
            success: true,
            message: "ML prediction job processed and results stored.",
            predictionRunId: predictionRun.id,
            mlServiceRunId: mlResult.run_id,
            pdfReportUrl: mlResult.pdf_report_url // Provide this directly for immediate access if needed
        }, { status: 200 });

    } catch (error: any) {
        console.error(`[predict/trigger] Error during ML job processing for PredictionRun ID ${predictionRun?.id || 'N/A'}:`, error);
        if (predictionRun) {
            try {
                await prisma.predictionRun.update({
                    where: { id: predictionRun.id },
                    data: {
                        status: RunStatus.FAILED,
                        errorMessage: error.message || String(error),
                        completedAt: new Date(),
                    },
                });
            } catch (updateError) {
                console.error(`[predict/trigger] CRITICAL: Failed to update PredictionRun status to FAILED for ${predictionRun.id}:`, updateError);
            }
        }
        return NextResponse.json({ success: false, message: "Failed to process ML prediction request.", details: error.message || String(error) }, { status: 500 });
    } finally {
        // Clean up temporary CSV file
        if (csvFilePath) {
            try {
                await fs.unlink(csvFilePath);
                console.log(`[predict/trigger] Cleaned up temporary CSV: ${csvFilePath}`);
            } catch (cleanupError) {
                console.warn(`[predict/trigger] Failed to clean up temporary CSV ${csvFilePath}:`, cleanupError);
            }
        }
    }
}