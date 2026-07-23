import { FurnitureService } from "@/infrastructure/services/FurnitureService";
import { SQLiteFurnitureRepository } from "@/infrastructure/repositories/SQLiteFurnitureRepository";

const furnitureRepository = new SQLiteFurnitureRepository();

export const furnitureService = new FurnitureService(furnitureRepository);