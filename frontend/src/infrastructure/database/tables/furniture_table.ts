// ../infrastructure/databes/tables/furniture_table.ts

export const furnitureTable = `
CREATE TABLE IF NOT EXISTS mobiliario (
    id_mobiliario INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_mobiliario TEXT NOT NULL,
    categoria TEXT NOT NULL,
    ubicacion TEXT NOT NULL,
    estado INTEGER NOT NULL DEFAULT 1,
    fecha_compra TEXT,
    descripcion TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`;

// codigo_qr INTEGER,
//     FOREIGN KEY (codigo_qr) REFERENCES codigo_qr(id_codigo_qr),