/*
  Warnings:

  - You are about to drop the column `Faintness` on the `ClientProgress_Anxiety` table. All the data in the column will be lost.
  - You are about to drop the column `Fearful` on the `ClientProgress_Anxiety` table. All the data in the column will be lost.
  - You are about to drop the column `FeelingTense` on the `ClientProgress_Anxiety` table. All the data in the column will be lost.
  - You are about to drop the column `Headaches` on the `ClientProgress_Anxiety` table. All the data in the column will be lost.
  - You are about to drop the column `HeartRacing` on the `ClientProgress_Anxiety` table. All the data in the column will be lost.
  - You are about to drop the column `Nervousness` on the `ClientProgress_Anxiety` table. All the data in the column will be lost.
  - You are about to drop the column `Panic` on the `ClientProgress_Anxiety` table. All the data in the column will be lost.
  - You are about to drop the column `Restlessness` on the `ClientProgress_Anxiety` table. All the data in the column will be lost.
  - You are about to drop the column `Suddendlyscared` on the `ClientProgress_Anxiety` table. All the data in the column will be lost.
  - You are about to drop the column `Trembling` on the `ClientProgress_Anxiety` table. All the data in the column will be lost.
  - You are about to drop the column `Blamingyourself` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `Crying` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `EndingLifeThoughts` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `FeelingBlue` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `FeelingEffortless` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `FeelingLonely` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `FeelingNoInterest` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `FeelingWorthlessness` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `Hopeness` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `Insomnia` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `LowEnergy` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `PoorAppetite` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `SexualLoss` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `TpappedFeelings` on the `ClientProgress_Depression` table. All the data in the column will be lost.
  - You are about to drop the column `WooringTooMuch` on the `ClientProgress_Depression` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClientProgress_Anxiety" DROP COLUMN "Faintness",
DROP COLUMN "Fearful",
DROP COLUMN "FeelingTense",
DROP COLUMN "Headaches",
DROP COLUMN "HeartRacing",
DROP COLUMN "Nervousness",
DROP COLUMN "Panic",
DROP COLUMN "Restlessness",
DROP COLUMN "Suddendlyscared",
DROP COLUMN "Trembling",
ADD COLUMN     "faintness" INTEGER DEFAULT 1,
ADD COLUMN     "fearful" INTEGER DEFAULT 1,
ADD COLUMN     "feelingTense" INTEGER DEFAULT 1,
ADD COLUMN     "headaches" INTEGER DEFAULT 1,
ADD COLUMN     "heartRacing" INTEGER DEFAULT 1,
ADD COLUMN     "nervousness" INTEGER DEFAULT 1,
ADD COLUMN     "panic" INTEGER DEFAULT 1,
ADD COLUMN     "restlessness" INTEGER DEFAULT 1,
ADD COLUMN     "suddendlyscared" INTEGER DEFAULT 1,
ADD COLUMN     "trembling" INTEGER DEFAULT 1;

-- AlterTable
ALTER TABLE "ClientProgress_Depression" DROP COLUMN "Blamingyourself",
DROP COLUMN "Crying",
DROP COLUMN "EndingLifeThoughts",
DROP COLUMN "FeelingBlue",
DROP COLUMN "FeelingEffortless",
DROP COLUMN "FeelingLonely",
DROP COLUMN "FeelingNoInterest",
DROP COLUMN "FeelingWorthlessness",
DROP COLUMN "Hopeness",
DROP COLUMN "Insomnia",
DROP COLUMN "LowEnergy",
DROP COLUMN "PoorAppetite",
DROP COLUMN "SexualLoss",
DROP COLUMN "TpappedFeelings",
DROP COLUMN "WooringTooMuch",
ADD COLUMN     "blamingyourself" INTEGER DEFAULT 1,
ADD COLUMN     "crying" INTEGER DEFAULT 1,
ADD COLUMN     "endingLifeThoughts" INTEGER DEFAULT 1,
ADD COLUMN     "feelingBlue" INTEGER DEFAULT 1,
ADD COLUMN     "feelingEffortless" INTEGER DEFAULT 1,
ADD COLUMN     "feelingLonely" INTEGER DEFAULT 1,
ADD COLUMN     "feelingNoInterest" INTEGER DEFAULT 1,
ADD COLUMN     "feelingWorthlessness" INTEGER DEFAULT 1,
ADD COLUMN     "hopeness" INTEGER DEFAULT 1,
ADD COLUMN     "insomnia" INTEGER DEFAULT 1,
ADD COLUMN     "lowEnergy" INTEGER DEFAULT 1,
ADD COLUMN     "poorAppetite" INTEGER DEFAULT 1,
ADD COLUMN     "sexualLoss" INTEGER DEFAULT 1,
ADD COLUMN     "tpappedFeelings" INTEGER DEFAULT 1,
ADD COLUMN     "wooringTooMuch" INTEGER DEFAULT 1;
