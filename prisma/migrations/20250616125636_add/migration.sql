/*
  Warnings:

  - You are about to drop the column `emailAddress` on the `BookingInfo` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `BookingInfo` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `BookingInfo` table. All the data in the column will be lost.
  - Added the required column `userId` to the `BookingInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookingInfo" DROP COLUMN "emailAddress",
DROP COLUMN "firstName",
DROP COLUMN "phoneNumber",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "BookingInfo" ADD CONSTRAINT "BookingInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
