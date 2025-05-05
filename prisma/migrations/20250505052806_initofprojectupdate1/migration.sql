/*
  Warnings:

  - You are about to drop the column `price` on the `CryptoAsset` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `IndiaStock` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `USStock` table. All the data in the column will be lost.
  - Added the required column `currentPrice` to the `CryptoAsset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openPrice` to the `CryptoAsset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prevClosePrice` to the `CryptoAsset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentPrice` to the `IndiaStock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openPrice` to the `IndiaStock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prevClosePrice` to the `IndiaStock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentPrice` to the `USStock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openPrice` to the `USStock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prevClosePrice` to the `USStock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CryptoAsset" DROP COLUMN "price",
ADD COLUMN     "currentPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "openPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "prevClosePrice" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "IndiaStock" DROP COLUMN "price",
ADD COLUMN     "currentPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "openPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "prevClosePrice" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "USStock" DROP COLUMN "price",
ADD COLUMN     "currentPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "openPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "prevClosePrice" DOUBLE PRECISION NOT NULL;
