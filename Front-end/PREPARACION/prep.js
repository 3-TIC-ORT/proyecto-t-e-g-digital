let players = document.getElementById("playersid");
let objectives = document.getElementById("objetivosid");
let instructor = document.getElementById("instructorid")
let advertencia = document.getElementById("advertencia");
let contenidojug = document.getElementById("contenidojug");
let contenidoobj = document.getElementById("contenidoobj");
let cerrar = document.getElementById("cerrar");
let contenidoins = document.getElementById("contenidoins");
let njugadores = null;
let nobjetivos = null;
function test3 () {
if (parseInt(players.value) === 0){
contenidojug.textContent = "SELECCIONE CANTIDAD DE JUGADORES";
} else {
contenidojug.textContent = parseInt(players.value) + " JUGADORES";
njugadores = parseInt(players.value);
localStorage.setItem("njugadores", njugadores);
};
if(parseInt(objectives.value)===0){
contenidoobj.textContent = "SELECCIONAR OBJETIVOS SECRETOS";  
};
if(parseInt(objectives.value)===1){
contenidoobj.textContent = "SIN OBJETIVOS SECRETOS";
nobjetivos = false;
localStorage.setItem("nobjetivos", nobjetivos);
};
if(parseInt(objectives.value)===2){
contenidoobj.textContent ="CON OBJETIVOS SECRETOS";
nobjetivos = true;
localStorage.setItem("nobjetivos", nobjetivos);
};
if(parseInt(instructor.value) === 0){
    contenidoins.textContent = "SELECCIONAR USO DE INSTRUCTOR";
}
if(parseInt(instructor.value) === 1){
    contenidoins.textContent = "CON INSTRUCTOR";
}
if(parseInt(instructor.value) === 2){
    contenidoins.textContent = "SIN INSTRUCTOR";
};
advertencia.showModal();
if(parseInt(players.value) != 0 && parseInt(objectives.value) != 0 && parseInt(instructor.value)!= 0) {
window.location.href = "../JUEGO/game.html"
};
};
let ready = document.getElementById("gameready");
ready.addEventListener("click", test3);
cerrar.addEventListener("click", ()=> advertencia.close());