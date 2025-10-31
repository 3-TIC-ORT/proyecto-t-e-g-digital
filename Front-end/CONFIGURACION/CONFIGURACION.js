
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
cambiarFondo.textContent = "Fondo Alternativo Desactictivado";
let fondoAlternativo = false;

if (localStorage.getItem("fondoAlternativo") === null || localStorage.getItem("fondoAlternativo") === "false") {
  cambiarFondo.textContent = "Fondo Alternativo Desactictivado";
  } else if (localStorage.getItem("fondoAlternativo") === "true") {
    cambiarFondo.textContent = "Fondo Alternativo Activado";
  };

cambiarFondo.addEventListener("click", () => {
  fondoAlternativo = localStorage.getItem("fondoAlternativo");
  if (fondoAlternativo === "false") {
    cambiarFondo.textContent = "Fondo Alternativo Activado";
    localStorage.setItem("fondoAlternativo", "true");
  } else if (fondoAlternativo === "true") {
    cambiarFondo.textContent = "Fondo Alternativo Desactictivado";
    localStorage.setItem("fondoAlternativo", "false");
  };
  console.log(localStorage.getItem("fondoAlternativo"));
});