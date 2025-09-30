function cambiarBrillo() {
  let barraBrillo = document.getElementById("barraBrillo");
  let valorBrillo = barraBrillo.value;
  document.body.style.filter = "brightness(" + valorBrillo + ")";
}
document.addEventListener("DOMContentLoaded", cargarDOM)
    
  function cargarDOM () {
  barraBrillo.addEventListener("input", cambiarBrillo);
};
