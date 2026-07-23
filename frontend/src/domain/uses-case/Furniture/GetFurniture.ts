import { FurnitureRepository } from "@/domain/repositories/FurnitureRepository";

export class GetFurniture {
    constructor(
        private repository: FurnitureRepository
    ){}

    execute() {
        return this.repository.getAll();
    }
}