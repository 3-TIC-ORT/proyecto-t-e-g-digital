document.addEventListener('DOMContentLoaded', () => {
    let music = document.getElementById('backgroundMusic');
    let botonMusica = document.getElementById('boton_musica');
    let volumeSlider = document.getElementById('volumeSlider');

    let isPlaying = (localStorage.getItem('isMusicPlaying') === 'true');
    let volume = localStorage.getItem('musicVolume');

    if (volume == 0) {
        music.volume = volume;
        volumeSlider.value = volume;
    }

    if (isPlaying) {
        music.play();
        botonMusica.textContent = 'Música: SI';
    } else {
        music.pause();
        botonMusica.textContent = 'Música: NO';
    }

    botonMusica.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            botonMusica.textContent = 'Música: SI';
        } else {
            music.pause();
            botonMusica.textContent = 'Música: NO';
        }
        localStorage.setItem('isMusicPlaying', !music.paused);
    });


    volumeSlider.addEventListener('input', () => {
        music.volume = volumeSlider.value;
        localStorage.setItem('musicVolume', music.volume);
    });
});