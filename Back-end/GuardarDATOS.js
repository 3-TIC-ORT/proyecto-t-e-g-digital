import fs from "fs";
import {estadoJuego } from "./game.js";

function guardarJuego() {
    let jsonData = JSON.stringify(estadoJuego, null, 2);
    fs.writeFileSync("datos.json", jsonData, "utf-8");
   
    };
