// barra de valor brillo
let valorBrillo = 1;

document.addEventListener("DOMContentLoaded", () => {
  let barraBrillo = document.getElementById("barraBrillo");
  if(localStorage.getItem("brillo") != "null"){
  valorBrillo = localStorage.getItem("brillo");
  };
  barraBrillo.value = valorBrillo;
  document.body.style.filter = "brightness(" + valorBrillo + ")";

  barraBrillo.addEventListener("input", () => {
    let valorBrillo = barraBrillo.value;
    document.body.style.filter = "brightness(" + valorBrillo + ")";
    localStorage.setItem("brillo", valorBrillo);
  });
});

//resetear el brillo
function resetbrillo() {
valorBrillo = 1;
barraBrillo.value = 1;
document.body.style.filter = "brightness(" + valorBrillo + ")";
localStorage.setItem("brillo", valorBrillo);
};

let restablecerBrillo = document.getElementById("restablecerBrillo");
restablecerBrillo.addEventListener("click", resetbrillo);

// cambiar fondo de inicio
let cambiarFondo = document.getElementById("cambiarFondo");
let fondoAlternativo = false;

cambiarFondo.addEventListener("click", () => {
  fondoAlternativo = localStorage.getItem("fondoAlternativo");
  if (fondoAlternativo === "false") {
    localStorage.setItem("fondoAlternativo", "true");
  } else if (fondoAlternativo === "true") {
    localStorage.setItem("fondoAlternativo", "false");
  };
  console.log(localStorage.getItem("fondoAlternativo"));
});