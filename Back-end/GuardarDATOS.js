import fs from "fs";

export function guardarPartida(estadoJuego, nombreArchivo) {
    try {
        // 1. Convertir el objeto del estado del juego a una cadena de texto JSON.
        const estadoJuegoJSON = JSON.stringify(estadoJuego, null, 2);

        // 2. Usar fs.writeFileSync para escribir la cadena JSON en un archivo.
        fs.writeFileSync(nombreArchivo, estadoJuegoJSON, "utf-8");
        console.log(`Partida guardada exitosamente en ${nombreArchivo}`);
    } catch (error) {
        console.error("Error al guardar la partida:", error);
    }
}