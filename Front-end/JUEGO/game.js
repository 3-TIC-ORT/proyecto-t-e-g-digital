let australiabutton = document.getElementById("australiaid");
let atackaustralia = 0;
let fichasaustralia = {
cantidad: 2,
color: "Rojo",
};
let fichassumatra = {
cantidad: 5,
color: "Azul",}
let randomizador = 0;
let turno = "Azul";
let currentturn = document.getElementById("currentturn");
function test6 () {
atackaustralia = 1;
};
australiabutton.addEventListener("click", test6);
let sumatrabutton = document.getElementById("sumatraid");
let targetsumatra = 0;
sumatrabutton.textContent = "Sumatra " + fichassumatra["cantidad"] + " " + fichassumatra["color"];
australiabutton.textContent = "Australia " + fichasaustralia["cantidad"] + " " + fichasaustralia["color"];
currentturn.textContent = "Turno: " + turno;
function test7 () {
if (atackaustralia === 1){
atackaustralia = 0;
targetsumatra = 1;
};
};
sumatrabutton.addEventListener("click", test7);
let atacarrojo = document.getElementById("atacarrojo");
function test8 () {
randomizador = Math.random();
if (turno != "Rojo"){
alert("No es tu turno");
};
if (turno === "Rojo"){
if (fichasaustralia["cantidad"] <= 1) {
alert("No se puede atacar con " + fichasaustralia["cantidad"] + " fichas")
};
if (fichasaustralia["color"] === fichassumatra["color"]){
alert("No podés atacar tu propio país");
};
if (atackaustralia === 0 && targetsumatra === 1 && fichasaustralia["cantidad"] > 1 && fichasaustralia["color"] != fichassumatra["color"]){
targetsumatra = 0;
if(randomizador >= 0.5){
fichasaustralia["cantidad"]--;
}; if (randomizador < 0.5) {
fichassumatra["cantidad"]--;
if (fichassumatra["cantidad"] < 1) {
fichassumatra["color"] = "Rojo";
fichassumatra["cantidad"]++;
fichasaustralia["cantidad"]--;
};
};
};
};
australiabutton.textContent = "Australia " + fichasaustralia["cantidad"] + " " + fichasaustralia["color"];
sumatrabutton.textContent = "Sumatra " + fichassumatra["cantidad"] + " " + fichassumatra["color"];
};
atacarrojo.addEventListener("click", test8);
let atacksumatra = 0;
let targetaustralia = 0;
function test9 () {
atacksumatra = 1;
};
sumatrabutton.addEventListener("click", test9)
function test10 () {
if (atacksumatra === 1){
atacksumatra = 0;
targetaustralia = 1;
};
};
australiabutton.addEventListener("click", test10);
let atacarazul = document.getElementById("atacarazul");
function test11 () {
randomizador = Math.random();
if (turno != "Azul"){
alert("No es tu turno");
};
if (turno === "Azul"){
if (fichassumatra["cantidad"] <= 1) {
alert("No se puede atacar con " + fichassumatra["cantidad"] + " fichas")
};
if (fichasaustralia["color"] === fichassumatra["color"]){
alert("No podés atacar tu propio país");
};
if (atacksumatra === 0 && targetaustralia === 1 && fichassumatra["cantidad"] > 1 && fichasaustralia["color"] != fichassumatra["color"]){
targetaustralia = 0;
if(randomizador < 0.5){
fichasaustralia["cantidad"]--;
if (fichasaustralia["cantidad"] < 1) {
    fichasaustralia["color"] = "Azul";
    fichasaustralia["cantidad"]++;
    fichassumatra["cantidad"]--;
    };
}; if (randomizador >= 0.5) {
fichassumatra["cantidad"]--;
};
};
};
sumatrabutton.textContent = "Sumatra " + fichassumatra["cantidad"] + " " + fichassumatra["color"];
australiabutton.textContent = "Australia " + fichasaustralia["cantidad"] + " " + fichasaustralia["color"];
};
atacarazul.addEventListener("click", test11);
let skipazul = document.getElementById("pasaazul");
function test12 () {
if (turno === "Azul"){
turno = "Rojo"
};
currentturn.textContent = "Turno: " + turno;
};
skipazul.addEventListener("click", test12);
let skiprojo = document.getElementById("pasarojo");
function test13 () {
if (turno === "Rojo"){
turno = "Azul"
};
currentturn.textContent = "Turno: " + turno;
};
skiprojo.addEventListener("click", test13);

let paises = [];
let australia = {
nombre: "Australia",
id: document.getElementById("australiaid"),
continente: "Oceanía",
fichas: 2,
colorfichas: "Rojo",
limitrofes: [],
selected: 0,
};
let sumatra = {
nombre: "Sumatra",
id: document.getElementById("sumatraid"),
continente: "Oceanía",
fichas: 5,
colorfichas: "Azul",
limitrofes: [],
selected: 0,
};
let java = {
nombre: "Java",
continente: "Oceanía",
id: document.getElementById("javaid"),
fichas: 1,
colorfichas: "Azul",
limitrofes: [],
selected: 0,
};
sumatra.limitrofes.push(australia);
australia.limitrofes.push(sumatra);
australia.limitrofes.push(java);
java.limitrofes.push(australia);
paises.push(australia, sumatra, java);
let i = 0;
let conquistas = 0;
function victoria () {
i = 0;
while (paises.length > i+1){
if (paises[i].colorfichas === paises[i+1].colorfichas){
conquistas++;
};
i++;
};
if (conquistas + 1 === paises.length){
alert("Ganó el " + paises[1].colorfichas)
} else {
conquistas = 0
};
};
let winner = document.getElementById("winner");
winner.addEventListener("click", victoria);
let dado = Math.floor(Math.random() * 6) + 1;
let paisseleccionado = 0;
let paisatacado = 0;
function test14(pais) {
if (turno === pais.colorfichas && pais.fichas > 1){
paisseleccionado =  pais;
} else if (turno != pais.colorfichas){
i = 0;
while (pais.limitrofes.length > i && paisseleccionado != pais.limitrofes[i]){
i++;
};
if (pais.limitrofes[i] === paisseleccionado){
paisatacado = pais;
alert(paisseleccionado.nombre + " ataca a " + paisatacado.nombre);
};
};
};
australia.id.addEventListener("click", ()=> test14(australia));
sumatra.id.addEventListener("click", ()=> test14(sumatra));
java.id.addEventListener("click", ()=> test14(java));