(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Language system:
  // - Elements with data-it / data-en will switch text accordingly.
  // - Elements with data-i18n use a small dictionary (for UI labels).
  const langToggle = document.getElementById("langToggle");

  const dict = {
    it: {
      nav_about: "About",
      nav_services: "Services",
      nav_contact: "Contact",
      nav_social: "Social",
      cta_contact: "Contatti",
      scroll_hint: "Scorri",
      about_title: "About",
      services_title: "Services",
      digital_title: "Digital",
      visual_title: "Visual",
      contact_title: "Contact",
      contact_email: "Email",
      contact_instagram: "Instagram",
      contact_whatsapp: "WhatsApp",
      social_title: "Social",
      back_to_top: "Torna su"
    },
    en: {
      nav_about: "About",
      nav_services: "Services",
      nav_contact: "Contact",
      nav_social: "Social",
      cta_contact: "Contact",
      scroll_hint: "Scroll",
      about_title: "About",
      services_title: "Services",
      digital_title: "Digital",
      visual_title: "Visual",
      contact_title: "Contact",
      contact_email: "Email",
      contact_instagram: "Instagram",
      contact_whatsapp: "WhatsApp",
      social_title: "Social",
      back_to_top: "Back to top"
    }
  };

  function setToggleLabel(lang) {
    if (!langToggle) return;
    const labels = langToggle.querySelectorAll(".lang-toggle__label");
    if (labels.length < 2) return;
    if (lang === "it") {
      labels[0].classList.remove("lang-toggle__label--muted");
      labels[1].classList.add("lang-toggle__label--muted");
    } else {
      labels[0].classList.add("lang-toggle__label--muted");
      labels[1].classList.remove("lang-toggle__label--muted");
    }
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;

    // Swap text for data-it/data-en elements
    const swapEls = document.querySelectorAll("[data-it][data-en]");
    swapEls.forEach((el) => {
      const txt = el.getAttribute(lang === "it" ? "data-it" : "data-en");
      if (typeof txt === "string") el.textContent = txt;
    });

    // UI labels via dictionary
    const uiEls = document.querySelectorAll("[data-i18n]");
    uiEls.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[lang]?.[key];
      if (val) el.textContent = val;
    });

    localStorage.setItem("kalte_lang", lang);
    setToggleLabel(lang);
  }

  const saved = localStorage.getItem("kalte_lang");
  applyLang(saved === "en" ? "en" : "it");

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = document.documentElement.lang === "en" ? "en" : "it";
      applyLang(current === "it" ? "en" : "it");
    });
  }
})();
