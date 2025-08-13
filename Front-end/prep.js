let players = document.getElementById("playersid");
function test3 () {
alert(parseInt(players.value) + " jugadores");
};
let objetivos = document.getElementById("objetivosid");
function test4 () {
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
};
let ready = document.getElementById("gameready");
ready.addEventListener("click", test3);
ready.addEventListener("click", test4);