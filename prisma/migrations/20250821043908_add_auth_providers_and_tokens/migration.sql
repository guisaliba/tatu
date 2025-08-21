-- CreateEnum
CREATE TYPE "public"."UserProviderType" AS ENUM ('GOOGLE', 'INSTAGRAM', 'APPLE', 'TWITTER', 'LOCAL');

-- CreateTable
CREATE TABLE "public"."user_providers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "provider" "public"."UserProviderType" NOT NULL,
    "providerId" TEXT NOT NULL,

    CONSTRAINT "user_providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."refresh_tokens" (
    "id" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "revoked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_tokenHash_key" ON "public"."refresh_tokens"("tokenHash");

-- CreateIndex
CREATE INDEX "refresh_tokens_userId_idx" ON "public"."refresh_tokens"("userId");

-- AddForeignKey
ALTER TABLE "public"."user_providers" ADD CONSTRAINT "user_providers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."refresh_tokens" ADD CONSTRAINT "refresh_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
