document.addEventListener("DOMContentLoaded", () => {
  let valorBrillo = 1;
  valorBrillo = localStorage.getItem("brillo")
  valorBrillo = parseFloat(valorBrillo);
  document.body.style.filter = "brightness(" + valorBrillo + ")";

});
console.log("Brillo " + valorBrillo)