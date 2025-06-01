-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'VENDOR');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "ForkliftStatus" AS ENUM ('STANDBY', 'RENTED', 'OWNED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Forklift" (
    "id" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "status" "ForkliftStatus" NOT NULL DEFAULT 'STANDBY',
    "holderId" TEXT NOT NULL,
    "registeredById" TEXT NOT NULL,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Forklift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TenancyAudit" (
    "id" UUID NOT NULL,
    "forkliftId" TEXT NOT NULL,
    "lastOwnerId" TEXT NOT NULL,
    "newOwnerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TenancyAudit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_username_key" ON "Account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_userId_key" ON "Account"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Forklift_vin_key" ON "Forklift"("vin");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Forklift" ADD CONSTRAINT "Forklift_holderId_fkey" FOREIGN KEY ("holderId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Forklift" ADD CONSTRAINT "Forklift_registeredById_fkey" FOREIGN KEY ("registeredById") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenancyAudit" ADD CONSTRAINT "TenancyAudit_forkliftId_fkey" FOREIGN KEY ("forkliftId") REFERENCES "Forklift"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenancyAudit" ADD CONSTRAINT "TenancyAudit_lastOwnerId_fkey" FOREIGN KEY ("lastOwnerId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TenancyAudit" ADD CONSTRAINT "TenancyAudit_newOwnerId_fkey" FOREIGN KEY ("newOwnerId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
