//  FlexGigs - Form Validation (con soporte multi-idioma)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pqrsForm");

  //  Verificación de existencia del formulario
  if (!form) {
    console.warn("⚠️ No se encontró el formulario PQRS (#pqrsForm).");
    return;
  }

  //  Evento de envío
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const type = document.getElementById("type");
    const message = document.getElementById("message");

    let errors = [];

    //  Validaciones básicas
    if (!name?.value.trim()) errors.push(getLangText("form_error_name"));
    if (!email?.value.trim()) {
      errors.push(getLangText("form_error_email_required"));
    } else if (!validateEmail(email.value)) {
      errors.push(getLangText("form_error_email_invalid"));
    }
    if (!type?.value || type.value === "Choose...") {
      errors.push(getLangText("form_error_type"));
    }
    if (!message?.value.trim()) errors.push(getLangText("form_error_message"));

    //  Mostrar errores o éxito
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert(getLangText("form_success"));
      form.reset();
    }
  });
});

//  Función auxiliar para validar email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

//  Función para obtener texto en el idioma actual
function getLangText(key) {
  const lang = localStorage.getItem("lang") || "en";

  const messages = {
    en: {
      form_error_name: "Name is required.",
      form_error_email_required: "Email is required.",
      form_error_email_invalid: "Email format is invalid.",
      form_error_type: "Please select a type of request.",
      form_error_message: "Message cannot be empty.",
      form_success: "Form submitted successfully!",
    },
    es: {
      form_error_name: "El nombre es obligatorio.",
      form_error_email_required: "El correo electrónico es obligatorio.",
      form_error_email_invalid: "El formato del correo no es válido.",
      form_error_type: "Selecciona un tipo de solicitud.",
      form_error_message: "El mensaje no puede estar vacío.",
      form_success: "¡Formulario enviado correctamente!",
    },
    pt: {
      form_error_name: "O nome é obrigatório.",
      form_error_email_required: "O e-mail é obrigatório.",
      form_error_email_invalid: "Formato de e-mail inválido.",
      form_error_type: "Selecione um tipo de solicitação.",
      form_error_message: "A mensagem não pode estar vazia.",
      form_success: "Formulário enviado com sucesso!",
    },
  };

  return messages[lang][key] || messages["en"][key] || key;
}
