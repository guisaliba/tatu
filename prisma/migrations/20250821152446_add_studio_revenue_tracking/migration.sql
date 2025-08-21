/*
  Warnings:

  - The primary key for the `addresses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `customer_charges` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `socials` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `socials` required. This step will fail if there are existing NULL values in that column.
  - Made the column `studioId` on table `socials` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `studio_memberships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studioAmount` to the `studio_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `studio_payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `studios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `user_providers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "public"."UserRole" ADD VALUE 'ADMIN';

-- DropForeignKey
ALTER TABLE "public"."studios" DROP CONSTRAINT "studios_addressId_fkey";

-- DropIndex
DROP INDEX "public"."users_username_key";

-- AlterTable
ALTER TABLE "public"."addresses" DROP CONSTRAINT "addresses_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "addresses_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "addresses_id_seq";

-- AlterTable
ALTER TABLE "public"."customer_charges" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."socials" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "studioId" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."studio_memberships" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."studio_payments" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "studioAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."studios" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "addressId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."user_providers" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "username",
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "role" "public"."UserRole" NOT NULL DEFAULT 'ARTIST';

-- AddForeignKey
ALTER TABLE "public"."studios" ADD CONSTRAINT "studios_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."addresses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
