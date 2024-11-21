/*
  Warnings:

  - A unique constraint covering the columns `[shortName]` on the table `Board` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shortName` to the `Board` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Board" ADD COLUMN     "shortName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Board_shortName_key" ON "Board"("shortName");
