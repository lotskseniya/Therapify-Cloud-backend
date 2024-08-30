/*
  Warnings:

  - You are about to alter the column `fearful` on the `ClientProgressAnxiety` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `faintness` on the `ClientProgressAnxiety` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `nervousness` on the `ClientProgressAnxiety` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `trembling` on the `ClientProgressAnxiety` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `headaches` on the `ClientProgressAnxiety` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `panic` on the `ClientProgressAnxiety` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `restlessness` on the `ClientProgressAnxiety` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `feeling_tense` on the `ClientProgressAnxiety` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `heart_racing` on the `ClientProgressAnxiety` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `suddendly_scared` on the `ClientProgressAnxiety` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `crying` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `insomnia` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `hopeness` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `blaming_yourself` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `ending_life_thoughts` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `feeling_blue` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `feeling_effortless` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `feeling_lonely` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `feeling_no_interest` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `feeling_worthlessness` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `low_energy` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `poor_appetite` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `sexual_loss` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `trapped_feelings` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `wooring_too_much` on the `ClientProgressDepression` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "ClientProgressAnxiety" ALTER COLUMN "fearful" SET DEFAULT 0,
ALTER COLUMN "fearful" SET DATA TYPE INTEGER,
ALTER COLUMN "faintness" SET DEFAULT 0,
ALTER COLUMN "faintness" SET DATA TYPE INTEGER,
ALTER COLUMN "nervousness" SET DEFAULT 0,
ALTER COLUMN "nervousness" SET DATA TYPE INTEGER,
ALTER COLUMN "trembling" SET DEFAULT 0,
ALTER COLUMN "trembling" SET DATA TYPE INTEGER,
ALTER COLUMN "headaches" SET DEFAULT 0,
ALTER COLUMN "headaches" SET DATA TYPE INTEGER,
ALTER COLUMN "panic" SET DEFAULT 0,
ALTER COLUMN "panic" SET DATA TYPE INTEGER,
ALTER COLUMN "restlessness" SET DEFAULT 0,
ALTER COLUMN "restlessness" SET DATA TYPE INTEGER,
ALTER COLUMN "feeling_tense" SET DEFAULT 0,
ALTER COLUMN "feeling_tense" SET DATA TYPE INTEGER,
ALTER COLUMN "heart_racing" SET DEFAULT 0,
ALTER COLUMN "heart_racing" SET DATA TYPE INTEGER,
ALTER COLUMN "suddendly_scared" SET DEFAULT 0,
ALTER COLUMN "suddendly_scared" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "ClientProgressDepression" ALTER COLUMN "crying" SET DEFAULT 0,
ALTER COLUMN "crying" SET DATA TYPE INTEGER,
ALTER COLUMN "insomnia" SET DEFAULT 0,
ALTER COLUMN "insomnia" SET DATA TYPE INTEGER,
ALTER COLUMN "hopeness" SET DEFAULT 0,
ALTER COLUMN "hopeness" SET DATA TYPE INTEGER,
ALTER COLUMN "blaming_yourself" SET DEFAULT 0,
ALTER COLUMN "blaming_yourself" SET DATA TYPE INTEGER,
ALTER COLUMN "ending_life_thoughts" SET DEFAULT 0,
ALTER COLUMN "ending_life_thoughts" SET DATA TYPE INTEGER,
ALTER COLUMN "feeling_blue" SET DEFAULT 0,
ALTER COLUMN "feeling_blue" SET DATA TYPE INTEGER,
ALTER COLUMN "feeling_effortless" SET DEFAULT 0,
ALTER COLUMN "feeling_effortless" SET DATA TYPE INTEGER,
ALTER COLUMN "feeling_lonely" SET DEFAULT 0,
ALTER COLUMN "feeling_lonely" SET DATA TYPE INTEGER,
ALTER COLUMN "feeling_no_interest" SET DEFAULT 0,
ALTER COLUMN "feeling_no_interest" SET DATA TYPE INTEGER,
ALTER COLUMN "feeling_worthlessness" SET DEFAULT 0,
ALTER COLUMN "feeling_worthlessness" SET DATA TYPE INTEGER,
ALTER COLUMN "low_energy" SET DEFAULT 0,
ALTER COLUMN "low_energy" SET DATA TYPE INTEGER,
ALTER COLUMN "poor_appetite" SET DEFAULT 0,
ALTER COLUMN "poor_appetite" SET DATA TYPE INTEGER,
ALTER COLUMN "sexual_loss" SET DEFAULT 0,
ALTER COLUMN "sexual_loss" SET DATA TYPE INTEGER,
ALTER COLUMN "trapped_feelings" SET DEFAULT 0,
ALTER COLUMN "trapped_feelings" SET DATA TYPE INTEGER,
ALTER COLUMN "wooring_too_much" SET DEFAULT 0,
ALTER COLUMN "wooring_too_much" SET DATA TYPE INTEGER;
