-- CreateTable
CREATE TABLE "Apps" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Apps_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AppConnections" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "app_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "AppConnections_app_id_fkey" FOREIGN KEY ("app_id") REFERENCES "Apps" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AppConnections_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
