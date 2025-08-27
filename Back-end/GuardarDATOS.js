import fs from "fs";

let turno = "Azul";
let paises = [
  { nombre: "Australia", fichas: 3, colorfichas: "Rojo" },
  { nombre: "Sumatra", fichas: 6, colorfichas: "Azul" }
];

let estadoJuego = {
    countries: paises,
    saveturno: turno,
};

fs.writeFileSync("datos.json", JSON.stringify(estadoJuego, null, 2));

let contenido = fs.readFileSync("datos.json", "utf-8");

console.log("Contenido del archivo datos.json:");
console.log(contenido);
