let players = document.getElementById("playersid");
let objetivos = document.getElementById("objetivosid");
let advertencia = document.getElementById("advertencia");
let contenidojug = document.getElementById("contenidojug");
let contenidoobj = document.getElementById("contenidoobj");
let cerrar = document.getElementById("cerrar");
function test3 () {
if (parseInt(players.value) === 0){
contenidojug.textContent = "SELECCIONE CANTIDAD DE JUGADORES";
} else {
contenidojug.textContent = parseInt(players.value) + " jugadores";
};
if(parseInt(objetivos.value)===0){
contenidoobj.textContent = "SELECCIONAR OBJETIVOS SECRETOS";  
};
if(parseInt(objetivos.value)===1){
contenidoobj.textContent = "Sin Objetivos Secretos";
};
if(parseInt(objetivos.value)===2){
contenidoobj.textContent ="Con Objetivos Secretos";
};
advertencia.showModal();
if(parseInt(players.value) != 0 && parseInt(objetivos.value) != 0) {
window.location.href = "../JUEGO/game.html"
};
};
let ready = document.getElementById("gameready");
ready.addEventListener("click", test3);
cerrar.addEventListener("click", ()=> advertencia.close());