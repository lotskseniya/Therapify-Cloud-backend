-- CreateTable
CREATE TABLE "ClientProgress" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "session_duration" INTEGER DEFAULT 50,
    "break_duration" INTEGER DEFAULT 10,
    "long_break_duration" INTEGER DEFAULT 30,
    "sessions_count" INTEGER DEFAULT 7,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "ClientProgress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClientProgress" ADD CONSTRAINT "ClientProgress_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
