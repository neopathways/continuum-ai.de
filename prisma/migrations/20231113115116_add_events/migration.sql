-- CreateTable
CREATE TABLE "ConnectionEvents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "connection_id" INTEGER NOT NULL,
    "event_type" TEXT NOT NULL,
    "event_data" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ConnectionEvents_connection_id_fkey" FOREIGN KEY ("connection_id") REFERENCES "AppConnections" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
