import { Furniture } from "@/domain/entities/Furniture";
import { FurnitureRepository } from "@/domain/repositories/FurnitureRepository";

export class CreateFurniture {
    constructor(
        private repository : FurnitureRepository
    ){}

    execute(furniture: Furniture){
        return this.repository.create(furniture);
    }
}