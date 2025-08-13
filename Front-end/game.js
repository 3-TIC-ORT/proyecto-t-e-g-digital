let australia = document.getElementById("australiaid");
let clickaustralia = 0;
let fichasaustralia = 2;
let fichassumatra = 1;
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
if (fichasaustralia <= 1) {
alert("No se puede atacar con " + fichasaustralia + " fichas")
};
if (clickaustralia === 0 && clicksumatra === 1 && fichasaustralia > 1){
clicksumatra = 0;
if(randomizador >= 0.5){
fichasaustralia--;
australia.textContent = "Australia " + fichasaustralia;
}; if (randomizador < 0.5) {
fichassumatra--;
sumatra.textContent = "Sumatra " + fichassumatra;
}
};
};
atacar.addEventListener("click", test8)
