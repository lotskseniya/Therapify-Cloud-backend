/*
  Warnings:

  - You are about to drop the `ClientProgress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClientProgress" DROP CONSTRAINT "ClientProgress_client_id_fkey";

-- DropTable
DROP TABLE "ClientProgress";

-- CreateTable
CREATE TABLE "ClientProgress_Anxiety" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "Suddendlyscared" INTEGER DEFAULT 1,
    "Fearful" INTEGER DEFAULT 1,
    "Faintness" INTEGER DEFAULT 1,
    "Nervousness" INTEGER DEFAULT 1,
    "HeartRacing" INTEGER DEFAULT 1,
    "Trembling" INTEGER DEFAULT 1,
    "FeelingTense" INTEGER DEFAULT 1,
    "Headaches" INTEGER DEFAULT 1,
    "Panic" INTEGER DEFAULT 1,
    "Restlessness" INTEGER DEFAULT 1,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "ClientProgress_Anxiety_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientProgress_Depression" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "LowEnergy" INTEGER DEFAULT 1,
    "Blamingyourself" INTEGER DEFAULT 1,
    "Crying" INTEGER DEFAULT 1,
    "SexualLoss" INTEGER DEFAULT 1,
    "PoorAppetite" INTEGER DEFAULT 1,
    "Insomnia" INTEGER DEFAULT 1,
    "Hopeness" INTEGER DEFAULT 1,
    "FeelingBlue" INTEGER DEFAULT 1,
    "FeelingLonely" INTEGER DEFAULT 1,
    "EndingLifeThoughts" INTEGER DEFAULT 1,
    "TpappedFeelings" INTEGER DEFAULT 1,
    "WooringTooMuch" INTEGER DEFAULT 1,
    "FeelingNoInterest" INTEGER DEFAULT 1,
    "FeelingEffortless" INTEGER DEFAULT 1,
    "FeelingWorthlessness" INTEGER DEFAULT 1,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "ClientProgress_Depression_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClientProgress_Anxiety" ADD CONSTRAINT "ClientProgress_Anxiety_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientProgress_Depression" ADD CONSTRAINT "ClientProgress_Depression_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
