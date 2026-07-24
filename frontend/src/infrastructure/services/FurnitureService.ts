import { CreateFurniture } from "@/domain/uses-case/Furniture/CreateFurniture";
import { GetFurniture } from "@/domain/uses-case/Furniture/GetFurniture";
import { UpdateFurniture } from "@/domain/uses-case/Furniture/UpdateFurniture";
import { DeleteFurniture } from "@/domain/uses-case/Furniture/DeleteFurniture";
import { FurnitureRepository } from "@/domain/repositories/FurnitureRepository";
import { Furniture } from "@/domain/entities/Furniture";

export class FurnitureService {
  private createFurniture: CreateFurniture;
  private getFurniture: GetFurniture;
  private updateFurniture: UpdateFurniture;
  private deleteFurniture: DeleteFurniture;

  constructor(private repository: FurnitureRepository) {
    this.createFurniture = new CreateFurniture(repository);

    this.getFurniture = new GetFurniture(repository);

    this.updateFurniture = new UpdateFurniture(repository);

    this.deleteFurniture = new DeleteFurniture(repository);
  }

  async create(furniture: Furniture) {
    return this.createFurniture.execute(furniture);
  }

  async getAll() {
    return this.getFurniture.execute();
  }

  async getById(id: number) {
    return this.repository.getById(id);
  }


  async update(furniture: Furniture) {
    return this.updateFurniture.execute(furniture);
  }

  async delete(id: number) {
    return this.deleteFurniture.execute(id);
  }
}
