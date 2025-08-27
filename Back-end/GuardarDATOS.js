import fs from "fs";
import { estadoJuego, turno, paises } from "./game.js";



function guardarJuego() {
    estadoJuego.saveturno = turno;
    estadoJuego.countries = paises;

    let jsonData = JSON.stringify(estadoJuego);

    fs.writeFileSync("datos.json", jsonData, "utf-8");
    console.log("Juego guardado en juego_guardado.json");
}

export { guardarJuego };

