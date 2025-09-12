// MUSICA
document.addEventListener("DOMContentLoaded", function() {
    let musica = document.getElementById("backgroundMusic");
    let botonMusica = document.getElementById("boton_musica");
    let barraVolumen = document.getElementById("barraVolumen");

    let estaSonando = (localStorage.getItem("isMusicPlaying") === "true");
    let volumenGuardado = localStorage.getItem("musicVolume");

    if (volumenGuardado) {
        musica.volume = volumenGuardado;
        barraVolumen.value = volumenGuardado;
    }

    if (estaSonando) {
        musica.play();
        botonMusica.textContent = "Musica: SI";
    } else {
        musica.pause();
        botonMusica.textContent = "Musica: NO";
    }

    // Boton de musica

    botonMusica.addEventListener("click", pausarMusica);
        
        function pausarMusica () {
        if (musica.paused) {
            musica.play();
            botonMusica.textContent = "Musica: SI";
        } else {
            musica.pause();
            botonMusica.textContent = "Musica: NO";
        }
        localStorage.setItem("isMusicPlaying", !musica.paused);
    }

    // VOLUMEN
    barraVolumen.addEventListener("input", cambiarVolumen)
        
        function cambiarVolumen() {
        musica.volume = barraVolumen.value;
        localStorage.setItem("musicVolume", musica.volume);
    };
});

// BRILLO
function cambiarBrillo() {
  let barraBrillo = document.getElementById("barraBrillo");
  let valorBrillo = barraBrillo.value;
  document.body.style.filter = "brightness(" + valorBrillo + ")";
}

// DOMContentLoaded para la barra del brillo
document.addEventListener("DOMContentLoaded", domLoader)
    
  function domLoader () {
  barraBrillo.addEventListener("input", cambiarBrillo);
};

// Esto si lo hice yo muchachos, aunque tuve que buscar como se modificaban cosas como el volumen y el brillo. Igual para ser franco el codigo me fallo varias veces y use 
// ayuda para arreglarlo, pero al final lo logre hacer funcionar. Espero que les sirva y que no haya problemas con el codigo.