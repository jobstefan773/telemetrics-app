/*
  Warnings:

  - You are about to drop the `Forklift` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TenancyAudit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Forklift" DROP CONSTRAINT "Forklift_holderId_fkey";

-- DropForeignKey
ALTER TABLE "Forklift" DROP CONSTRAINT "Forklift_registeredById_fkey";

-- DropForeignKey
ALTER TABLE "TenancyAudit" DROP CONSTRAINT "TenancyAudit_forkliftId_fkey";

-- DropForeignKey
ALTER TABLE "TenancyAudit" DROP CONSTRAINT "TenancyAudit_lastOwnerId_fkey";

-- DropForeignKey
ALTER TABLE "TenancyAudit" DROP CONSTRAINT "TenancyAudit_newOwnerId_fkey";

-- DropTable
DROP TABLE "Forklift";

-- DropTable
DROP TABLE "TenancyAudit";

-- DropEnum
DROP TYPE "ForkliftStatus";
