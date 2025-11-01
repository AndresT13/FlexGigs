// 🌐 FlexGigs - Multi-language Script
document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("lang-selector");

  if (!selector) {
    console.error("No se encontró el selector de idioma (#lang-selector)");
    return;
  }

  //  Detecta idioma previo o usa inglés por defecto
  const defaultLang = localStorage.getItem("lang") || "en";
  selector.value = defaultLang;
  loadLanguage(defaultLang);

  // Evento de cambio de idioma
  selector.addEventListener("change", (e) => {
    const lang = e.target.value;
    loadLanguage(lang);
    localStorage.setItem("lang", lang);
  });
});

//  Carga el idioma dinámicamente
function loadLanguage(lang) {
  const langPath = `./lang/${lang}.json`;
  console.log(`🌐 Cargando idioma desde: ${langPath}`);

  fetch(langPath)
    .then((res) => {
      if (!res.ok) throw new Error(`Archivo de idioma no encontrado: ${lang}`);
      return res.json();
    })
    .then((data) => {
      // Cambiar textos normales
      document.querySelectorAll("[data-lang]").forEach((el) => {
        const key = el.getAttribute("data-lang");
        if (data[key]) el.textContent = data[key];
      });

      //  Cambiar placeholders dinámicos
      document.querySelectorAll("[data-lang-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-lang-placeholder");
        if (data[key]) el.setAttribute("placeholder", data[key]);
      });

      console.log(`✅ Idioma cargado correctamente: ${lang}`);
    })
    .catch((err) => console.error(`Error cargando idioma (${langPath}):`, err));
}
