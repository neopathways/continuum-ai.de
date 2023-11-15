-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AppConnections" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "app_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AppConnections_app_id_fkey" FOREIGN KEY ("app_id") REFERENCES "Apps" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AppConnections_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AppConnections" ("app_id", "id", "user_id") SELECT "app_id", "id", "user_id" FROM "AppConnections";
DROP TABLE "AppConnections";
ALTER TABLE "new_AppConnections" RENAME TO "AppConnections";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
