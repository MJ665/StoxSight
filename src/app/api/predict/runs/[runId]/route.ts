import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { NEXT_AUTH } from '@/app/api/lib/auth';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

interface RouteContext {
    params: {
        runId: string; // This is the ID from your PredictionRun table (CUID)
    };
}

export async function GET(req: NextRequest, context: RouteContext) {
    const session = await getServerSession(NEXT_AUTH);
    const { runId } = context.params;

    if (!session?.user?.id) {
        // Allow fetching by runId even if not logged in, IF the run itself isn't user-specific
        // Or, enforce that only the user who created it can fetch it.
        // For now, let's allow public fetch by ID if no session, but this could be a security consideration.
        // If user-specific, uncomment the auth check.
        // return NextResponse.json({ success: false, message: "Authentication required." }, { status: 401 });
    }
    
    // Optional: Check if the logged-in user owns this runId if currentUserId is available
    // const currentUserId = session?.user?.id ? parseInt(session.user.id as string, 10) : undefined;

    try {
        const predictionRun = await prisma.predictionRun.findUnique({
            where: { id: runId },
            // You can decide if you want to add:
            // ...(currentUserId && { userId: currentUserId }) // To ensure user can only get their runs
        });

        if (!predictionRun) {
            return NextResponse.json({ success: false, message: "Prediction run not found." }, { status: 404 });
        }

        // If you restricted by userId and it wasn't found for that user, it will also be null.

        return NextResponse.json({ success: true, data: predictionRun }, { status: 200 });
    } catch (error: any) {
        console.error(`[predict/runs/${runId} GET] Error fetching prediction run:`, error);
        return NextResponse.json({ success: false, message: "Failed to fetch prediction run.", details: error.message }, { status: 500 });
    }
}