-- CreateTable
CREATE TABLE "organization" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo_url" TEXT,
    "cpnj" TEXT NOT NULL,
    "telefone" TEXT,

    CONSTRAINT "organization_pkey" PRIMARY KEY ("id")
);
