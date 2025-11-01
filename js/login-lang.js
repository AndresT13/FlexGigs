document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("lang-selector");
  const savedLang = localStorage.getItem("loginLang");

  // 🌍 Detecta idioma del navegador y usa el guardado si existe
  const defaultLang = savedLang || navigator.language.slice(0, 2) || "en";
  const normalizedLang = ["en", "es", "pt"].includes(defaultLang)
    ? defaultLang
    : "en";

  selector.value = normalizedLang;
  loadLoginLanguage(normalizedLang);

  // ⚙️ Evento de cambio manual
  selector.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("loginLang", lang);
    loadLoginLanguage(lang);
  });
});

async function loadLoginLanguage(lang) {
  const langPath = `../lang/login/${lang}.json`;

  try {
    const response = await fetch(langPath);
    if (!response.ok) {
      console.error(`❌ Language file not found at: ${langPath}`);
      return;
    }

    const data = await response.json();

    // 🔄 Actualiza textos dinámicos
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const key = el.getAttribute("data-lang");
      const translation = data[key];
      if (!translation) return;

      const tag = el.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea") {
        el.placeholder = translation;
      } else if (tag === "button" || tag === "a") {
        el.textContent = translation;
      } else {
        el.innerHTML = translation;
      }
    });

    document.documentElement.lang = lang;
  } catch (error) {
    console.error("⚠️ Error loading language:", error);
  }
}
