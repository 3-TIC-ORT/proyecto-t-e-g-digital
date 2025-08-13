let australia = document.getElementById("australiaid");
let clickaustralia = 0;
let fichasaustralia = {
cantidad: 4,
color: "Rojo",
};
let fichassumatra = {
cantidad: 2,
color: "Azul",}
let randomizador = 0;
function test6 () {
clickaustralia = 1;
};
australia.addEventListener("click", test6);
let sumatra = document.getElementById("sumatraid");
let clicksumatra = 0;
function test7 () {
if (clickaustralia === 1){
clickaustralia = 0;
clicksumatra = 1;
};
};
sumatra.addEventListener("click", test7);
let atacar = document.getElementById("atacarid");
function test8 () {
randomizador = Math.random();
if (fichasaustralia["cantidad"] <= 1) {
alert("No se puede atacar con " + fichasaustralia["cantidad"] + " fichas")
};
if (fichasaustralia["color"] === fichassumatra["color"]){
alert("No podés atacar tu propio país");
};
if (clickaustralia === 0 && clicksumatra === 1 && fichasaustralia["cantidad"] > 1 && fichasaustralia["color"] != fichassumatra["color"]){
clicksumatra = 0;
if(randomizador >= 0.5){
fichasaustralia["cantidad"]--;
australia.textContent = "Australia " + fichasaustralia["cantidad"] + " " + fichasaustralia["color"];
}; if (randomizador < 0.5) {
fichassumatra["cantidad"]--;
if (fichassumatra["cantidad"] < 1) {
fichassumatra["color"] = "Rojo";
fichassumatra["cantidad"]++;
fichasaustralia["cantidad"]--;
australia.textContent = "Australia " + fichasaustralia["cantidad"] + " " + fichasaustralia["color"];
};
sumatra.textContent = "Sumatra " + fichassumatra["cantidad"] + " " + fichassumatra["color"];
};
};
};
atacar.addEventListener("click", test8)
