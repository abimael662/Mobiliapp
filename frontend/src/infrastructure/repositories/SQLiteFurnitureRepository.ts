// ../infrastructure/repositories/SQLiteFurnitureRepository.ts

import { Furniture } from "@/domain/entities/Furniture";
import { FurnitureRepository } from "@/domain/repositories/FurnitureRepository";
import { createDatabase } from "../database/sqlite";

export class SQLiteFurnitureRepository implements FurnitureRepository {
  
  async getAll(): Promise<Furniture[]> {
    const db = await createDatabase();

    const result = await db.query("SELECT * FROM mobiliario");

    return result.values as Furniture[];
  }

  async getById(id: number): Promise<Furniture | null> {
    const db = await createDatabase();

    const result = await db.query(
      "SELECT * FROM mobiliario WHERE id_mobiliario = ?",
      [id],
    );

    if (!result.values?.length) {
      return null;
    }

    return result.values[0] as Furniture;
  }

  async create(furniture: Furniture): Promise<void> {
    const db = await createDatabase();

    await db.run(
      `INSERT INTO mobiliario
      (nombre_mobiliario,categoria,ubicacion,estado,fecha_compra,descripcion)
      VALUES(?,?,?,?,?,?)`,
      [
        furniture.nombre_mobiliario,
        furniture.categoria,
        furniture.ubicacion,
        furniture.estado,
        furniture.fechaCompra,
        furniture.descripcion,
      ],
    );
  }

  async update(furniture: Furniture): Promise<void> {
    const db = await createDatabase();

    await db.run(
      `UPDATE mobiliario SET
      nombre_mobiliario=?,
      categoria=?,
      ubicacion=?,
      estado=?,
      fecha_compra=?,
      descripcion=?,
      codigo_qr=?
      WHERE id_mobiliario=?`,
      [
        furniture.nombre_mobiliario,
        furniture.categoria,
        furniture.ubicacion,
        furniture.estado,
        furniture.fechaCompra,
        furniture.descripcion,
        furniture.codigoQr,
        furniture.id_mobiliario,
      ],
    );
  }

  async delete(id_mobiliario: number): Promise<void> {
    const db = await createDatabase();

    await db.run("DELETE FROM mobiliario WHERE id_mobiliario=?", [id_mobiliario]);
  }
}
