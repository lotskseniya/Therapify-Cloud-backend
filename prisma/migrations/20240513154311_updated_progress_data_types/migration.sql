/*
  Warnings:

  - You are about to drop the column `feelingTense` on the `ClientProgressAnxiety` table. All the data in the column will be lost.
  - You are about to drop the column `heartRacing` on the `ClientProgressAnxiety` table. All the data in the column will be lost.
  - You are about to drop the column `suddendlyscared` on the `ClientProgressAnxiety` table. All the data in the column will be lost.
  - You are about to drop the column `blamingyourself` on the `ClientProgressDepression` table. All the data in the column will be lost.
  - You are about to drop the column `endingLifeThoughts` on the `ClientProgressDepression` table. All the data in the column will be lost.
  - You are about to drop the column `feelingBlue` on the `ClientProgressDepression` table. All the data in the column will be lost.
  - You are about to drop the column `feelingEffortless` on the `ClientProgressDepression` table. All the data in the column will be lost.
  - You are about to drop the column `feelingLonely` on the `ClientProgressDepression` table. All the data in the column will be lost.
  - You are about to drop the column `feelingNoInterest` on the `ClientProgressDepression` table. All the data in the column will be lost.
  - You are about to drop the column `feelingWorthlessness` on the `ClientProgressDepression` table. All the data in the column will be lost.
  - You are about to drop the column `lowEnergy` on the `ClientProgressDepression` table. All the data in the column will be lost.
  - You are about to drop the column `poorAppetite` on the `ClientProgressDepression` table. All the data in the column will be lost.
  - You are about to drop the column `sexualLoss` on the `ClientProgressDepression` table. All the data in the column will be lost.
  - You are about to drop the column `tpappedFeelings` on the `ClientProgressDepression` table. All the data in the column will be lost.
  - You are about to drop the column `wooringTooMuch` on the `ClientProgressDepression` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClientProgressAnxiety" DROP COLUMN "feelingTense",
DROP COLUMN "heartRacing",
DROP COLUMN "suddendlyscared",
ADD COLUMN     "feeling_tense" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "heart_racing" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "suddendly_scared" DOUBLE PRECISION DEFAULT 0.0,
ALTER COLUMN "fearful" SET DEFAULT 0.0,
ALTER COLUMN "fearful" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "faintness" SET DEFAULT 0.0,
ALTER COLUMN "faintness" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "nervousness" SET DEFAULT 0.0,
ALTER COLUMN "nervousness" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "trembling" SET DEFAULT 0.0,
ALTER COLUMN "trembling" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "headaches" SET DEFAULT 0.0,
ALTER COLUMN "headaches" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "panic" SET DEFAULT 0.0,
ALTER COLUMN "panic" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "restlessness" SET DEFAULT 0.0,
ALTER COLUMN "restlessness" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ClientProgressDepression" DROP COLUMN "blamingyourself",
DROP COLUMN "endingLifeThoughts",
DROP COLUMN "feelingBlue",
DROP COLUMN "feelingEffortless",
DROP COLUMN "feelingLonely",
DROP COLUMN "feelingNoInterest",
DROP COLUMN "feelingWorthlessness",
DROP COLUMN "lowEnergy",
DROP COLUMN "poorAppetite",
DROP COLUMN "sexualLoss",
DROP COLUMN "tpappedFeelings",
DROP COLUMN "wooringTooMuch",
ADD COLUMN     "blaming_yourself" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "ending_life_thoughts" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "feeling_blue" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "feeling_effortless" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "feeling_lonely" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "feeling_no_interest" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "feeling_worthlessness" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "low_energy" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "poor_appetite" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "sexual_loss" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "trapped_feelings" DOUBLE PRECISION DEFAULT 0.0,
ADD COLUMN     "wooring_too_much" DOUBLE PRECISION DEFAULT 0.0,
ALTER COLUMN "crying" SET DEFAULT 0.0,
ALTER COLUMN "crying" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "insomnia" SET DEFAULT 0.0,
ALTER COLUMN "insomnia" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "hopeness" SET DEFAULT 0.0,
ALTER COLUMN "hopeness" SET DATA TYPE DOUBLE PRECISION;
