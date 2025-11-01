document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    let isValid = true;

    if (
      !email.value.trim() ||
      !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value)
    ) {
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
    }

    if (!password.value.trim()) {
      password.classList.add("is-invalid");
      isValid = false;
    } else {
      password.classList.remove("is-invalid");
    }

    if (isValid) {
      const currentLang = localStorage.getItem("loginLang") || "en";
      fetch("../lang/login/${currentLang}.json")
        .then((res) => res.json())
        .then((data) => alert(data.login_success || "Login successful!"));
      form.reset();
    }
  });
});
