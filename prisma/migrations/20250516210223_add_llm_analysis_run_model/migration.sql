-- CreateEnum
CREATE TYPE "LlmRunStatus" AS ENUM ('PENDING', 'FETCHING_DATA', 'PROCESSING_LLM', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "LlmAnalysisRun" (
    "id" TEXT NOT NULL,
    "userId" INTEGER,
    "user_query" TEXT NOT NULL,
    "stock_symbol" TEXT NOT NULL,
    "market" TEXT NOT NULL,
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "LlmRunStatus" NOT NULL DEFAULT 'PENDING',
    "completedAt" TIMESTAMP(3),
    "error_message" TEXT,
    "screener_data_snapshot" JSONB,
    "nse_market_data_snapshot" JSONB,
    "llm_idea_output" TEXT,
    "llm_report_output" TEXT,
    "llm_conclusion_json" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LlmAnalysisRun_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LlmAnalysisRun_userId_idx" ON "LlmAnalysisRun"("userId");

-- CreateIndex
CREATE INDEX "LlmAnalysisRun_stock_symbol_market_idx" ON "LlmAnalysisRun"("stock_symbol", "market");

-- AddForeignKey
ALTER TABLE "LlmAnalysisRun" ADD CONSTRAINT "LlmAnalysisRun_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
