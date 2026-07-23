import { Furniture } from "@/domain/entities/Furniture";
import { FurnitureRepository } from "@/domain/repositories/FurnitureRepository";

export class UpdateFurniture {
    constructor(
        private repository: FurnitureRepository
    ) {}

    execute(furniture: Furniture) {
        return this.repository.update(furniture);
    }
}