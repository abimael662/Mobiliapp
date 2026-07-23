//../domain/entities/Furniture.ts

export interface Furniture {
  id_mobiliario?: number;
  nombre_mobiliario: string;
  categoria: string;
  ubicacion: string;
  estado: string;
  fechaCompra: Date;
  descripcion?: string;
  codigoQr?: string;
}