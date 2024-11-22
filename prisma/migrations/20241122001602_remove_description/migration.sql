/*
  Warnings:

  - You are about to drop the column `description` on the `Board` table. All the data in the column will be lost.
  - You are about to drop the column `completedAt` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Board" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "completedAt";
