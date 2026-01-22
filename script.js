/* script.js */
const LS_KEY = "kalte_lang";
const DEFAULT_LANG = "it";

const I18N = {
  it: {
    nav: {
      home: "Home",
      digital: "Digital",
      visual: "Visual",
      howWeWork: "Come lavoriamo",
      contact: "Contatti"
    },
    visual: {
      kicker: "Visual",
      title: "Identità essenziale, applicata bene.",
      lead: "Logo/restyling, palette, font e regole base: il minimo indispensabile per avere coerenza ovunque.",
      micro: "Se ti serve “un logo e basta” senza regole, poi ti esplode tutto in mano.",
      what: {
        title: "Cosa facciamo",
        list: [
          "Logo / restyling (pulito, leggibile, replicabile).",
          "Identità essenziale: colori, font, regole base d’uso.",
          "Materiali digitali e stampati: template e applicazioni.",
          "Applicazioni su merch: specifiche chiare per stampa/ricamo."
        ]
      },
      merch: {
        title: "Merch / Apparel",
        carouselTitle: "Livelli",
        hint: "Scorri: Standard / Plus / Premium.",
        selective: "Produzione/coordinamento completo solo su progetti selezionati.",
        cta: "Contatti",
        cta2: "Vedi case study",
        tiers: [
          {
            kicker: "STANDARD",
            title: "Design + tech pack + specs + handoff",
            list: [
              "Design (grafica/posizionamenti).",
              "Tech pack + specifiche stampa/ricamo.",
              "Handoff al fornitore (cliente paga il fornitore).",
              "Output pronto produzione, senza interpretazioni."
            ],
            note: "Il cliente resta referente con la fabbrica."
          },
          {
            kicker: "PLUS",
            title: "Standard + revisioni + supporto fornitore",
            list: [
              "Tutto lo Standard.",
              "Revisioni fino a 5.",
              "Supporto scelta fornitore.",
              "Lista contatti fabbriche (Cina) usate per merch KALTÉ.",
              "Cliente resta referente con la fabbrica."
            ],
            note: "Più controllo, senza delega totale."
          },
          {
            kicker: "PREMIUM",
            title: "Full production coordination (selezionati)",
            list: [
              "KALTÉ referente unico: comunicazioni e check.",
              "Coordinamento produzione end-to-end.",
              "Fee indicativa base ~15% (varia per complessità/tempo/costi).",
              "Disponibilità limitata: progetti selezionati."
            ],
            note: "Qui paghi tempo + responsabilità."
          }
        ]
      }
    }
  },

  en: {
    nav: {
      home: "Home",
      digital: "Digital",
      visual: "Visual",
      howWeWork: "How we work",
      contact: "Contact"
    },
    visual: {
      kicker: "Visual",
      title: "Essential identity, applied properly.",
      lead: "Logo/restyling, palette, fonts and basic rules — the minimum needed to stay consistent everywhere.",
      micro: "If you only want “a logo” with no rules, your brand will break in the real world.",
      what: {
        title: "What we do",
        list: [
          "Logo / restyling (clean, readable, reproducible).",
          "Essential identity: colors, fonts, basic usage rules.",
          "Digital + print materials: templates and applications.",
          "Merch applications: clear print/embroidery specifications."
        ]
      },
      merch: {
        title: "Merch / Apparel",
        carouselTitle: "Tiers",
        hint: "Scroll: Standard / Plus / Premium.",
        selective: "Full production coordination only for selected projects.",
        cta: "Contact",
        cta2: "See case study",
        tiers: [
          {
            kicker: "STANDARD",
            title: "Design + tech pack + specs + handoff",
            list: [
              "Design (graphics/placements).",
              "Tech pack + print/embroidery specs.",
              "Handoff to supplier (client pays supplier).",
              "Production-ready output, no guessing."
            ],
            note: "Client remains the supplier contact."
          },
          {
            kicker: "PLUS",
            title: "Standard + revisions + supplier support",
            list: [
              "Everything in Standard.",
              "Up to 5 revision rounds.",
              "Support choosing a supplier.",
              "Factory contact list (China) used for KALTÉ merch.",
              "Client remains the supplier contact."
            ],
            note: "More control without full delegation."
          },
          {
            kicker: "PREMIUM",
            title: "Full production coordination (selected)",
            list: [
              "KALTÉ as single point of contact: comms + checks.",
              "End-to-end production coordination.",
              "Indicative base fee ~15% (varies by complexity/time/cost).",
              "Limited availability: selected projects only."
            ],
            note: "You pay for time + accountability."
          }
        ]
      }
    }
  }
};

// ---------- helpers ----------
function getByPath(obj, path) {
  return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
}

function renderList(ul, items) {
  ul.innerHTML = "";
  items.forEach((txt) => {
    const li = document.createElement("li");
    li.textContent = txt;
    ul.appendChild(li);
  });
}

// ---------- i18n ----------
function applyI18n(lang) {
  const dict = I18N[lang] || I18N[DEFAULT_LANG];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = getByPath(dict, key);
    if (typeof val === "string") el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-list]").forEach((el) => {
    const key = el.getAttribute("data-i18n-list");
    const arr = getByPath(dict, key);
    if (!Array.isArray(arr)) return;
    renderList(el, arr);
  });

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  initOrUpdateTierCarousel(lang);
}

function setLang(lang) {
  const safe = (lang === "it" || lang === "en") ? lang : DEFAULT_LANG;
  localStorage.setItem(LS_KEY, safe);
  applyI18n(safe);
}

function getLang() {
  const saved = localStorage.getItem(LS_KEY);
  if (saved === "it" || saved === "en") return saved;
  return DEFAULT_LANG;
}

// ---------- carousel tiers (visual) ----------
let tierIndex = 0;

function renderTier(container, tier) {
  const kicker = container.querySelector("[data-carousel-kicker]");
  const title = container.querySelector("[data-carousel-title]");
  const list = container.querySelector("[data-carousel-list]");
  const note = container.querySelector("[data-carousel-note]");

  if (kicker) kicker.textContent = tier.kicker || "";
  if (title) title.textContent = tier.title || "";
  if (list) renderList(list, tier.list || []);
  if (note) note.textContent = tier.note || "";
}

function initOrUpdateTierCarousel(lang) {
  const container = document.querySelector('[data-carousel="tiers"]');
  if (!container) return;

  const dict = I18N[lang] || I18N[DEFAULT_LANG];
  const tiers = dict?.visual?.merch?.tiers;
  if (!Array.isArray(tiers) || tiers.length === 0) return;

  tierIndex = ((tierIndex % tiers.length) + tiers.length) % tiers.length;
  renderTier(container, tiers[tierIndex]);

  const prev = container.querySelector("[data-carousel-prev]");
  const next = container.querySelector("[data-carousel-next]");

  if (prev && !prev._bound) {
    prev._bound = true;
    prev.addEventListener("click", () => {
      tierIndex = (tierIndex - 1 + tiers.length) % tiers.length;
      renderTier(container, tiers[tierIndex]);
    });
  }

  if (next && !next._bound) {
    next._bound = true;
    next.addEventListener("click", () => {
      tierIndex = (tierIndex + 1) % tiers.length;
      renderTier(container, tiers[tierIndex]);
    });
  }
}

// ---------- boot ----------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });

  applyI18n(getLang());
});
