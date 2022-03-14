const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");

// BOTON PLAY-PAUSA

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".pause-btn").classList.toggle("hide");
    playPause.querySelector(".play-btn").classList.toggle("hide");
  }
});

/* BOTON DE AVANZAR Y RETROCEDER

forward.addEventListener("click", () => {
    if (audio.forward || audio.ended) {
        forward.querySelector(".forward")
    }
}); */ 