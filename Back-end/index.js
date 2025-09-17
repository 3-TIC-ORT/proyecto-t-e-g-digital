import fs from "fs";
import { subscribePOSTEvent, startServer } from "soquetic";

function guardarEstado(estado) {
    let data = JSON.parse(fs.readFileSync("./datos/datos.json", "utf-8"));
    data.push(estado);
    fs.writeFileSync("./datos/datos.json", JSON.stringify(data, null, 2));
}

subscribePOSTEvent("guardarEstado", (estado) => guardarEstado(estado));

startServer(3000, true);