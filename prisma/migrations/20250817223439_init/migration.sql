-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('ARTIST', 'OWNER');

-- CreateEnum
CREATE TYPE "public"."ChargeStatus" AS ENUM ('PENDING', 'PAID', 'PARTIALLY_PAID');

-- CreateEnum
CREATE TYPE "public"."StudioPaymentStatus" AS ENUM ('PENDING', 'PAID', 'OVERDUE');

-- CreateEnum
CREATE TYPE "public"."PaymentModel" AS ENUM ('PERCENTAGE', 'FIXED_FEE', 'HOURLY');

-- CreateEnum
CREATE TYPE "public"."MessageSender" AS ENUM ('USER', 'ASSISTANT');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."studios" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "description" TEXT,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "studios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."addresses" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."appointments" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "studioId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."studio_memberships" (
    "role" "public"."UserRole" NOT NULL DEFAULT 'ARTIST',
    "paymentModel" "public"."PaymentModel" NOT NULL,
    "paymentValue" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "studioId" TEXT NOT NULL,

    CONSTRAINT "studio_memberships_pkey" PRIMARY KEY ("userId","studioId")
);

-- CreateTable
CREATE TABLE "public"."customer_charges" (
    "id" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "paymentMethod" TEXT,
    "status" "public"."ChargeStatus" NOT NULL DEFAULT 'PENDING',
    "paidAt" TIMESTAMP(3),
    "appointmentId" TEXT NOT NULL,

    CONSTRAINT "customer_charges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."studio_payments" (
    "id" TEXT NOT NULL,
    "amountDue" DOUBLE PRECISION NOT NULL,
    "status" "public"."StudioPaymentStatus" NOT NULL DEFAULT 'PENDING',
    "dueDate" TIMESTAMP(3) NOT NULL,
    "paidAt" TIMESTAMP(3),
    "appointmentId" TEXT NOT NULL,
    "studioId" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "studio_payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."socials" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "url" TEXT,
    "userId" TEXT,
    "studioId" TEXT,

    CONSTRAINT "socials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."chat_sessions" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "studioId" TEXT NOT NULL,

    CONSTRAINT "chat_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."chat_messages" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "sender" "public"."MessageSender" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,

    CONSTRAINT "chat_messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "studios_email_key" ON "public"."studios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "studios_addressId_key" ON "public"."studios"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "customer_charges_appointmentId_key" ON "public"."customer_charges"("appointmentId");

-- CreateIndex
CREATE UNIQUE INDEX "studio_payments_appointmentId_key" ON "public"."studio_payments"("appointmentId");

-- CreateIndex
CREATE UNIQUE INDEX "socials_service_username_key" ON "public"."socials"("service", "username");

-- AddForeignKey
ALTER TABLE "public"."studios" ADD CONSTRAINT "studios_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."addresses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointments" ADD CONSTRAINT "appointments_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "public"."studios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointments" ADD CONSTRAINT "appointments_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."studio_memberships" ADD CONSTRAINT "studio_memberships_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."studio_memberships" ADD CONSTRAINT "studio_memberships_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "public"."studios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."customer_charges" ADD CONSTRAINT "customer_charges_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "public"."appointments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."studio_payments" ADD CONSTRAINT "studio_payments_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "public"."appointments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."studio_payments" ADD CONSTRAINT "studio_payments_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "public"."studios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."studio_payments" ADD CONSTRAINT "studio_payments_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."socials" ADD CONSTRAINT "socials_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."socials" ADD CONSTRAINT "socials_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "public"."studios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chat_sessions" ADD CONSTRAINT "chat_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chat_sessions" ADD CONSTRAINT "chat_sessions_studioId_fkey" FOREIGN KEY ("studioId") REFERENCES "public"."studios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."chat_messages" ADD CONSTRAINT "chat_messages_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."chat_sessions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
