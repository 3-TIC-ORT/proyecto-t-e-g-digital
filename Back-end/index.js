import fs from "fs";
import { subscribePOSTEvent, startServer, subscribeGETEvent } from "soquetic";

//guardar juego
function guardarEstado(estado) {
   fs.writeFileSync("./datos/datos.json", JSON.stringify(estado, null, 2));
}

subscribePOSTEvent("guardarEstado", (estado) => guardarEstado(estado));

//cargar juego
function leerEstado() {
  let estadoJuego = fs.readFileSync("./datos/datos.json", "utf-8");
  return JSON.parse(estadoJuego);
}

subscribeGETEvent("cargarEstado", leerEstado);

startServer(3099, true);
