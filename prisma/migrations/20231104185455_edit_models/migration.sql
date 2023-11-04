/*
  Warnings:

  - You are about to drop the column `cpnj` on the `organization` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `organization` table. All the data in the column will be lost.
  - Added the required column `cnpj` to the `organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "organization" DROP COLUMN "cpnj",
DROP COLUMN "telefone",
ADD COLUMN     "cnpj" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT;
