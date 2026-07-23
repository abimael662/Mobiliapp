export const codigoQrTable = `
CREATE TABLE IF NOT EXISTS mobiliario (
    id_codigo_qr INTEGER PRIMARY KEY AUTOINCREMENT,
    informacion TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`;
