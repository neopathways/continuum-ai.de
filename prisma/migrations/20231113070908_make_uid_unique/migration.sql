/*
  Warnings:

  - A unique constraint covering the columns `[uid]` on the table `Apps` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Apps_uid_key" ON "Apps"("uid");
