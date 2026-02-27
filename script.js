console.log("Site carregado");

// Lista de músicas

const playlist = ["zJpWCTbgeOA", "zBUurckfIiE", "5uB-RfBhhok", "7Bkal8xj_h0"];

let current = 0;

// Botão tocar

document.getElementById("playMusic").onclick = function () {
  playMusic();
};

// Função tocar

function playMusic() {
  document.getElementById("player").src =
    "https://www.youtube.com/embed/" + playlist[current] + "?autoplay=1";

  // duração média da música (4 minutos)

  setTimeout(nextMusic, 240000);
}

// Próxima música

function nextMusic() {
  current++;

  if (current >= playlist.length) {
    current = 0;
  }

  playMusic();
}
