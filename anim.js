// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Cae la tarde en un frío color", time: 17 },
  
  { text: "Escucho mi nombre en el corredor", time: 20 },

  { text: "Y ya no es tu risa la que me recuerda", time: 25 },
  { text: "Que un libro se acaba aunque sea el mejor", time: 29 },
  { text: "Frente a mí, yo sé que no ves", time: 35 },
  { text: "Que la esencia nos hizo crecer", time: 39},
  { text: "Y es que aunque me disparen", time: 42 },
  { text: "Que no me comparen con fotos de ayer", time: 44},
  { text: "Quédate esta noche conmigo, mi amor", time: 52},
  { text: "Y cierra los ojos, entiende que yo", time: 56},

  { text: "Enciendo mis sueños", time: 59},
  { text: "Cuando a mi lado siento tu calor", time: 60.5},
  { text: "Y abrázame fuerte por última vez", time:69 },
  { text: "Que no nos importe qué pase después", time: 73 },
  { text: "Si tú también sabes que cuando amanezca", time: 78 },
  { text: "Yo ya no estaré, ya no estaré", time: 84 },
  { text: "Solamente te pido un favor", time: 133 },
  { text: "Toma este puñal que es mejor que yo", time: 136.5 },
  { text: "Y hunde su fuerza en mí de lado a lado", time: 141 },
  { text: "Y arranca la pena con todo el dolor", time: 145},
  { text: "Todos saben que pronto me voy", time: 150},
  { text: "Te seguí hasta la plaza mayor", time: 155 },
  { text: "Y aunque todo ha cambiado", time:157 },
  { text: "Nunca he olvidado el idiota que soy", time: 162 },
  { text: "Quédate esta noche conmigo, mi amor", time: 167 },
  { text: "Y cierra los ojos, entiende que yo", time: 172 },
  { text: "Enciendo mis sueños", time: 173 },
  { text: "Cuando a mi lado siento tu calor", time: 178 },
  { text: "Y abrázame fuerte por última vez", time: 185 },
  { text: "Que no nos importe qué pase después", time: 190 },
  { text: "Si tú también sabes que cuando amanezca", time: 194 },
  { text: "Yo ya no estaré, hmm ya no estaré", time: 198 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time +5 ,
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