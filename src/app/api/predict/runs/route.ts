import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { NEXT_AUTH } from '@/app/api/lib/auth';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const session = await getServerSession(NEXT_AUTH);

    if (!session?.user?.id) {
        return NextResponse.json({ success: false, message: "Authentication required." }, { status: 401 });
    }
    const userId = parseInt(session.user.id as string, 10);
    if (isNaN(userId)) {
        return NextResponse.json({ success: false, message: "Invalid user session." }, { status: 400 });
    }

    try {
        const predictionRuns = await prisma.predictionRun.findMany({
            where: { userId: userId },
            orderBy: { requestedAt: 'desc' },
            // Select specific fields to avoid sending too much data if not needed on list view
            select: {
                id: true,
                stockSymbol: true,
                market: true,
                status: true,
                requestedAt: true,
                completedAt: true,
                pdfReportUrl: true,
                mlServiceMessage: true,
                errorMessage: true,
                runIdFromML: true
            }
        });
        return NextResponse.json({ success: true, data: predictionRuns }, { status: 200 });
    } catch (error: any) {
        console.error("[predict/runs GET] Error fetching prediction runs:", error);
        return NextResponse.json({ success: false, message: "Failed to fetch prediction runs.", details: error.message }, { status: 500 });
    }
}