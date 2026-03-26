// ────────────────────────────────────────
// MENÚ HAMBURGUESA
// ────────────────────────────────────────

const hamburguesa = document.getElementById('hamburguesa');
const navLinks = document.getElementById('navLinks');

// Toggle del menú al hacer clic en el botón
hamburguesa.addEventListener('click', function () {
  navLinks.classList.toggle('activo');
  hamburguesa.classList.toggle('activo');
});

// Cerrar menú al hacer clic en un enlace
const enlaces = document.querySelectorAll('.nav-links a');
enlaces.forEach(enlace => {
  enlace.addEventListener('click', function () {
    navLinks.classList.remove('activo');
    hamburguesa.classList.remove('activo');
  });
});
