// Ejecutar el código solo después de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Verificar si estamos en index.html
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    window.addEventListener("scroll", function() {
      const header = document.getElementById("header");
      const hero = document.getElementById("hero");
      const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;

        // Mostrar el ícono de navegación solo después de pasar la sección #hero
        if (window.scrollY > heroBottom) {
          header.classList.add("visible");
          mobileNavToggle.classList.add("visible"); // Mostrar el ícono de navegación
        } else {
          header.classList.remove("visible");
          mobileNavToggle.classList.remove("visible"); // Ocultar el ícono de navegación
        }
      }
    });
  } else {
    // Si estamos en otra página, mostrar el menú de navegación por defecto
    const header = document.getElementById("header");
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

    if (header) {
      header.classList.add("visible");
    }
    if (mobileNavToggle) {
      mobileNavToggle.classList.add("visible");
    }
  }
});
