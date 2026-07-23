import { Furniture } from "@/domain/entities/Furniture";
import { FurnitureRepository } from "@/domain/repositories/FurnitureRepository";

export class DeleteFurniture {
    constructor(
        private respository: FurnitureRepository
    ) {}

    execute(id: number) {
        return this.respository.delete(id);
    }
}