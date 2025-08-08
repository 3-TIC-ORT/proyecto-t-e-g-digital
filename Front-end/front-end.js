let players = document.getElementById("playersid");
function test3 () {
alert(parseInt(players.value));
};
let objetivos = document.getElementById("objetivosid");
function test4 () {
if(parseInt(objetivos.value)===0){
msg="ERROR";
alert(msg);
};
if(parseInt(objetivos.value)===1){
msg="Sin";
alert(msg);
};
if(parseInt(objetivos.value)===2){
msg="Con";
alert(msg);
};
}
let ready = document.getElementById("gameready");
ready.addEventListener("click", test4)
