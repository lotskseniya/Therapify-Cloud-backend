/*
  Warnings:

  - You are about to drop the `ClientProgress_Anxiety` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClientProgress_Depression` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClientProgress_Anxiety" DROP CONSTRAINT "ClientProgress_Anxiety_client_id_fkey";

-- DropForeignKey
ALTER TABLE "ClientProgress_Depression" DROP CONSTRAINT "ClientProgress_Depression_client_id_fkey";

-- DropTable
DROP TABLE "ClientProgress_Anxiety";

-- DropTable
DROP TABLE "ClientProgress_Depression";

-- CreateTable
CREATE TABLE "ClientProgressAnxiety" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "suddendlyscared" INTEGER DEFAULT 1,
    "fearful" INTEGER DEFAULT 1,
    "faintness" INTEGER DEFAULT 1,
    "nervousness" INTEGER DEFAULT 1,
    "heartRacing" INTEGER DEFAULT 1,
    "trembling" INTEGER DEFAULT 1,
    "feelingTense" INTEGER DEFAULT 1,
    "headaches" INTEGER DEFAULT 1,
    "panic" INTEGER DEFAULT 1,
    "restlessness" INTEGER DEFAULT 1,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "ClientProgressAnxiety_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientProgressDepression" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "lowEnergy" INTEGER DEFAULT 1,
    "blamingyourself" INTEGER DEFAULT 1,
    "crying" INTEGER DEFAULT 1,
    "sexualLoss" INTEGER DEFAULT 1,
    "poorAppetite" INTEGER DEFAULT 1,
    "insomnia" INTEGER DEFAULT 1,
    "hopeness" INTEGER DEFAULT 1,
    "feelingBlue" INTEGER DEFAULT 1,
    "feelingLonely" INTEGER DEFAULT 1,
    "endingLifeThoughts" INTEGER DEFAULT 1,
    "tpappedFeelings" INTEGER DEFAULT 1,
    "wooringTooMuch" INTEGER DEFAULT 1,
    "feelingNoInterest" INTEGER DEFAULT 1,
    "feelingEffortless" INTEGER DEFAULT 1,
    "feelingWorthlessness" INTEGER DEFAULT 1,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "ClientProgressDepression_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClientProgressAnxiety" ADD CONSTRAINT "ClientProgressAnxiety_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientProgressDepression" ADD CONSTRAINT "ClientProgressDepression_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
