/* KALTÉ — Vanilla JS i18n
   - data-i18n for strings
   - data-i18n-list for arrays (generates <li>)
   - localStorage key: "kalte_lang"
*/

const LS_KEY = "kalte_lang";
const DEFAULT_LANG = "it";

const I18N = {
  it: {
    nav: {
      home: "Home",
      about: "About",
      services: "Servizi",
      howWeWork: "Come lavoriamo",
      contact: "Contatti",
      social: "Social",
      digital: "Digital",
      visual: "Visual"
    },

    home: {
      hero: {
        kicker: "DIGITAL & VISUAL SOLUTIONS",
        title: "Siti statici + identità visiva essenziale."
      },
      what: {
        label: "Cosa facciamo",
        doTitle: "Output",
        doList: [
          "Siti statici (HTML/CSS/JS vanilla) 1–3 pagine",
          "Struttura copy essenziale e chiara (se hai contenuti, meglio)",
          "Responsive mobile-first",
          "Deploy su GitHub Pages / Netlify / Cloudflare Pages",
          "Toggle Lingua (Es. ITA/ENG) — su richiesta",
          "Mini identity: palette, font, regole base, applicazioni coerenti",
          "Materiali digitali e stampati (essenziali)",
          "Applicazioni su merch / vestiario quando serve"
        ],
        limitsTitle: "Limiti",
        limitsList: [
          "No ecommerce",
          "No WordPress gestito / CMS con gestione continua",
          "No SEO avanzata / crescita organica continuativa",
          "No SMM / pacchetti marketing",
          "No manutenzione continua e supporto “infinito”",
          "Timeline e budget realistici (se vuoi “ieri” costa di più)"
        ]
      },
      proof: {
        teaser: "Un esempio reale: capsule KALTÉ (apparel) — sito + identità + file pronti per stampa/ricamo.",
        list: [
          "3 t-shirt, 1 hoodie, 1 tracksuit: direzione coerente e replicabile",
          "Tech pack essenziale + specifiche stampa/ricamo + note operative",
          "Handoff pulito: file ordinati + istruzioni minime"
        ],
        link: "Vai al case study →"
      }
    },

    scope: {
      title: "Perimetro",
      list: [
        "Siti statici (1–3 pagine)",
        "Identità visiva essenziale",
        "Materiali digitali e stampati",
        "Apparel/merch: solo progetti selezionati"
      ]
    },

    about: {
      title: "About",
      lead: "Costruiamo asset che devono funzionare: chiari, veloci, replicabili.",
      list: [
        "Siti statici 1–3 pagine (HTML/CSS/JS vanilla)",
        "Identità visiva essenziale (regole base, applicazioni)",
        "Handoff pulito: file ordinati + istruzioni minime"
      ],
      focusTitle: "Focus",
      focusList: [
        "Chiarezza: struttura e copy senza fronzoli",
        "Velocità: pagine leggere, hosting semplice",
        "Output: file pronti, replicabili, consegna ordinata"
      ],
      note: "Produzione / coordinamento: solo progetti selezionati e con perimetro definito."
    },

    services: {
      title: "Services",
      open: "Open page →"
    },

    digital: {
      title: "Focus DIGITAL",
      desc: "Siti statici 1–3 pagine. Veloci, chiari, senza gestione continua.",
      note: "No ecommerce. No WordPress gestito.",

      pageTitle: "DIGITAL",
      pageLead: "Siti web statici 1–3 pagine. Veloci, chiari, senza gestione continua.",
      pageNote: "Deploy su GitHub Pages / Netlify / Cloudflare Pages. Toggle Lingua (Es. ITA/ENG) su richiesta.",

      whatWeDoTitle: "Cosa facciamo",
      whatWeDoList: [
        "Struttura essenziale + copy (se hai contenuti, meglio)",
        "Responsive mobile-first",
        "Performance base (pagine leggere, immagini ottimizzate)",
        "Deploy + handoff (repo / file ordinati)",
        "Toggle Lingua (Es. ITA/ENG)",
        "Form contatto semplice (mailto / link WhatsApp)"
      ],

      whatWeDontTitle: "Cosa non facciamo",
      whatWeDontList: [
        "Ecommerce",
        "WordPress gestito / CMS con gestione continua",
        "SEO avanzata / crescita organica continuativa",
        "Manutenzione continua / supporto infinito",
        "Automazioni complesse lato server (stack statico)"
      ],

      toStartTitle: "Per iniziare",
      toStartLead: "Per lavorare veloce e senza giri a vuoto, mandaci questi 4 punti:",
      toStartList: [
        "Obiettivo del sito (cosa deve far succedere)",
        "Cosa fa l’azienda (in 2–3 righe chiare)",
        "Numero pagine + esempi/ref (2–3 link)",
        "Contenuti disponibili: testi, immagini, logo (anche grezzi)"
      ],
      cta: "Contattaci →"
    },

    visual: {
      title: "Focus VISUAL",
      desc: "Logo, mini identity, materiali. Applicazioni su merch quando serve.",
      note: "Niente pacchetti marketing.",

      pageTitle: "VISUAL",
      pageLead: "Logo/restyling, identità essenziale (colori/font/regole base), materiali digitali e stampati, applicazioni su merch.",
      pageNote: "Niente pacchetti marketing. Asset chiari, replicabili, pronti per produzione quando serve.",

      limitsTitle: "Limiti",
      limitsList: [
        "No “brand book” infinito: mini identity essenziale",
        "No rebranding enorme senza perimetro e obiettivo",
        "Produzione: coordinamento completo solo su PREMIUM e progetti selezionati"
      ],
      cta: "Contattaci →"
    },

    merch: {
      title: "MERCH / APPAREL",
      tiers: {
        standard: {
          name: "STANDARD",
          tagline: "Design + Tech pack + Handoff",
          include: [
            "Design (grafica + posizionamenti)",
            "Tech pack essenziale",
            "Specifiche stampa/ricamo + note di produzione",
            "Handoff completo al fornitore"
          ],
          notes: "Il cliente paga e gestisce il fornitore direttamente. KALTÉ non gestisce produzione."
        },
        plus: {
          name: "PLUS",
          tagline: "Più revisioni + supporto fornitori",
          include: [
            "Tutto lo STANDARD",
            "Revisioni estese (fino a 5)",
            "Supporto scelta fornitore",
            "Lista contatti fabbriche (Cina) usate per merch KALTÉ"
          ],
          notes: "Il cliente resta referente unico verso il fornitore. Noi supportiamo, non coordiniamo."
        },
        premium: {
          name: "PREMIUM",
          tagline: "Full Production Coordination",
          include: [
            "KALTÉ referente unico cliente ↔ fornitore",
            "Gestione campioni e allineamento qualità",
            "Supervisione produzione (specifiche + controlli)",
            "Allineamento operativo fino a fine produzione"
          ],
          notes: "Fee variabile: base indicativa ~15% sul costo complessivo (produzione + mockup + tech pack + coordinamento). Solo progetti selezionati."
        }
      }
    },

    case: {
      subtitle: "CASE STUDY",
      title: "KALTÉ Apparel Capsule",
      teaser: "Un esempio reale: come impostiamo un progetto e cosa consegniamo.",

      requestTitle: "Richiesta",
      requestText: "KALTÉ voleva una capsule coerente e riproducibile: 3 t-shirt, 1 hoodie, 1 tracksuit.",

      goalTitle: "Obiettivo",
      goals: [
        "Definire una direzione coerente",
        "Ridurre ambiguità su taglie/placement",
        "File pronti per stampa/ricamo",
        "Handoff pulito al fornitore"
      ],

      workTitle: "Cosa abbiamo fatto",
      workList: [
        "Direzione creativa + regole base",
        "Placement e grafiche (front/back)",
        "Tech pack essenziale",
        "Specifiche stampa/ricamo e note di produzione"
      ],

      deliverTitle: "Consegna (handoff)",
      deliverList: [
        "Pack file ordinato (print/embroidery)",
        "Tech pack + misure e placement",
        "Note operative per fornitore",
        "Checklist finale pre-produzione"
      ],

      galleryTitle: "Preview",
      galleryNote: "Foto campione fornitore (beta / proof of work). Produzione: solo progetti selezionati e con perimetro definito.",

      nextTitle: "Vuoi partire?",
      nextText: "Scrivici: obiettivo, cosa fai, contenuti disponibili e tempistiche. Rispondiamo con perimetro e next step.",
      nextBtn: "Contattaci →"
    },

    work: { title: "Proof" },

    contact: {
      title: "Contatti",
      button: "Contattaci →"
    },

    toStart: {
      title: "Vuoi partire?",
      text: "Per lavorare veloce e senza giri a vuoto, mandami questi 4 punti:",
      list: [
        "Obiettivo del sito (cosa deve far succedere)",
        "Cosa fai (2–3 righe chiare)",
        "Numero pagine + esempi/ref (2–3 link)",
        "Contenuti disponibili + tempistiche"
      ]
    },

    social: {
      title: "Social",
      igLabel: "Instagram:",
      ig: "@instagram",
      mailLabel: "Email:",
      waLabel: "WhatsApp:",
      wa: "wa.me/393318310378",
      note: "Se scrivi, manda: obiettivo + cosa fai + contenuti disponibili + tempistiche."
    }
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      howWeWork: "How we work",
      contact: "Contact",
      social: "Social",
      digital: "Digital",
      visual: "Visual"
    },

    home: {
      hero: {
        kicker: "DIGITAL & VISUAL SOLUTIONS",
        title: "Static sites + essential visual identity."
      },
      what: {
        label: "What we do",
        doTitle: "Output",
        doList: [
          "Static sites (HTML/CSS/JS vanilla) — 1–3 pages",
          "Essential structure & copy (content helps a lot)",
          "Mobile-first responsive",
          "Deploy on GitHub Pages / Netlify / Cloudflare Pages",
          "Language toggle (e.g., IT/EN) — on request",
          "Mini identity: palette, fonts, base rules, consistent applications",
          "Digital + print materials (essential)",
          "Merch/apparel applications when needed"
        ],
        limitsTitle: "Limits",
        limitsList: [
          "No ecommerce",
          "No managed WordPress / CMS with ongoing management",
          "No advanced SEO / ongoing organic growth",
          "No SMM / marketing packages",
          "No ongoing maintenance / infinite support",
          "Realistic timelines & budgets (rush costs more)"
        ]
      },
      proof: {
        teaser: "Real example: KALTÉ capsule (apparel) — site + identity + production-ready files.",
        list: [
          "3 t-shirts, 1 hoodie, 1 tracksuit: consistent direction, repeatable output",
          "Essential tech pack + print/embroidery specs + production notes",
          "Clean handoff: organized files + minimal instructions"
        ],
        link: "Open the case study →"
      }
    },

    scope: {
      title: "Scope",
      list: [
        "Static sites (1–3 pages)",
        "Essential visual identity",
        "Digital + print materials",
        "Apparel/merch: selected projects only"
      ]
    },

    about: {
      title: "About",
      lead: "We build assets that work: clear, fast, repeatable.",
      list: [
        "Static websites 1–3 pages (HTML/CSS/JS vanilla)",
        "Essential visual identity (base rules, applications)",
        "Clean handoff: organized files + minimal instructions"
      ],
      focusTitle: "Focus",
      focusList: [
        "Clarity: structure and copy without fluff",
        "Speed: lightweight pages, simple hosting",
        "Output: production-ready files, clean delivery"
      ],
      note: "Production / coordination: selected projects only, with a defined scope."
    },

    services: {
      title: "Services",
      open: "Open page →"
    },

    digital: {
      title: "DIGITAL Focus",
      desc: "Static websites 1–3 pages. Fast, clear, no ongoing management.",
      note: "No ecommerce. No managed WordPress.",

      pageTitle: "DIGITAL",
      pageLead: "Static websites 1–3 pages. Fast, clear, no ongoing management.",
      pageNote: "Deploy on GitHub Pages / Netlify / Cloudflare Pages. Language toggle (e.g., IT/EN) on request.",

      whatWeDoTitle: "What we do",
      whatWeDoList: [
        "Essential structure + copy (content helps a lot)",
        "Mobile-first responsive",
        "Basic performance (light pages, optimized images)",
        "Deploy + clean handoff (repo / organized files)",
        "Language toggle (e.g., IT/EN)",
        "Simple contact (mailto / WhatsApp link)"
      ],

      whatWeDontTitle: "What we don’t do",
      whatWeDontList: [
        "Ecommerce",
        "Managed WordPress / CMS with ongoing management",
        "Advanced SEO / ongoing organic growth",
        "Ongoing maintenance / infinite support",
        "Complex server-side automations (static stack)"
      ],

      toStartTitle: "To start",
      toStartLead: "To work fast and avoid loops, send these 4 points:",
      toStartList: [
        "Site goal (what must happen)",
        "What your business does (2–3 clear lines)",
        "Pages count + refs (2–3 links)",
        "Available content: text, images, logo (even rough)"
      ],
      cta: "Contact →"
    },

    visual: {
      title: "VISUAL Focus",
      desc: "Logo, mini identity, materials. Merch applications when needed.",
      note: "No marketing packages.",

      pageTitle: "VISUAL",
      pageLead: "Logo/redesign, essential identity (colors/fonts/base rules), digital + print materials, merch applications.",
      pageNote: "No marketing packages. Clear, repeatable assets — production-ready when needed.",

      limitsTitle: "Limits",
      limitsList: [
        "No endless brand books: essential mini identity",
        "No huge rebrands without scope and goal",
        "Production coordination only in PREMIUM and selected projects"
      ],
      cta: "Contact →"
    },

    merch: {
      title: "MERCH / APPAREL",
      tiers: {
        standard: {
          name: "STANDARD",
          tagline: "Design + Tech pack + Handoff",
          include: [
            "Design (graphics + placements)",
            "Essential tech pack",
            "Print/embroidery specs + production notes",
            "Full handoff to supplier"
          ],
          notes: "Client pays and manages supplier directly. KALTÉ does not manage production."
        },
        plus: {
          name: "PLUS",
          tagline: "More revisions + supplier support",
          include: [
            "Everything in STANDARD",
            "Extended revisions (up to 5)",
            "Supplier selection support",
            "Supplier contacts (China) used for KALTÉ merch"
          ],
          notes: "Client remains the main contact with supplier. We support — we don’t coordinate."
        },
        premium: {
          name: "PREMIUM",
          tagline: "Full Production Coordination",
          include: [
            "KALTÉ as single point of contact client ↔ supplier",
            "Sampling & quality alignment",
            "Production supervision (specs + checks)",
            "Operational alignment until production completion"
          ],
          notes: "Variable fee: indicative base ~15% of total cost (production + mockup + tech pack + coordination). Selected projects only."
        }
      }
    },

    case: {
      subtitle: "CASE STUDY",
      title: "KALTÉ Apparel Capsule",
      teaser: "A real example: how we set projects and what we deliver.",

      requestTitle: "Request",
      requestText: "KALTÉ needed a consistent, reproducible capsule: 3 t-shirts, 1 hoodie, 1 tracksuit.",

      goalTitle: "Goal",
      goals: [
        "Set a consistent direction",
        "Remove ambiguity on sizing/placements",
        "Print/embroidery-ready files",
        "Clean supplier handoff"
      ],

      workTitle: "What we did",
      workList: [
        "Creative direction + base rules",
        "Placements and graphics (front/back)",
        "Essential tech pack",
        "Print/embroidery specs and production notes"
      ],

      deliverTitle: "Deliverables (handoff)",
      deliverList: [
        "Organized file pack (print/embroidery)",
        "Tech pack + measurements & placements",
        "Supplier operational notes",
        "Final pre-production checklist"
      ],

      galleryTitle: "Preview",
      galleryNote: "Supplier sample photos (beta / proof of work). Production: selected projects only, with defined scope.",

      nextTitle: "Want to start?",
      nextText: "Send: goal, what you do, available content, and timeline. We’ll reply with scope and next steps.",
      nextBtn: "Contact →"
    },

    work: { title: "Proof" },

    contact: {
      title: "Contact",
      button: "Contact →"
    },

    toStart: {
      title: "Want to start?",
      text: "To work fast and avoid loops, send these 4 points:",
      list: [
        "Site goal (what must happen)",
        "What you do (2–3 clear lines)",
        "Pages count + refs (2–3 links)",
        "Available content + timeline"
      ]
    },

    social: {
      title: "Social",
      igLabel: "Instagram:",
      ig: "@instagram",
      mailLabel: "Email:",
      waLabel: "WhatsApp:",
      wa: "wa.me/393318310378",
      note: "When you message, send: goal + what you do + available content + timeline."
    }
  }
};

