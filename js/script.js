document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pqrs-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("pqrs-name").value.trim();
    const email = document.getElementById("pqrs-email").value.trim();
    const type = document.getElementById("pqrs-type").value;
    const message = document.getElementById("pqrs-message").value.trim();

    if (name === "" || email === "" || type === "" || message === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor ingresa un correo válido.");
      return;
    }

    alert("¡Gracias! Tu solicitud ha sido enviada.");
    form.reset();
  });
});
