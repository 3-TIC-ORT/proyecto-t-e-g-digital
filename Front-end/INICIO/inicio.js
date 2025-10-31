let newGame = document.getElementById("newGame");
let cargarGame = document.getElementById("cargarGame");
let valorBrillo = 1;

function nuevaPartida() {
  localStorage.setItem("cargarPartidaInicio", "false");
}

function cargarPartida() {
  localStorage.setItem("cargarPartidaInicio", "true");
}

newGame.addEventListener("click", () => nuevaPartida());
cargarGame.addEventListener("click", () => cargarPartida());

document.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("brillo") != "null"){
  valorBrillo = localStorage.getItem("brillo")
  valorBrillo = parseFloat(valorBrillo);
  };
  document.body.style.filter = "brightness(" + valorBrillo + ")";

});

document.addEventListener("DOMContentLoaded", () => {
  fondoAlternativo = localStorage.getItem("fondoAlternativo");
  if (fondoAlternativo === "true") {
    document.body.style.backgroundImage = "none";
    document.body.style.background = "linear-gradient( #524019, #c59a3e)";
  } else if (fondoAlternativo === "false" || fondoAlternativo === null) {
    document.body.style.backgroundImage = "url(../IMAGENES/FONDO.png)";
    document.body.style.backgroundColor= "none";
  };
  console.log(fondoAlternativo);
});