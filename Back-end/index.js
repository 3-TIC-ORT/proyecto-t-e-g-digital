import fs from "fs";
import { subscribePOSTEvent, startServer } from "soquetic";

function guardarEstado(estado) {
   fs.writeFileSync("./datos/datos.json", JSON.stringify(estado, null, 2));
}

subscribePOSTEvent("guardarEstado", (estado) => guardarEstado(estado));

startServer(3015, true);