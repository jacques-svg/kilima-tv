/*
  Warnings:

  - You are about to drop the column `age_min` on the `MovieOnLanguage` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `MovieOnLanguage` table. All the data in the column will be lost.
  - You are about to drop the column `release_date` on the `MovieOnLanguage` table. All the data in the column will be lost.
  - Added the required column `age_min` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `release_date` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detail_large_image_thumbnail_url` to the `MovieOnLanguage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detail_large_image_url` to the `MovieOnLanguage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `home_preview_image_thumbnail_url` to the `MovieOnLanguage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `home_preview_image_url` to the `MovieOnLanguage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shown_small_image_thumbnail_url` to the `MovieOnLanguage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shown_small_image_url` to the `MovieOnLanguage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Movie` ADD COLUMN `age_min` INTEGER NOT NULL,
    ADD COLUMN `duration` INTEGER NOT NULL,
    ADD COLUMN `release_date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `MovieOnLanguage` DROP COLUMN `age_min`,
    DROP COLUMN `duration`,
    DROP COLUMN `release_date`,
    ADD COLUMN `detail_large_image_thumbnail_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `detail_large_image_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `home_preview_image_thumbnail_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `home_preview_image_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `shown_small_image_thumbnail_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `shown_small_image_url` VARCHAR(191) NOT NULL;
