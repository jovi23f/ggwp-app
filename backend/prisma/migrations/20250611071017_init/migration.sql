-- CreateTable
CREATE TABLE "Nutritionist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Active',

    CONSTRAINT "Nutritionist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nutritionist_phone_key" ON "Nutritionist"("phone");