/* ---------- utils ---------- */
function deepGet(obj, path) {
  return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
}

function getInitialLang() {
  const saved = localStorage.getItem(LS_KEY);
  if (saved === "it" || saved === "en") return saved;
  return DEFAULT_LANG;
}

function setLanguage(lang) {
  localStorage.setItem(LS_KEY, lang);
  applyI18n(lang);
  setLangButtons(lang);
}

function setLangButtons(lang) {
  document.querySelectorAll("[data-set-lang]").forEach(btn => {
    const bLang = btn.getAttribute("data-set-lang");
    btn.classList.toggle("is-active", bLang === lang);
    btn.setAttribute("aria-pressed", bLang === lang ? "true" : "false");
  });
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N[DEFAULT_LANG];

  // strings
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = deepGet(dict, key);
    if (typeof value === "string") el.textContent = value;
  });

  // lists
  document.querySelectorAll("[data-i18n-list]").forEach(el => {
    const key = el.getAttribute("data-i18n-list");
    const value = deepGet(dict, key);
    if (!Array.isArray(value)) return;

    el.innerHTML = "";
    value.forEach(item => {
      const li = document.createElement("li");
      li.textContent = String(item);
      el.appendChild(li);
    });
  });

  // lang attr
  document.documentElement.setAttribute("lang", lang);
}

/* ---------- language switch ---------- */
function bindLangSwitch() {
  document.querySelectorAll("[data-set-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-set-lang");
      if (!lang) return;
      setLanguage(lang);
    });
  });
}

/* ---------- simple carousel for tiers (VISUAL) ---------- */
function initTierCarousel() {
  const root = document.querySelector("[data-tier-carousel]");
  if (!root) return;

  const panels = Array.from(root.querySelectorAll("[data-tier-panel]"));
  const prev = root.querySelector("[data-tier-prev]");
  const next = root.querySelector("[data-tier-next]");
  if (!panels.length) return;

  let idx = 0;

  function render() {
    panels.forEach((p, i) => {
      p.style.display = i === idx ? "block" : "none";
    });
    if (prev) prev.disabled = idx === 0;
    if (next) next.disabled = idx === panels.length - 1;
  }

  if (prev) prev.addEventListener("click", () => {
    idx = Math.max(0, idx - 1);
    render();
  });

  if (next) next.addEventListener("click", () => {
    idx = Math.min(panels.length - 1, idx + 1);
    render();
  });

  render();
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  bindLangSwitch();
  const lang = getInitialLang();
  setLangButtons(lang);
  applyI18n(lang);
  initTierCarousel();
});
