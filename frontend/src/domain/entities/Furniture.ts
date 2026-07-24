//../domain/entities/Furniture.ts

export interface Furniture {
  id_mobiliario?: number;
  nombre_mobiliario: string;
  categoria: string;
  ubicacion: string;
  estado: number;
  fecha_compra: string;
  descripcion?: string;
}