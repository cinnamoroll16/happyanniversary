// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Moon, a hole of light", time: 9 },
  { text: "Through the big top tent up high", time: 10 },
  { text: "Here before and after me", time: 14 },
  { text: "Shinin' down on me", time: 18 },
  { text: "Moon, tell me if I could", time: 23 },
  { text: "Send up my heart to you?", time: 26 },
  { text: "So, when I die, which I must do", time: 30 },
  { text: "Could it shine down here with you?", time: 34 },
  { text: "'Cause my love is mine, all mine", time: 39 },
  { text: "My love mine, mine, mine", time: 44 },
  { text: "Nothing in the world belongs to me", time: 37 },
  { text: "But my love, mine, all mine, all mine", time: 51 },
  { text: "But my love, mine, all mine, all mine", time: 58 },
  { text: "My baby here on Earth", time: 75 },
  { text: "Showed me what my heart was worth", time: 79 },
  { text: "So when it comes to be my turn", time: 84 },
  { text: "Could you shine it down here for her?", time: 88 },
  { text: "'Cause my love is mine, all mine", time: 91 },
  { text: "I love my, my, mine", time: 96 },
  { text: "Nothing in the world belongs to me", time: 99 },
  { text: "But my love, mine, all mine", time: 104 },
  { text: "Nothing in the world is mine for free", time: 108 },
  { text: "But my love, mine, all mine, all mine", time: 12 },
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime; // use exact time
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.2;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 115); // check 5 times per second


//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 200);
