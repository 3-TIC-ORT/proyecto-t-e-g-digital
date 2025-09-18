import fs from "fs";
import { subscribePOSTEvent, startServer, subscribeGETEvent } from "soquetic";

//guardar juego
function guardarEstado(estado) {
   fs.writeFileSync("./datos/datos.json", JSON.stringify(estado, null, 2));
}

subscribePOSTEvent("guardarEstado", (estado) => guardarEstado(estado));

//cargar juego
function leerEstado() {
   estadoJuego = fs.readFileSync("./datos/datos.json", JSON.parse("utf-8"))
   return estadoJuego
}

subscribeGETEvent("cargarEstado", leerEstado);

startServer(3015, true);