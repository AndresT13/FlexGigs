//  FlexGigs - Form Validation & Carousel Init
document.addEventListener("DOMContentLoaded", () => {
  //  FORM PQRS
  const form = document.getElementById("pqrs-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("pqrs-name")?.value.trim() || "";
      const email = document.getElementById("pqrs-email")?.value.trim() || "";
      const type = document.getElementById("pqrs-type")?.value || "";
      const message =
        document.getElementById("pqrs-message")?.value.trim() || "";

      if (!name || !email || !type || !message) {
        alert(" Por favor completa todos los campos.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert(" Por favor ingresa un correo válido.");
        return;
      }

      alert(" ¡Gracias! Tu solicitud ha sido enviada correctamente.");
      form.reset();
    });
  } else {
    console.warn(" No se encontró el formulario PQRS (#pqrs-form).");
  }

  //  BOOTSTRAP CAROUSEL INIT
  const el = document.getElementById("heroCarousel");
  if (el && window.bootstrap) {
    new bootstrap.Carousel(el, {
      interval: 4000, // 4s entre slides
      ride: "carousel",
      pause: false, // No se pausa al hacer hover
      wrap: true, // Vuelve al inicio
      touch: true, // Soporte táctil
    });
    console.log(" Carrusel iniciado correctamente.");
  } else {
    console.warn(" No se encontró el carrusel (#heroCarousel).");
  }
});
