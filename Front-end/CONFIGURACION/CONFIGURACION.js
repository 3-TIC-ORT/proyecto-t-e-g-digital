document.addEventListener("DOMContentLoaded", () => {
  let barraBrillo = document.getElementById("barraBrillo");

  let valorBrillo = localStorage.getItem("brillo") || 1;
  barraBrillo.value = valorBrillo;
  document.body.style.filter = "brightness(" + valorBrillo + ")";

  barraBrillo.addEventListener("input", () => {
    let valorBrillo = barraBrillo.value;
    document.body.style.filter = "brightness(" + valorBrillo + ")";
    localStorage.setItem("brillo", valorBrillo);
  });
});
