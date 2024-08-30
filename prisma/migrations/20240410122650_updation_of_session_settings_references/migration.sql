/*
  Warnings:

  - You are about to drop the column `consultation_session_id` on the `SessionDuration` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "SessionDuration" DROP CONSTRAINT "SessionDuration_consultation_session_id_fkey";

-- AlterTable
ALTER TABLE "SessionDuration" DROP COLUMN "consultation_session_id";
