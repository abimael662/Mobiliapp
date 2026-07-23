import { Furniture } from "../entities/Furniture";

export interface FurnitureRepository {
  getAll(): Promise<Furniture[]>;

  getById(id_mobiliario: number): Promise<Furniture | null>;

  create(furniture: Furniture): Promise<void>;

  update(furniture: Furniture): Promise<void>;

  delete(id_mobiliario: number): Promise<void>;
}