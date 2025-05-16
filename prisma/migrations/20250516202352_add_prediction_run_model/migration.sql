-- CreateEnum
CREATE TYPE "RunStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'PARTIAL');

-- CreateTable
CREATE TABLE "PredictionRun" (
    "id" TEXT NOT NULL,
    "userId" INTEGER,
    "stockSymbol" TEXT NOT NULL,
    "market" TEXT NOT NULL,
    "runIdFromML" TEXT NOT NULL,
    "status" "RunStatus" NOT NULL DEFAULT 'PENDING',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "lstm_results" JSONB,
    "gru_results" JSONB,
    "transformer_results" JSONB,
    "polynomial_results" JSONB,
    "trading_suggestion" JSONB,
    "ai_analysis" JSONB,
    "plot_urls" JSONB,
    "pdf_report_url" TEXT,
    "email_sent_status" TEXT,
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PredictionRun_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PredictionRun_runIdFromML_key" ON "PredictionRun"("runIdFromML");

-- CreateIndex
CREATE INDEX "PredictionRun_userId_idx" ON "PredictionRun"("userId");

-- CreateIndex
CREATE INDEX "PredictionRun_stockSymbol_market_idx" ON "PredictionRun"("stockSymbol", "market");

-- AddForeignKey
ALTER TABLE "PredictionRun" ADD CONSTRAINT "PredictionRun_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
