// Verificar si estamos en index.html
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    window.addEventListener("scroll", function() {
      const header = document.getElementById("header");
      const hero = document.getElementById("hero");
      const heroBottom = hero.offsetTop + hero.offsetHeight;
  
      // Mostrar el menú solo después de pasar el Hero
      if (window.scrollY > heroBottom) {
        header.classList.add("visible");
      } else {
        header.classList.remove("visible");
      }
    });
  } else {
    // Si estamos en otra página, mostrar el menú de navegación por defecto
    document.getElementById("header").classList.add("visible");
  }
  