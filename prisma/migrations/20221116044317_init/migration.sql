-- CreateTable
CREATE TABLE "Owners" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Puppies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isCute" BOOLEAN DEFAULT true,
    "age" INTEGER,
    "ownerId" INTEGER,

    CONSTRAINT "Puppies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tricks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Tricks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Puppies_Tricks" (
    "id" SERIAL NOT NULL,
    "puppy_id" INTEGER,
    "trick_id" INTEGER,

    CONSTRAINT "Puppies_Tricks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Puppies_Tricks_puppy_id_trick_id_key" ON "Puppies_Tricks"("puppy_id", "trick_id");

-- AddForeignKey
ALTER TABLE "Puppies" ADD CONSTRAINT "Puppies_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owners"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Puppies_Tricks" ADD CONSTRAINT "Puppies_Tricks_puppy_id_fkey" FOREIGN KEY ("puppy_id") REFERENCES "Puppies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Puppies_Tricks" ADD CONSTRAINT "Puppies_Tricks_trick_id_fkey" FOREIGN KEY ("trick_id") REFERENCES "Tricks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
