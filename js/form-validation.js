document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pqrsForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const type = document.getElementById("type");
    const message = document.getElementById("message");

    let errors = [];

    if (name.value.trim() === "") {
      errors.push("Name is required.");
    }

    if (email.value.trim() === "") {
      errors.push("Email is required.");
    } else if (!validateEmail(email.value)) {
      errors.push("Email format is invalid.");
    }

    if (type.value === "" || type.value === "Choose...") {
      errors.push("Please select a type of request.");
    }

    if (message.value.trim() === "") {
      errors.push("Message cannot be empty.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Form submitted successfully!");
      form.reset(); // Limpia el formulario si todo está bien
    }
  });

  function validateEmail(email) {
    // Expresión regular para validar formato de email básico
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
