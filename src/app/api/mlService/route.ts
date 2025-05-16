// src/app/api/mlService/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { NseIndia, 
    // DateRange, EquityHistoricalData as NseEquityHistoricalRecord 
} from 'stock-nse-india';
import fs from 'fs/promises'; // Use fs.promises
import path from 'path';

import fsSimple from 'fs';
const nseIndia = new NseIndia();

interface ActualHistoricalRecord {
    _id: string;
    CH_SYMBOL: string;
    CH_SERIES: string;
    CH_MARKET_TYPE: string;
    CH_TRADE_HIGH_PRICE: number;
    CH_TRADE_LOW_PRICE: number;
    CH_OPENING_PRICE: number;
    CH_CLOSING_PRICE: number;
    CH_LAST_TRADED_PRICE: number;
    CH_PREVIOUS_CLS_PRICE: number;
    CH_TOT_TRADED_QTY: number;
    CH_TOT_TRADED_VAL: number;
    CH_52WEEK_HIGH_PRICE: number;
    CH_52WEEK_LOW_PRICE: number;
    CH_TOTAL_TRADES: number | null;
    CH_ISIN: string;
    CH_TIMESTAMP: string;
    TIMESTAMP: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
    SLBMH_TOT_VAL?: number | null;
    VWAP?: number;
    mTIMESTAMP?: string;
}

// Type for the response from getEquityHistoricalData when it returns chunks
type NseHistoricalChunk = {
    data: ActualHistoricalRecord[];
    meta?: { // Meta is optional, but good to define if you use it
        series?: string[];
        fromDate?: string;
        toDate?: string;
        symbols?: string[];
    };
};
type NseHistoricalDataChunkedResponse = NseHistoricalChunk[];


function convertToCSV(data: ActualHistoricalRecord[]): string {
    if (!data || data.length === 0) {
        return "";
    }
    const desiredHeaders = [
        "Date", "Open", "High", "Low", "Close", "Volume", "Turnover",
        "Symbol", "Series", "PrevClose", "LTP", "Trades"
    ];
    const headerValueExtractors: { [key: string]: (record: ActualHistoricalRecord) => string | number | null } = {
        "Date": record => record.CH_TIMESTAMP,
        "Open": record => record.CH_OPENING_PRICE,
        "High": record => record.CH_TRADE_HIGH_PRICE,
        "Low": record => record.CH_TRADE_LOW_PRICE,
        "Close": record => record.CH_CLOSING_PRICE,
        "Volume": record => record.CH_TOT_TRADED_QTY,
        "Turnover": record => record.CH_TOT_TRADED_VAL,
        "Symbol": record => record.CH_SYMBOL,
        "Series": record => record.CH_SERIES,
        "PrevClose": record => record.CH_PREVIOUS_CLS_PRICE,
        "LTP": record => record.CH_LAST_TRADED_PRICE,
        "Trades": record => record.CH_TOTAL_TRADES
    };

    const csvRows = [desiredHeaders.join(',')];
    const sortedData = [...data].sort((a, b) => new Date(a.CH_TIMESTAMP).getTime() - new Date(b.CH_TIMESTAMP).getTime());

    sortedData.forEach(record => {
        const rowValues = desiredHeaders.map(header => {
            const value = headerValueExtractors[header](record);
            return value === null || value === undefined ? '' : String(value);
        });
        csvRows.push(rowValues.join(','));
    });
    return csvRows.join('\n');
}

function getFormattedTodayDateTime(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `YY${year}MM${month}DD${day}_HH${hours}MM${minutes}SS${seconds}`;
}

