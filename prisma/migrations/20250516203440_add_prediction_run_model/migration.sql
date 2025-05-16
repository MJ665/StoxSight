-- AlterTable
ALTER TABLE "PredictionRun" ADD COLUMN     "mlServiceMessage" TEXT,
ALTER COLUMN "runIdFromML" DROP NOT NULL;
