// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Oh, her eyes, her eyes", time: 5 },
  { text: "Make the stars look like they're not shinin'", time: 10 },
  { text: "Her hair, her hair", time: 14 },
  { text: "Falls perfectly without her tryin'", time: 17 },
  { text: "She's so beautiful", time: 22 },
  { text: "And I tell her every day", time: 27 },
  { text: "Yeah, I know, I know", time: 34 },
  { text: "When I compliment her she won't believe me", time: 39 },
  { text: "And it's so, it's so", time: 44 },
  { text: "Sad to think that she don't see what I see", time: 48 },
  { text: "But every time she asks me, 'Do I look okay?'", time: 52 },
  { text: "I say", time: 55 },
  { text: "When I see your face", time: 60 },
  { text: "There's not a thing that I would change", time: 65 },
  { text: "'Cause you're amazing", time: 71 },
  { text: "Just the way you are", time: 75 },
  { text: "And when you smile", time: 81 },
  { text: "The whole world stops and stares for a while", time: 86 },
  { text: "'Cause girl, you're amazing", time: 91 },
  { text: "Just the way you are", time: 96 },
  { text: "Yeah", time: 102 },
  // Continúa con el resto de la canción
];
// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

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
setTimeout(ocultarTitulo, 216000);