export async function POST(req: NextRequest) {
    try {
        const { stockSymbol, market, email, startDate, endDate } = await req.json();

        if (!stockSymbol || !market || !email || !startDate || !endDate) {
            return NextResponse.json({ success: false, message: "stockSymbol, market, email, startDate, and endDate are all required." }, { status: 400 });
        }
        if (market.toUpperCase() !== "INDIA") {
            return NextResponse.json({ success: false, message: "Currently, only INDIA market is supported for ML service." }, { status: 400 });
        }

        console.log(`[mlService] Received request: Symbol=${stockSymbol}, Market=${market}, Email=${email}, Start=${startDate}, End=${endDate}`);

        const range = {
            start: new Date(startDate),
            end: new Date(endDate),
        };

        console.log(`[mlService] Fetching historical data for ${stockSymbol.toUpperCase()} from ${range.start.toISOString()} to ${range.end.toISOString()}`);

        let rawHistoricalResponse: any; // Keep as 'any' for now to handle potential inconsistencies from the lib
        try {
            rawHistoricalResponse = await nseIndia.getEquityHistoricalData(stockSymbol.toUpperCase(), range);
            console.log(`[mlService] Raw response received. Type: ${typeof rawHistoricalResponse}, IsArray: ${Array.isArray(rawHistoricalResponse)}`);

                const filePath = './scrap2.json'
                fsSimple.writeFileSync(filePath,JSON.stringify(rawHistoricalResponse))
            if (Array.isArray(rawHistoricalResponse)) {
                console.log(`[mlService] Raw response array length: ${rawHistoricalResponse.length}`);
                if (rawHistoricalResponse.length > 0) {
                    console.log(`[mlService] Structure of first element in raw response array:`, JSON.stringify(rawHistoricalResponse[0], null, 2).substring(0, 500) + "...");
                }
            } else if (rawHistoricalResponse) {
                console.log(`[mlService] Raw response (non-array) snippet:`, JSON.stringify(rawHistoricalResponse, null, 2).substring(0,1000) + "...");
            } else {
                 console.log(`[mlService] Raw response from getEquityHistoricalData for ${stockSymbol} was null, undefined, or empty.`);
            }
        } catch (error) {
            console.error(`[mlService] Error fetching historical data from NSE for ${stockSymbol}:`, error);
            return NextResponse.json({ success: false, message: `Failed to fetch historical data for ${stockSymbol}.`, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
        }

        let actualHistoricalData: ActualHistoricalRecord[] = [];

        // **** CORRECTED DATA EXTRACTION LOGIC ****
        if (Array.isArray(rawHistoricalResponse)) {
            // Check if it's an array of chunks (like [ {data: [...]}, {data: [...]} ])
            if (rawHistoricalResponse.every(chunk => chunk && Array.isArray(chunk.data))) {
                console.log("[mlService] Response is an array of chunks. Concatenating data from all chunks.");
                rawHistoricalResponse.forEach(chunk => {
                    if (chunk.data && chunk.data.length > 0) {
                        actualHistoricalData.push(...(chunk.data as ActualHistoricalRecord[]));
                    }
                });
            } 
            // Check if it's a direct array of records (like [ record, record, ... ])
            else if (rawHistoricalResponse.length > 0 && typeof rawHistoricalResponse[0].CH_SYMBOL === 'string') {
                actualHistoricalData = rawHistoricalResponse as ActualHistoricalRecord[];
                console.log("[mlService] Interpreted response as a direct array of historical records.");
            } else if (rawHistoricalResponse.length === 0) {
                 console.log("[mlService] getEquityHistoricalData returned an empty array directly.");
            } else {
                 console.warn("[mlService] Received an array, but its element structure is unrecognized or mixed:", rawHistoricalResponse[0]);
            }
        } else {
            console.warn("[mlService] getEquityHistoricalData returned a non-array or null/undefined structure:", rawHistoricalResponse);
        }
        // *****************************************

        if (actualHistoricalData.length === 0) {
            console.warn(`[mlService] No actual historical data records extracted for ${stockSymbol}. Check response structure and date range. Raw response logged above.`);
            return NextResponse.json({ success: false, message: `No historical data extracted for ${stockSymbol} from ${range.start.toLocaleDateString()} to ${range.end.toLocaleDateString()}. Library might have returned no data or an unexpected format.` }, { status: 404 });
        }

        console.log(`[mlService] Successfully extracted ${actualHistoricalData.length} actual historical records for ${stockSymbol}.`);

        const csvData = convertToCSV(actualHistoricalData); // Removed await
        if (!csvData) {
            console.error("[mlService] Failed to convert extracted data to CSV (data was empty).");
            return NextResponse.json({ success: false, message: "Failed to process extracted data into CSV." }, { status: 500 });
        }

        const sanitizedEmail = email.replace(/[^a-zA-Z0-9_.-]/g, '_');
        const todayDateTime = getFormattedTodayDateTime();
        const baseDir = path.join(process.cwd(), "csvGenerated");
        const userDir = path.join(baseDir, sanitizedEmail);
        const fileName = `${stockSymbol.toUpperCase()}_${market.toUpperCase()}_${todayDateTime}.csv`;
        const filePath = path.join(userDir, fileName);

        try {
            await fs.mkdir(userDir, { recursive: true });
            await fs.writeFile(filePath, csvData); // Use fs.promises
            console.log(`[mlService] Successfully wrote historical data for ${stockSymbol} to CSV: ${filePath}`);

            return NextResponse.json({
                success: true,
                message: `Historical data for ${stockSymbol} fetched and saved. ${actualHistoricalData.length} records.`,
                recordsFetched: actualHistoricalData.length,
                csvFilePath: filePath,
            }, { status: 200 });

        } catch (error) {
            console.error(`[mlService] Error writing CSV file for ${stockSymbol} to ${filePath}:`, error);
            return NextResponse.json({ success: false, message: "Failed to save data to CSV.", error: error instanceof Error ? error.message : String(error) }, { status: 500 });
        }

    } catch (error) {
        console.error("[mlService] Overall error in POST /api/mlService:", error);
        return NextResponse.json({ success: false, message: "An unexpected error occurred on the server.", error: error instanceof Error ? error.message : String(error) }, { status: 500 });
    }
}






























































































































































// // import { NextRequest, NextResponse } from 'next/server';
// // import { NseIndia, DateRange, EquityHistoricalData as NseEquityHistoricalRecord } from 'stock-nse-india';
// // import fs from 'fs/promises';
// // import fsSimple from 'fs';
// // import path from 'path';

// // const nseIndia = new NseIndia();

// // interface ActualHistoricalRecord {
// // _id: string;
// // CH_SYMBOL: string;
// // CH_SERIES: string;
// // CH_MARKET_TYPE: string;
// // CH_TRADE_HIGH_PRICE: number;
// // CH_TRADE_LOW_PRICE: number;
// // CH_OPENING_PRICE: number;
// // CH_CLOSING_PRICE: number;
// // CH_LAST_TRADED_PRICE: number;
// // CH_PREVIOUS_CLS_PRICE: number;
// // CH_TOT_TRADED_QTY: number;
// // CH_TOT_TRADED_VAL: number;
// // CH_52WEEK_HIGH_PRICE: number;
// // CH_52WEEK_LOW_PRICE: number;
// // CH_TOTAL_TRADES: number | null;
// // CH_ISIN: string;
// // CH_TIMESTAMP: string; // Date string like "YYYY-MM-DD"
// // TIMESTAMP: string;    // ISO date string (seems like an internal/raw version)
// // createdAt: string;
// // updatedAt: string;
// // __v?: number; // Optional based on some outputs
// // SLBMH_TOT_VAL?: number | null;
// // VWAP?: number;
// // mTIMESTAMP?: string;
// // }

// // function convertToCSV(data: ActualHistoricalRecord[]): string {
// // if (!data || data.length === 0) {
// // return "";
// // }

// // // 1. Define your desired CSV headers in the order you want them
// // const desiredHeaders = [
// //     "Date", "Open", "High", "Low", "Close", "Volume", "Turnover",
// //     "Symbol", "Series", "PrevClose", "LTP", "Trades"
// // ];

// // // 2. Create a mapping from these desired headers to functions that extract the data
// // const headerValueExtractors: { [key: string]: (record: ActualHistoricalRecord) => string | number | null } = {
// //     "Date": record => record.CH_TIMESTAMP,
// //     "Open": record => record.CH_OPENING_PRICE,
// //     "High": record => record.CH_TRADE_HIGH_PRICE,
// //     "Low": record => record.CH_TRADE_LOW_PRICE,
// //     "Close": record => record.CH_CLOSING_PRICE,
// //     "Volume": record => record.CH_TOT_TRADED_QTY,
// //     "Turnover": record => record.CH_TOT_TRADED_VAL,
// //     "Symbol": record => record.CH_SYMBOL,
// //     "Series": record => record.CH_SERIES,
// //     "PrevClose": record => record.CH_PREVIOUS_CLS_PRICE,
// //     "LTP": record => record.CH_LAST_TRADED_PRICE,
// //     "Trades": record => record.CH_TOTAL_TRADES
// // };

// // const csvRows = [desiredHeaders.join(',')]; // The header row

// // const sortedData = [...data].sort((a, b) => new Date(a.CH_TIMESTAMP).getTime() - new Date(b.CH_TIMESTAMP).getTime());

// // sortedData.forEach(record => {
// //     // For each record, map through the desiredHeaders and use the extractors
// //     const rowValues = desiredHeaders.map(header => {
// //         const value = headerValueExtractors[header](record);
// //         return value === null ? '' : String(value); // Ensure values are strings for join, handle nulls
// //     });
// //     csvRows.push(rowValues.join(','));
// // });

// // return csvRows.join('\n');


// // }

// // // src/app/api/mlService/route.ts

// // function getFormattedTodayDateTime(): string {
// //     const now = new Date();
// //     const year = now.getFullYear();
// //     const month = (now.getMonth() + 1).toString().padStart(2, '0');
// //     const day = now.getDate().toString().padStart(2, '0');
// //     const hours = now.getHours().toString().padStart(2, '0');
// //     const minutes = now.getMinutes().toString().padStart(2, '0');
// //     const seconds = now.getSeconds().toString().padStart(2, '0');
// //     return `${year}${month}${day}_${hours}${minutes}${seconds}`; // <--- CORRECTED: Enclosed in backticks
// // }

// // export async function POST(req: NextRequest) {
// // try {
// // const { stockSymbol, market, email, startDate, endDate } = await req.json();

// // if (!stockSymbol || !market || !email || !startDate || !endDate) {
// //         return NextResponse.json({ success: false, message: "stockSymbol, market, email, startDate, and endDate are all required." }, { status: 400 });
// //     }

// //     if (market.toUpperCase() !== "INDIA") {
// //         return NextResponse.json({ success: false, message: "Currently, only INDIA market is supported for ML service." }, { status: 400 });
// //     }

// //     console.log(`[mlService] Received request: Symbol=${stockSymbol}, Market=${market}, Email=${email}, Start=${startDate}, End=${endDate}`);

// //     const range = {
// //         start: new Date(startDate),
// //         end: new Date(endDate),
// //     };

// //     console.log(`[mlService] Fetching historical data for ${stockSymbol.toUpperCase()} from ${range.start.toISOString()} to ${range.end.toISOString()}`);

// //     let historicalDataResponse: any; // Use 'any' initially to inspect the raw response
// //     try {

// //         await nseIndia.getEquityHistoricalData(stockSymbol, range).then(data => {
// //             historicalDataResponse = data
// //                 console.log(JSON.stringify(data) )
// //                 console.log('""##@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
// //                 const filePath = './scrap2.json'
// //                 fsSimple.writeFileSync(filePath,JSON.stringify(data))
// //         }).finally( data =>{
            
// //             // historicalDataResponse = await nseIndia.getEquityHistoricalData(stockSymbol.toUpperCase(), range);
// //             console.log(`[mlService] Raw response from getEquityHistoricalData for ${stockSymbol}:`, JSON.stringify(historicalDataResponse, null, 2).substring(0,1000) + "..."); // Log a snippet of the raw response
// //         })


// //     } catch (error) {
// //         console.error(`[mlService] Error fetching historical data from NSE for ${stockSymbol}:`, error);
// //         return NextResponse.json({ success: false, message: `Failed to fetch historical data for ${stockSymbol}.`, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
// //     }

// //     let actualHistoricalData: ActualHistoricalRecord[] = [];

// //     // Check the structure of historicalDataResponse
// //     if (Array.isArray(historicalDataResponse)) {
// //         if (historicalDataResponse.length > 0 && historicalDataResponse[0] && Array.isArray(historicalDataResponse[0].data)) {
// //             // Matches the structure: [ { data: [...] } ]
// //             actualHistoricalData = historicalDataResponse[0].data as ActualHistoricalRecord[];
// //             console.log("[mlService] Extracted data from nested 'data' array structure.");
// //         } else if (historicalDataResponse.length > 0 && typeof historicalDataResponse[0].CH_SYMBOL === 'string') {
// //             // Matches the structure: [ record, record, ... ] (direct array of records)
// //             actualHistoricalData = historicalDataResponse as ActualHistoricalRecord[];
// //             console.log("[mlService] Received a direct array of historical records.");
// //         } else if (historicalDataResponse.length === 0) {
// //             console.log("[mlService] getEquityHistoricalData returned an empty array.");
// //         } else {
// //             console.warn("[mlService] Unrecognized structure from getEquityHistoricalData. First element:", historicalDataResponse[0]);
// //         }
// //     } else if (historicalDataResponse && typeof historicalDataResponse === 'object' && Array.isArray((historicalDataResponse as any).data)) {
// //          // Matches the structure: { data: [...] } (less likely based on your test but possible)
// //          actualHistoricalData = (historicalDataResponse as any).data as ActualHistoricalRecord[];
// //          console.log("[mlService] Extracted data from object with 'data' array property.");
// //     } else {
// //         console.warn("[mlService] getEquityHistoricalData returned an unexpected structure or was null/undefined:", historicalDataResponse);
// //     }


// //     if (!actualHistoricalData || actualHistoricalData.length === 0) {
// //         console.warn(`[mlService] No actual historical data records extracted for ${stockSymbol} in the response structure or specified range.`);
// //         return NextResponse.json({ success: false, message: `No historical data found for ${stockSymbol} from ${range.start.toLocaleDateString()} to ${range.end.toLocaleDateString()}. Check symbol and date range, or library response structure.` }, { status: 404 });
// //     }

// //     console.log(`[mlService] Extracted ${actualHistoricalData.length} actual historical records for ${stockSymbol}.`);

// //     // --- The rest of the code for CSV conversion and saving remains the same ---
// //     const csvData = await convertToCSV(actualHistoricalData);
// //     if (!csvData) {
// //         console.error("[mlService] Failed to convert fetched data to CSV format (data was empty after extraction).");
// //         return NextResponse.json({ success: false, message: "Failed to process fetched data into CSV." }, { status: 500 });
// //     }

// //     const sanitizedEmail = email.replace(/[^a-zA-Z0-9_.-]/g, '_');
// //     const todayDateTime = getFormattedTodayDateTime();
// //     const baseDir = path.join(process.cwd(), "csvGenerated");
// //     const userDir = path.join(baseDir, sanitizedEmail);
// //     const fileName = `${stockSymbol.toUpperCase()}_${market.toUpperCase()}_${todayDateTime}.csv`;
// //     const filePath = path.join(userDir, fileName);

// //     try {
// //         await fs.mkdir(userDir, { recursive: true });
// //         // await fs.writeFile(filePath, csvData);
// //         fsSimple.writeFileSync(filePath, csvData);
// //         console.log(`[mlService] Successfully wrote historical data for ${stockSymbol} to CSV: ${filePath}`);

// //         return NextResponse.json({
// //             success: true,
// //             message: `Historical data for ${stockSymbol} fetched and saved. ${actualHistoricalData.length} records.`,
// //             recordsFetched: actualHistoricalData.length,
// //             csvFilePath: filePath,
// //         }, { status: 200 });

// //     } catch (error) {
// //         console.error(`[mlService] Error writing CSV file for ${stockSymbol} to ${filePath}:`, error);
// //         return NextResponse.json({ success: false, message: "Failed to save data to CSV.", error: error instanceof Error ? error.message : String(error) }, { status: 500 });
// //     }

// // } catch (error) {
// //     console.error("[mlService] Overall error in POST /api/mlService:", error);
// //     return NextResponse.json({ success: false, message: "An unexpected error occurred on the server.", error: error instanceof Error ? error.message : String(error) }, { status: 500 });
// // }

// // }