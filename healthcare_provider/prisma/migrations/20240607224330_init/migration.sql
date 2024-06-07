-- CreateEnum
CREATE TYPE "Measurement_type" AS ENUM ('weight', 'blood_pressure_systolic', 'blood_pressure_diastolic');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'Discontinued', 'OnHold');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medical_history" (
    "history_id" TEXT NOT NULL,
    "history_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Medical_history_pkey" PRIMARY KEY ("history_id")
);

-- CreateTable
CREATE TABLE "Disease" (
    "disease_id" TEXT NOT NULL,
    "disease_name" TEXT NOT NULL,
    "history_id" TEXT NOT NULL,

    CONSTRAINT "Disease_pkey" PRIMARY KEY ("disease_id")
);

-- CreateTable
CREATE TABLE "Measurements" (
    "measurement_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "measurement_type" "Measurement_type" NOT NULL,
    "measurement_value" INTEGER NOT NULL,
    "measurement_unit" TEXT NOT NULL,
    "measured_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Measurements_pkey" PRIMARY KEY ("measurement_id")
);

-- CreateTable
CREATE TABLE "Medications" (
    "medication_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "medication_name" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "dosage" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "prescribing_physician" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Medications_pkey" PRIMARY KEY ("medication_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Disease" ADD CONSTRAINT "Disease_history_id_fkey" FOREIGN KEY ("history_id") REFERENCES "Medical_history"("history_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measurements" ADD CONSTRAINT "Measurements_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medications" ADD CONSTRAINT "Medications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
