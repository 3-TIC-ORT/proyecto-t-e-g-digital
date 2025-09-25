let players = document.getElementById("playersid");
function test3 () {
if (parseInt(players.value) === 0){
alert("SELECCIONE CANTIDAD DE JUGADORES")
} else {
alert(parseInt(players.value) + " jugadores");
};
if(parseInt(objetivos.value)===0){
msg="SELECCIONAR OBJETIVOS SECRETOS";
alert(msg);     
};
if(parseInt(objetivos.value)===1){
msg="Sin Objetivos Secretos";
alert(msg);
};
if(parseInt(objetivos.value)===2){
msg="Con Objetivos Secretos";
alert(msg);
};
if(parseInt(players.value) != 0 && parseInt(objetivos.value) != 0) {
window.location.href = "../JUEGO/game.html"
};
};
let objetivos = document.getElementById("objetivosid");
let ready = document.getElementById("gameready");
ready.addEventListener("click", test3);