export const mobiliarioTable = `
CREATE TABLE IF NOT EXISTS mobiliario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    categoria TEXT NOT NULL,
    ubicacion TEXT NOT NULL,
    estado TEXT NOT NULL,
    fecha_compra TEXT,
    descripcion TEXT,
    foto TEXT,
    codigo_qr TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`;