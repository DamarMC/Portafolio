// Mostrar saludo dinámico
const saludo = document.getElementById("saludo");
const hora = new Date().getHours();

if (hora < 12) {
  saludo.textContent = "¡Buenos días soy Damar, bienvenido a mi página!";
} else if (hora < 18) {
  saludo.textContent = "¡Buenas tardes, gracias por visitar!";
} else {
  saludo.textContent = "¡Buenas noches, espero que estés bien!";
}

// Función para mostrar mensaje con animación
function mostrarMensaje() {
  saludo.classList.add('fade-out');
  setTimeout(() => {
    alert("Gracias por ver");
    saludo.classList.remove('fade-out');
  }, 500);
}

// Mostrar la fecha actual
const fechaP = document.getElementById('fecha');
const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fechaActual = new Date().toLocaleDateString('es-ES', opcionesFecha);
fechaP.textContent = `Hoy es ${fechaActual}`;

// Cambio de tema claro/oscuro
const toggleThemeBtn = document.getElementById('toggle-theme-btn');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const music = document.getElementById('bgMusic');
const muteBtn = document.getElementById('toggleMute');
const muteIcon = document.getElementById('muteIcon');

// Iniciar música tras primera interacción
function iniciarMusica() {
  music.play().catch(err => console.log("Error al iniciar música:", err));
  document.removeEventListener('click', iniciarMusica);
}

document.addEventListener('click', iniciarMusica);

// Toggle mute/unmute y cambio de icono
muteBtn.addEventListener('click', () => {
  music.muted = !music.muted;
  if (music.muted) {
    muteIcon.classList.replace('fa-volume-up', 'fa-volume-mute');
  } else {
    muteIcon.classList.replace('fa-volume-mute', 'fa-volume-up');
  }
});



