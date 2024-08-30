/*
  Warnings:

  - Added the required column `consultation_session_id` to the `SessionDuration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SessionDuration" ADD COLUMN     "consultation_session_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SessionDuration" ADD CONSTRAINT "SessionDuration_consultation_session_id_fkey" FOREIGN KEY ("consultation_session_id") REFERENCES "ConsultationSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
