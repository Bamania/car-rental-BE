-- CreateTable
CREATE TABLE "CarInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price_per_day" DOUBLE PRECISION NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "fuel_type" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,

    CONSTRAINT "CarInfo_pkey" PRIMARY KEY ("id")
);
