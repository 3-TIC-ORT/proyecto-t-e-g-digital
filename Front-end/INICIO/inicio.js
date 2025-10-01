let newGame = document.getElementById("newGame");
let cargarGame = document.getElementById("cargarGame");

function nuevaPartida() {
  localStorage.setItem("cargarPartida", "false");
}

function cargarPartida() {
  localStorage.setItem("cargarPartida", "true");
}

newGame.addEventListener("click", () => nuevaPartida());
cargarGame.addEventListener("click", () => cargarPartida());

document.addEventListener("DOMContentLoaded", () => {
  let valorBrillo = 1;
  valorBrillo = localStorage.getItem("brillo")
  valorBrillo = parseFloat(valorBrillo);
  document.body.style.filter = "brightness(" + valorBrillo + ")";

});
console.log("Brillo " + valorBrillo)