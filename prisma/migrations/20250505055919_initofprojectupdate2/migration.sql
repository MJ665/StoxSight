/*
  Warnings:

  - The values [ZERODHA,UPSTOX] on the enum `AuthMethod` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AuthMethod_new" AS ENUM ('GOOGLE', 'EMAIL');
ALTER TABLE "User" ALTER COLUMN "authMethod" TYPE "AuthMethod_new" USING ("authMethod"::text::"AuthMethod_new");
ALTER TYPE "AuthMethod" RENAME TO "AuthMethod_old";
ALTER TYPE "AuthMethod_new" RENAME TO "AuthMethod";
DROP TYPE "AuthMethod_old";
COMMIT;

-- CreateTable
CREATE TABLE "ZerodhaAccount" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "clientId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "isLinked" BOOLEAN NOT NULL DEFAULT false,
    "linkedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ZerodhaAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UpstoxAccount" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "clientId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "isLinked" BOOLEAN NOT NULL DEFAULT false,
    "linkedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UpstoxAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ZerodhaAccount_userId_key" ON "ZerodhaAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UpstoxAccount_userId_key" ON "UpstoxAccount"("userId");

-- AddForeignKey
ALTER TABLE "ZerodhaAccount" ADD CONSTRAINT "ZerodhaAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UpstoxAccount" ADD CONSTRAINT "UpstoxAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
