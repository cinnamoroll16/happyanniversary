// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Moon, a hole of light", time: 9 },
  { text: "Through the big top tent up high", time: 12 },
  { text: "Here before and after me", time: 16 },
  { text: "Shinin' down on me", time: 21 },
  { text: "Moon, tell me if I could", time: 25 },
  { text: "Send up my heart to you?", time: 28 },
  { text: "So, when I die, which I must do", time: 34 },
  { text: "Could it shine down here with you?", time: 38 },
  { text: "'Cause my love is mine, all mine", time: 42 },
  { text: "I love mine, mine, mine", time: 46 },
  { text: "Nothing in the world belongs to me", time: 51 },
  { text: "But my love, mine, all mine, all mine", time: 55 },
  { text: "My baby here on Earth", time: 79 },
  { text: "Showed me what my heart was worth", time: 82 },
  { text: "So when it comes to be my turn", time: 86 },
  { text: "Could you shine it down here for her?", time: 90 },
  { text: "'Cause my love is mine, all mine", time: 94 },
  { text: "I love my, my, mine", time: 99 },
  { text: "Nothing in the world belongs to me", time: 103 },
  { text: "But my love, mine, all mine", time: 108 },
  { text: "Nothing in the world is mine for free", time: 112 },
  { text: "But my love, mine, all mine, all mine", time: 116 },
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

setInterval(updateLyrics, 138); // check 5 times per second


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
