// BRILLO
function cambiarBrillo() {
  let barraBrillo = document.getElementById("barraBrillo");
  let valorBrillo = barraBrillo.value;
  document.body.style.filter = "brightness(" + valorBrillo + ")";
}
document.addEventListener("DOMContentLoaded", domLoader)
    
  function domLoader () {
  barraBrillo.addEventListener("input", cambiarBrillo);
};
