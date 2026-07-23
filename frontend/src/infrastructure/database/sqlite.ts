import { 
  SQLiteConnection, 
  CapacitorSQLite,
  SQLiteDBConnection
} from '@capacitor-community/sqlite';

import { furnitureTable } from "@/infrastructure/database/tables/furniture_table";

const sqlite = new SQLiteConnection(CapacitorSQLite);

let db: SQLiteDBConnection | null = null;


export async function createDatabase() {

  if (db) {
    return db;
  }


  const isConnection = await sqlite.isConnection("mobiliapp", false);

  if (isConnection.result) {
    db = await sqlite.retrieveConnection("mobiliapp", false);
  } else {

    db = await sqlite.createConnection(
      "mobiliapp",
      false,
      "no-encryption",
      1,
      false
    );

  }


  await db.open();


  await db.execute(furnitureTable);
  console.log("Tabla mobiliario creada/verificada");

  return db;
}