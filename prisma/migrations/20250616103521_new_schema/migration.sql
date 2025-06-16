-- CreateTable
CREATE TABLE "BookingInfo" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "pickupDate" TIMESTAMP(3) NOT NULL,
    "dropoffDate" TIMESTAMP(3) NOT NULL,
    "pickupLocation" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BookingInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookingInfo" ADD CONSTRAINT "BookingInfo_carId_fkey" FOREIGN KEY ("carId") REFERENCES "CarInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
