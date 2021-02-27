/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[hashtag]` on the table `HashTag`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "HashTag.hashtag_unique" ON "HashTag"("hashtag");
