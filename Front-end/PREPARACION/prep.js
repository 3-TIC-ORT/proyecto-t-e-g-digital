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
let ninstructor = null;
function test3 () {
if (parseInt(players.value) === 0){
contenidojug.textContent = "SELECCIONE CANTIDAD DE JUGADORES";
} else {
contenidojug.textContent = parseInt(players.value) + " JUGADORES";
njugadores = parseInt(players.value);
localStorage.setItem("njugadores", njugadores);
};
if(parseInt(objectives.value)===0){
contenidoobj.textContent = "SELECCIONAR CONDICIÓN DE VICTORIA";  
};
if(parseInt(objectives.value)===1){
contenidoobj.textContent ="OBJETIVOS SECRETOS";
nobjetivos = "true";
localStorage.setItem("nobjetivos", nobjetivos);
};
if(parseInt(objectives.value)===2){
contenidoobj.textContent = "OBJETIVO COMÚN (30 PAÍSES)";
nobjetivos = "false";
localStorage.setItem("nobjetivos", nobjetivos);
};
if(parseInt(objectives.value)===3){
contenidoobj.textContent ="DOMINACIÓN MUNDIAL (50 PAÍSES)";
nobjetivos = "dominacion";
localStorage.setItem("nobjetivos", nobjetivos);
};
if(parseInt(objectives.value)===2){
contenidoobj.textContent ="OBJETIVOS SECRETOS";
nobjetivos = true;
localStorage.setItem("nobjetivos", nobjetivos);
};
if(parseInt(instructor.value) === 0){
    contenidoins.textContent = "SELECCIONAR USO DE INSTRUCTOR";
}
if(parseInt(instructor.value) === 1){
    contenidoins.textContent = "CON INSTRUCTOR";
    ninstructor = true;
    localStorage.setItem("ninstructor", ninstructor);
}
if(parseInt(instructor.value) === 2){
    contenidoins.textContent = "SIN INSTRUCTOR";
    ninstructor = false;
    localStorage.setItem("ninstructor", ninstructor);
};
advertencia.showModal();
if(parseInt(players.value) != 0 && parseInt(objectives.value) != 0 && parseInt(instructor.value)!= 0) {
window.location.href = "../JUEGO/game.html"
};
};
let ready = document.getElementById("gameready");
ready.addEventListener("click", test3);
cerrar.addEventListener("click", ()=> advertencia.close());