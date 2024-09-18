// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Oh, her eyes, her eyes", time: 18 },
  { text: "Make the stars look like they're not shining", time: 10 },
  { text: "Her hair, her hair", time: 14 },
  { text: "Falls perfectly without her trying", time: 18 },
  { text: "She's so beautiful", time: 22 },
  { text: "And I tell her every day, yeah", time: 27 },
  
  { text: "I know, I know", time: 33 },
  { text: "When I compliment her, she won't believe me", time: 37 },
  { text: "And it's so, it's so", time: 42 },
  { text: "Sad to think that she don't see what I see", time: 46 },
  { text: "But every time she asks me, 'Do I look okay?'", time: 51 },
  { text: "I say...", time: 55 },
  
  { text: "When I see your face", time: 60 },
  { text: "There's not a thing that I would change", time: 65 },
  { text: "'Cause you're amazing", time: 70 },
  { text: "Just the way you are", time: 75 },
  { text: "And when you smile", time: 81 },
  { text: "The whole world stops and stares for a while", time: 86 },
  { text: "'Cause girl, you're amazing", time: 91 },
  { text: "Just the way you are", time: 96 },
  
  { text: "Her lips, her lips", time: 103 },
  { text: "I could kiss them all day if she'd let me", time: 108 },
  { text: "Her laugh, her laugh", time: 114 },
  { text: "She hates but I think it's so sexy", time: 119 },
  { text: "She's so beautiful", time: 123 },
  { text: "And I tell her every day", time: 128 },
  
  { text: "Oh, you know, you know, you know", time: 134 },
  { text: "I'd never ask you to change", time: 138 },
  { text: "If perfect's what you're searching for", time: 143 },
  { text: "Then just stay the same", time: 147 },
  { text: "So don't even bother asking if you look okay", time: 151 },
  { text: "'Cause you know I'll say...", time: 156 },
  
  { text: "When I see your face", time: 162 },
  { text: "There's not a thing that I would change", time: 167 },
  { text: "'Cause you're amazing", time: 172 },
  { text: "Just the way you are", time: 176 },
  { text: "And when you smile", time: 183 },
  { text: "The whole world stops and stares for a while", time: 188 },
  { text: "'Cause girl, you're amazing", time: 193 },
  { text: "Just the way you are", time: 197 },
  
  { text: "The way you are", time: 203 },
  { text: "The way you are", time: 208 },
  
  { text: "When I see your face", time: 213 },
  { text: "There's not a thing that I would change", time: 218 },
  { text: "'Cause you're amazing", time: 223 },
  { text: "Just the way you are", time: 228 },
  { text: "And when you smile", time: 233 },
  { text: "The whole world stops and stares for a while", time: 238 },
  { text: "'Cause girl, you're amazing", time: 243 },
  { text: "Just the way you are", time: 248 },
];

// El resto del código sigue igual

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
