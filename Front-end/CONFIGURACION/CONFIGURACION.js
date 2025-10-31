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