import { readFileSync, writeFileSync} from "fs"
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

subscribePOSTEvent("guardarJuego", (data) => {
  fs.writeFileSync("./datos.json", JSON.stringify(data, null, 2));
  return { msg: "Partida guardada" };
});
