let australia = document.getElementById("australiaid");
let atackaustralia = 0;
let fichasaustralia = {
cantidad: 2,
color: "Rojo",
};
let fichassumatra = {
cantidad: 5,
color: "Azul",}
let randomizador = 0;
function test6 () {
atackaustralia = 1;
};
australia.addEventListener("click", test6);
let sumatra = document.getElementById("sumatraid");
let targetsumatra = 0;
sumatra.textContent = "Sumatra " + fichassumatra["cantidad"] + " " + fichassumatra["color"];
australia.textContent = "Australia " + fichasaustralia["cantidad"] + " " + fichasaustralia["color"];
function test7 () {
if (atackaustralia === 1){
atackaustralia = 0;
targetsumatra = 1;
};
};
sumatra.addEventListener("click", test7);
let atacarrojo = document.getElementById("atacarrojo");
function test8 () {
randomizador = Math.random();
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
australia.textContent = "Australia " + fichasaustralia["cantidad"] + " " + fichasaustralia["color"];
sumatra.textContent = "Sumatra " + fichassumatra["cantidad"] + " " + fichassumatra["color"];
};
atacarrojo.addEventListener("click", test8);

let atacksumatra = 0;
let targetaustralia = 0;
function test9 () {
atacksumatra = 1;
};
sumatra.addEventListener("click", test9)
function test10 () {
if (atacksumatra === 1){
atacksumatra = 0;
targetaustralia = 1;
};
};
australia.addEventListener("click", test10);
let atacarazul = document.getElementById("atacarazul");
function test11 () {
randomizador = Math.random();
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
sumatra.textContent = "Sumatra " + fichassumatra["cantidad"] + " " + fichassumatra["color"];
australia.textContent = "Australia " + fichasaustralia["cantidad"] + " " + fichasaustralia["color"];
};
atacarazul.addEventListener("click", test11);

