-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Apps" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "redirect_uri" TEXT NOT NULL DEFAULT '',
    "banner_url" TEXT NOT NULL DEFAULT '',
    "icon_url" TEXT NOT NULL DEFAULT '',
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Apps_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Apps" ("description", "id", "name", "redirect_uri", "url", "user_id") SELECT "description", "id", "name", "redirect_uri", "url", "user_id" FROM "Apps";
DROP TABLE "Apps";
ALTER TABLE "new_Apps" RENAME TO "Apps";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
