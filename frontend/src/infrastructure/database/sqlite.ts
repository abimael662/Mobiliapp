import { SQLiteConnection, CapacitorSQLite } from '@capacitor-community/sqlite';

const sqlite = new SQLiteConnection(CapacitorSQLite);

export async function createDatabase() {
  const db = await sqlite.createConnection(
    'mobiliapp',
    false,
    'no-encryption',
    1,
    false
  );

  await db.open();

  return db;
}