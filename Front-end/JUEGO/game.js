let turno = "Azul";
let colores = ["Azul", "Rojo"];
let fase =  "Atacar";
let fases = ["Atacar", "Reagrupar", "Incorporar"];
let currentphase = document.getElementById("currentphase");
let currentturn = document.getElementById("currentturn");
let atacarrojo = document.getElementById("atacarrojo");
let atacarazul = document.getElementById("atacarazul");
let skipazul = document.getElementById("pasaazul");
let skiprojo = document.getElementById("pasarojo");
let i = 0;
currentturn.textContent = "Turno: " + turno;
currentphase.textContent = "Fase: " + fase;
function test12 (colorturno) {
if (colorturno === turno){ 
if (fase === "Atacar"){
fase = "Reagrupar";
currentphase.textContent = "Fase: " + fase;
} else if (fase === "Reagrupar" || fase === "Incorporar"){
while (colores[i] != colorturno){
i++;
};
i++;
if (i === colores.length){
if (fase === "Incorporar"){
fase = "Atacar";
} else if (fase === "Reagrupar"){
fase = "Incorporar";
};
i = 0;
} else if (i < colores.length){
if (fase === "Reagrupar"){
fase = "Atacar"
};
};
turno = colores[i];
currentturn.textContent = "Turno: " + turno;
currentphase.textContent = "Fase: " + fase;
};
};
};
i = 0;
skipazul.addEventListener("click", ()=> test12("Azul"));
skiprojo.addEventListener("click", ()=> test12("Rojo"));
let paises = [];
let australia = {
nombre: "Australia",
id: document.getElementById("australiaid"),
continente: "Oceanía",
fichas: 3,
colorfichas: "Rojo",
limitrofes: [],
};
let sumatra = {
nombre: "Sumatra",
id: document.getElementById("sumatraid"),
continente: "Oceanía",
fichas: 6,
colorfichas: "Azul",
limitrofes: [],
};
let java = {
nombre: "Java",
continente: "Oceanía",
id: document.getElementById("javaid"),
fichas: 1,
colorfichas: "Azul",
limitrofes: [],
};
let borneo = {
nombre: "Borneo",
continente: "Oceanía",
id: document.getElementById("borneoid"),
fichas: 2,
colorfichas: "Rojo",
limitrofes: [],
}
let chile = {
nombre: "Chile",
continente: "América del Sur",
id: document.getElementById("chileid"),
fichas: 1,
colorfichas: "Rojo",
limitrofes: [],
};
let india = {
nombre: "India",
continente: "Asia",
id: document.getElementById("indiaid"),
fichas: 1,
colorfichas: "Rojo",
limitrofes: [],
};
let malasia = {
nombre: "Malasia",
continente: "Asia",
id: document.getElementById("malasiaid"),
fichas: 4,
colorfichas: "Azul",
limitrofes: [],
};
sumatra.limitrofes.push(australia);
sumatra.limitrofes.push(india);
australia.limitrofes.push(sumatra);
australia.limitrofes.push(java);
australia.limitrofes.push(borneo);
australia.limitrofes.push(chile);
java.limitrofes.push(australia);
borneo.limitrofes.push(australia);
borneo.limitrofes.push(malasia);
chile.limitrofes.push(australia);
india.limitrofes.push(sumatra);
malasia.limitrofes.push(borneo);
paises.push(australia, sumatra, java, borneo, chile, india, malasia);
while (paises.length > i){
paises[i].id.textContent = paises[i].nombre + " " + paises[i].fichas + " " + paises[i].colorfichas;
i++;
};
i = 0
let dado = 0;
let paisseleccionado = 0;
let paisatacado = 0;
function test14(pais) {
if (turno === pais.colorfichas && pais.fichas > 1){
paisseleccionado =  pais;
} else if (turno != pais.colorfichas && paisseleccionado.colorfichas != pais.colorfichas){
i = 0;
while (pais.limitrofes.length > i && paisseleccionado != pais.limitrofes[i]){
i++;
};
if (pais.limitrofes[i] === paisseleccionado){
paisatacado = pais;
};
};
};
australia.id.addEventListener("click", ()=> test14(australia));
sumatra.id.addEventListener("click", ()=> test14(sumatra));
java.id.addEventListener("click", ()=> test14(java));
borneo.id.addEventListener("click", ()=> test14(borneo));
chile.id.addEventListener("click", ()=> test14(chile));
india.id.addEventListener("click", ()=> test14(india));
malasia.id.addEventListener("click", ()=> test14(malasia));
let dadosatacante = 0;
let dadosdefensor = 0;
let resultadosatacante = [];
let resultadosdefensor = [];
let dadoreserva = 0;
function test16(color){
if (color === turno && color === paisseleccionado.colorfichas && paisatacado != 0){
dadosatacante = paisseleccionado.fichas - 1;
dadosdefensor = paisatacado.fichas;
if(dadosatacante > 3){
dadosatacante = 3;
};
if(dadosdefensor > 3){
dadosdefensor = 3;
};
while (dadosatacante > 0){
dado = Math.floor(Math.random() * 6) + 1;
console.log(dado + " dado atacante");
resultadosatacante.push(dado);
dadosatacante--;
};
while (dadosdefensor > 0){
dado = Math.floor(Math.random() * 6) + 1;
console.log(dado + " dado defensor");
resultadosdefensor.push(dado);
dadosdefensor--;
};
if (resultadosatacante.length > 1){
while (resultadosatacante[0] < resultadosatacante[1] || resultadosatacante[0] < resultadosatacante[2]){
dado = resultadosatacante.shift();
resultadosatacante.push(dado);
};
if (resultadosatacante.length === 3){
if (resultadosatacante[1] < resultadosatacante[2]){
dado = resultadosatacante.pop();
dadoreserva = resultadosatacante.pop();
resultadosatacante.push(dado);
resultadosatacante.push(dadoreserva);
};
};
};
if (resultadosdefensor.length > 1){
while (resultadosdefensor[0] < resultadosdefensor[1] || resultadosdefensor[0] < resultadosdefensor[2]){
dado = resultadosdefensor.shift();
resultadosdefensor.push(dado);
};
if (resultadosdefensor.length === 3){
if (resultadosdefensor[1] < resultadosdefensor[2]){
dado = resultadosdefensor.pop();
dadoreserva = resultadosdefensor.pop();
resultadosdefensor.push(dado);
resultadosdefensor.push(dadoreserva);
};
};
};
i = 0;
while (resultadosatacante.length > i && resultadosdefensor.length > i){
if (resultadosdefensor[i] >= resultadosatacante[i]){
console.log(resultadosatacante[i] + " atacante vs " + resultadosdefensor[i] + " defensor");
console.log(paisseleccionado.nombre + " pierde una ficha");
paisseleccionado.fichas--;
} else if (resultadosatacante[i] > resultadosdefensor[i]) {
console.log(resultadosatacante[i] + " atacante vs " + resultadosdefensor[i] + " defensor");
console.log(paisatacado.nombre + " pierde una ficha");
paisatacado.fichas--;
};
i++;
};
if (paisatacado.fichas === 0){
paisatacado.fichas++;
paisseleccionado.fichas--;
paisatacado.colorfichas = paisseleccionado.colorfichas;
};
paisseleccionado.id.textContent = paisseleccionado.nombre + " " + paisseleccionado.fichas + " " + paisseleccionado.colorfichas;
paisatacado.id.textContent = paisatacado.nombre + " " + paisatacado.fichas + " " + paisatacado.colorfichas;
paisseleccionado = 0;
paisatacado = 0;
resultadosatacante = [];
resultadosdefensor = [];
};
};
atacarrojo.addEventListener("click", ()=> test16("Rojo"));
atacarazul.addEventListener("click", ()=> test16("Azul"));



// Guardar juego:

let estadoJuego = {
    countries: paises,
    saveturno: turno,
    };
    
guardarButton = document.getElementById("guardar");
    
function guardarJuego() {
    console.log("Guardando...");
    fs.writeFileSync("datos.json", estadoJuego);
};
guardarButton.addEventListener("click", guardarJuego);
