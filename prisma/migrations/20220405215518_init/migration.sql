-- CreateTable
CREATE TABLE `Guest` (
    `id` VARCHAR(191) NOT NULL,
    `first` VARCHAR(191) NOT NULL,
    `last` VARCHAR(191) NOT NULL,
    `attending` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `meal` VARCHAR(191) NULL,
    `kids` VARCHAR(191) NULL,

    UNIQUE INDEX `Guest_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
