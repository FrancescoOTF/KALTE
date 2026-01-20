/* ========= i18n (single JS toggle, no duplicate pages) ========= */
const I18N = {
  it: {
    nav_about: "ABOUT",
    nav_services: "SERVICES",
    nav_contact: "CONTACT",
    nav_social: "SOCIAL",

    hero_sub: "Digital & Visual Solutions",
    hero_tagline: "Siti web essenziali e soluzioni visive chiare.",
    cta_contact: "CONTACT",
    hero_notes: "Siti statici. Identità pulita. Niente complessità inutile.",

    about_title: "ABOUT",
    about_text:
      "KALTÉ è un progetto indipendente di Digital & Visual Solutions.\n" +
      "Realizziamo siti web semplici e identità visive essenziali, pensate per essere chiare,\n" +
      "funzionali e durare nel tempo.\n" +
      "Lavoriamo su soluzioni concrete, senza complicazioni inutili,\n" +
      "con un approccio diretto e collaborativo.",

    services_title: "SERVICES",
    services_kicker: "Focus",
    digital_card_desc: "Siti statici 1–3 pagine, veloci, chiari, senza gestione continua.",
    visual_card_desc: "Logo, identità visiva, materiali digitali e stampati. Lavoro serio.",
    open_page: "Open page →",

    contact_title: "CONTACT",
    social_title: "SOCIAL",
    footer_note: "Digital & Visual Solutions.",

    back_home: "← Home",
    what_we_do: "Cosa facciamo",
    what_we_dont: "Cosa NON facciamo",
    next_step: "Next step",
    cta_email: "EMAIL",
    cta_whatsapp: "WHATSAPP",

    digital_intro: "Siti web statici 1–3 pagine. Veloci, chiari, senza gestione continua.",
    digital_fit: "Ideale per attività locali, creativi, piccoli brand: serve chiarezza, non complessità.",
    digital_next:
      "Se ti serve un sito semplice che presenti bene il tuo lavoro e funzioni su ogni dispositivo, scrivi e mandami:\n" +
      "1) esempio di siti che ti piacciono, 2) testi/servizi, 3) logo e colori (se li hai).",

    visual_intro: "Identità visiva essenziale, applicabile e coerente. Niente decorazioni vuote.",
    what_includes: "Include",
    what_excludes: "Esclude",
    visual_serious: "Questo è lavoro serio: se vuoi “solo un logo veloce”, non è il servizio giusto.",
    visual_next:
      "Per partire servono: 1) riferimento stile, 2) cosa fai e per chi, 3) dove verrà usato (web, stampa, merch),\n" +
      "4) vincoli (colori, simboli, formati).",

    // lists
    digital_do: [
      "Siti web statici 1–3 pagine",
      "Layout pulito, mobile-first",
      "Performance e caricamento veloce",
      "Contenuti chiari + contatti immediati",
      "Deploy su Netlify / Cloudflare Pages"
    ],
    digital_dont: [
      "WordPress gestito",
      "Ecommerce",
      "SEO avanzata",
      "Manutenzione continua"
    ],
    visual_in: [
      "Logo / restyling",
      "Identità visiva (colori, font, regole base)",
      "Materiali digitali (cover, banner, asset web)",
      "Materiali stampati (flyer, poster, biglietti, packaging base)",
      "Applicazioni su merch / vestiario"
    ],
    visual_out: [
      "SMM",
      "Marketing",
      "Copywriting",
      "Gestione social"
    ]
  },

  en: {
    nav_about: "ABOUT",
    nav_services: "SERVICES",
    nav_contact: "CONTACT",
    nav_social: "SOCIAL",

    hero_sub: "Digital & Visual Solutions",
    hero_tagline: "Simple websites and clear visual identities.",
    cta_contact: "CONTACT",
    hero_notes: "Static sites. Clean identity. No unnecessary complexity.",

    about_title: "ABOUT",
    about_text:
      "KALTÉ is an independent Digital & Visual Solutions project.\n" +
      "We create simple websites and essential visual identities,\n" +
      "designed to be clear, functional, and built to last.\n" +
      "We focus on practical solutions, without unnecessary complexity,\n" +
      "using a direct and collaborative approach.",

    services_title: "SERVICES",
    services_kicker: "Focus",
    digital_card_desc: "Static 1–3 page websites. Fast, clear, no ongoing management.",
    visual_card_desc: "Logos, visual identity, digital + print materials. Serious work.",
    open_page: "Open page →",

    contact_title: "CONTACT",
    social_title: "SOCIAL",
    footer_note: "Digital & Visual Solutions.",

    back_home: "← Home",
    what_we_do: "What we do",
    what_we_dont: "What we don't do",
    next_step: "Next step",
    cta_email: "EMAIL",
    cta_whatsapp: "WHATSAPP",

    digital_intro: "Static 1–3 page websites. Fast, clear, no ongoing management.",
    digital_fit: "Ideal for local businesses, creatives, small brands: you need clarity, not complexity.",
    digital_next:
      "If you need a simple website that presents your work properly and works on every device, send:\n" +
      "1) references you like, 2) your services/texts, 3) your logo and colors (if any).",

    visual_intro: "Essential visual identity that is usable and consistent. No empty decoration.",
    what_includes: "Includes",
    what_excludes: "Excludes",
    visual_serious: "This is serious work: if you want a “quick logo”, this is not the right service.",
    visual_next:
      "To start I need: 1) style references, 2) what you do and for whom, 3) where it will be used (web, print, merch),\n" +
      "4) constraints (colors, symbols, formats).",

    digital_do: [
      "Static 1–3 page websites",
      "Clean, mobile-first layout",
      "Fast load and performance focus",
      "Clear content + direct contacts",
      "Deploy on Netlify / Cloudflare Pages"
    ],
    digital_dont: [
      "Managed WordPress",
      "E-commerce",
      "Advanced SEO",
      "Ongoing maintenance"
    ],
    visual_in: [
      "Logo / redesign",
      "Visual identity (colors, fonts, basic rules)",
      "Digital materials (covers, banners, web assets)",
      "Printed materials (flyers, posters, cards, basic packaging)",
      "Applications for merch / apparel"
    ],
    visual_out: [
      "Social media management",
      "Marketing",
      "Copywriting",
      "Social account management"
    ]
  }
};

function getSavedLang(){
  const saved = localStorage.getItem("kalte_lang");
  return (saved === "en" || saved === "it") ? saved : "it";
}

function setLang(lang){
  localStorage.setItem("kalte_lang", lang);
  document.documentElement.lang = lang;

  // update pill
  const pill = document.getElementById("langPill");
  if (pill) pill.textContent = lang.toUpperCase();

  // update simple text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = I18N[lang][key];
    if (!value) return;

    // preserve line breaks in paragraphs
    if (el.tagName === "P" || el.classList.contains("section-text") || el.classList.contains("page-sub")) {
      el.textContent = value;
    } else {
      el.textContent = value;
    }
  });

  // update lists
  document.querySelectorAll("[data-i18n-list]").forEach(ul => {
    const key = ul.getAttribute("data-i18n-list");
    const arr = I18N[lang][key];
    if (!Array.isArray(arr)) return;

    ul.innerHTML = "";
    arr.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  });
}

function initLang(){
  const lang = getSavedLang();
  setLang(lang);

  const btn = document.getElementById("langToggle");
  if (btn){
    btn.addEventListener("click", () => {
      const current = getSavedLang();
      const next = current === "it" ? "en" : "it";
      setLang(next);
    });
  }
}

function initYear(){
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initYear();
});
