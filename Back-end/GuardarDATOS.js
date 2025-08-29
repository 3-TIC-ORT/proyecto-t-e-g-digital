import fs from "fs";
import { paises, turno } from "./game.js";

function guardarJuego() {
    let estadoJuego = {
        countries: paises.map(p => ({
            nombre: p.nombre,
            continente: p.continente,
            fichas: p.fichas,
            colorfichas: p.colorfichas
        })),
        saveturno: turno
    };

    let jsonData = JSON.stringify(estadoJuego, null, 2);
    fs.writeFileSync("datos.json", jsonData, "utf-8");
    console.log("Juego guardado en datos.json");
    }