import fs from "fs";
import { subscribePOSTEvent, startServer } from "soquetic";

function guardarEstado(estado) {
    let data = JSON.parse(fs.readFileSync("./datos/datos.json", "utf-8"));
    data.push(estado);
    JSON.stringify(fs.writeFileSync("./datos/datos.json", estado));
}
let estado = subscribePOSTEvent("guardarEstado", ()=> guardarEstado(estado));

startServer(3000, true);