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
    home: {
      hero: {
        kicker: "Digital & Visual Solutions",
        title: "Siti statici + identità visiva essenziale.",
        sub: "Progetti puliti, veloci e coerenti. Nessuna gestione continua. Niente fumo.",
        micro: "Se cerchi marketing, social o SEO “spinta”, non è questo il posto."
      },
      services: {
        title: "Cosa facciamo",
        link: "Vedi dettagli →",
        digital: {
          title: "Digital",
          desc: "Siti statici (1–3 pagine) in HTML/CSS/JS: veloci, chiari, senza dipendenze."
        },
        visual: {
          title: "Visual",
          desc: "Logo/restyling e identità essenziale: regole chiare per far sembrare tutto “dello stesso brand”."
        },
        limitsTitle: "Limiti (chiari)",
        limits: [
          "NO SMM (social media management).",
          "NO SEO avanzata / SEO “aggressiva”.",
          "NO e-commerce / checkout / pagamenti.",
          "NO WordPress gestito / manutenzione continua."
        ]
      },
      perimeter: {
        title: "Perimetro",
        forTitle: "Perfetto se",
        forList: [
          "Vuoi un sito essenziale che spieghi bene cosa fai.",
          "Vuoi performance e chiarezza, senza piattaforme pesanti.",
          "Vuoi un output finito e facile da hostare (Pages / Netlify / Cloudflare)."
        ],
        notForTitle: "Non fa per te se",
        notForList: [
          "Stai cercando una “agenzia marketing” o un team SMM.",
          "Vuoi SEO avanzata, campagne e ottimizzazioni continue.",
          "Vuoi e-commerce o un CMS da aggiornare ogni settimana."
        ],
        ctaCase: "Vedi come lavoriamo",
        ctaContact: "Contattaci"
      },
      proof: {
        title: "Proof",
        line1: "Un progetto reale, non “mock”.",
        line2: "Capsule apparel KALTÉ: 3 t-shirt, 1 hoodie, 1 tracksuit.",
        line3: "Output: identità, assets, specifiche e handoff pronto produzione.",
        cta: "Apri case study"
      },
      contact: {
        title: "Contatti",
        lead: "Scrivici solo se hai un obiettivo chiaro e un perimetro realistico.",
        mailLabel: "Mail",
        phoneLabel: "Telefono",
        igLabel: "IG",
        note: "Niente “brief” infiniti: 10 righe chiare battono 3 call."
      }
    },
    digital: {
      kicker: "Digital",
      title: "Siti statici 1–3 pagine. Fine.",
      lead: "HTML/CSS/JS vanilla: caricamento rapido, struttura chiara, consegna semplice. Nessuna piattaforma da “gestire”.",
      micro: "Se vuoi e-commerce, WordPress “gestito”, SEO avanzata o manutenzione continua: no.",
      what: {
        title: "Cosa facciamo",
        list: [
          "Sito statico 1–3 pagine (home + pagine servizi + contatti).",
          "Struttura chiara (sezioni, CTA, perimetro e limiti).",
          "UI pulita e leggibile, pensata per conversione “consapevole”.",
          "Toggle lingua (es. ITA/ENG).",
          "Consegna file pronta per GitHub Pages / Netlify / Cloudflare Pages."
        ],
        note: "Hosting consigliato: GitHub Pages / Netlify / Cloudflare Pages. Consegna pulita, senza lock-in."
      },
      not: {
        title: "Cosa NON facciamo",
        list: [
          "E-commerce, pagamenti, checkout, cataloghi dinamici.",
          "WordPress gestito o qualsiasi CMS “da mantenere”.",
          "SEO avanzata, audit continui, link-building, campagne.",
          "Manutenzione continua: preferiamo consegne finite e pulite."
        ]
      },
      start: {
        title: "Per iniziare",
        lead: "Ci servono poche cose, ma scritte bene.",
        list: [
          "Che azienda sei e cosa fai (in 2–4 frasi).",
          "Obiettivo del sito (es. contatti, presentazione, lead qualificati).",
          "Servizi/prodotti principali (priorità e cosa escludere).",
          "Asset disponibili (logo, palette se esiste, foto, testi anche grezzi).",
          "Esempi di siti che ti piacciono (2–3 link) e perché."
        ],
        cta: "Contatti",
        cta2: "Vedi case study"
      }
    },
    visual: {
      kicker: "Visual",
      title: "Identità essenziale, applicata bene.",
      lead: "Logo/restyling, palette, font e regole base: il minimo indispensabile per avere coerenza ovunque.",
      what: {
        title: "Cosa facciamo",
        list: [
          "Logo / restyling (pulito, leggibile, replicabile).",
          "Identità essenziale: colori, font, regole base d’uso.",
          "Materiali digitali e stampati (template e applicazioni).",
          "Applicazioni su merch (stampa/ricamo) con specifiche chiare."
        ]
      },
      merch: {
        title: "Merch / Apparel",
        carouselTitle: "Livelli",
        hint: "Scorri i livelli: Standard / Plus / Premium.",
        selective: "Produzione/coordinamento completo solo su progetti selezionati.",
        cta: "Contatti",
        cta2: "Vedi case study",
        tiers: [
          {
            kicker: "STANDARD",
            title: "Design + tech pack + handoff",
            list: [
              "Design (grafica/posizionamenti).",
              "Tech pack + specifiche (stampa/ricamo/materiali).",
              "Handoff al fornitore: il cliente paga il fornitore.",
              "Output pronto per produrre senza interpretazioni."
            ],
            note: "Il cliente resta referente unico con la fabbrica."
          },
          {
            kicker: "PLUS",
            title: "Standard + revisioni + supporto fornitore",
            list: [
              "Tutto lo Standard.",
              "Revisioni fino a 5.",
              "Supporto nella scelta fornitore.",
              "Lista contatti fabbriche (Cina) usate per merch KALTÉ.",
              "Il cliente resta referente con la fabbrica."
            ],
            note: "Più controllo sul risultato, senza delega totale."
          },
          {
            kicker: "PREMIUM",
            title: "Full production coordination (progetti selezionati)",
            list: [
              "KALTÉ referente unico: gestione comunicazioni e check.",
              "Coordinamento produzione end-to-end.",
              "Fee indicativa base ~15% (variabile per complessità/tempo/costi).",
              "Disponibilità limitata: solo progetti selezionati."
            ],
            note: "Qui paghi tempo e responsabilità: non è per tutti."
          }
        ]
      }
    },
    case: {
      kicker: "Come lavoriamo",
      title: "Case study: KALTÉ apparel capsule",
      lead: "Progetto reale: 3 t-shirt, 1 hoodie, 1 tracksuit. Obiettivo: identità coerente + handoff pronto produzione.",
      request: {
        title: "Richiesta",
        list: [
          "Capsule apparel con identità riconoscibile.",
          "Asset riusabili per comunicazione e produzione.",
          "Specifiche chiare per stampa/ricamo e resa finale."
        ]
      },
      objective: {
        title: "Obiettivo",
        list: [
          "Coerenza visiva su capi diversi.",
          "Ridurre ambiguità in produzione (tech + specs).",
          "Output “handoff”: consegna pronta per fabbrica."
        ]
      },
      work: {
        title: "Cosa abbiamo fatto",
        list: [
          "Definizione concept e coerenza grafica.",
          "Impostazione regole visive (base identità).",
          "Mockup e scelte applicative (posizionamenti, dimensioni).",
          "Specifiche tecniche per stampa/ricamo e file finali."
        ],
        note: "Coordinamento produzione completo solo su progetti selezionati."
      },
      handoff: {
        title: "Cosa consegniamo (handoff)",
        list: [
          "File finali (stampa/ricamo) e varianti necessarie.",
          "Tech pack con misure, posizionamenti e note.",
          "Specifiche materiali/resa e checklist produzione.",
          "Struttura chiara per passaggio a fornitore."
        ]
      },
      gallery: {
        title: "Gallery tracksuit"
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
    home: {
      hero: {
        kicker: "Digital & Visual Solutions",
        title: "Static sites + essential visual identity.",
        sub: "Clean, fast, coherent work. No ongoing management. No fluff.",
        micro: "If you want marketing, social management or “aggressive” SEO, this isn’t it."
      },
      services: {
        title: "What we do",
        link: "See details →",
        digital: {
          title: "Digital",
          desc: "Static sites (1–3 pages) in vanilla HTML/CSS/JS: fast, clear, dependency-free."
        },
        visual: {
          title: "Visual",
          desc: "Logo/restyling and essential identity: simple rules to keep everything consistent."
        },
        limitsTitle: "Clear limits",
        limits: [
          "NO social media management.",
          "NO advanced / aggressive SEO.",
          "NO e-commerce / checkout / payments.",
          "NO managed WordPress / continuous maintenance."
        ]
      },
      perimeter: {
        title: "Scope",
        forTitle: "Perfect if",
        forList: [
          "You want a minimal site that explains your business clearly.",
          "You care about performance and clarity, not heavy platforms.",
          "You want a finished deliverable you can host easily (Pages / Netlify / Cloudflare)."
        ],
        notForTitle: "Not for you if",
        notForList: [
          "You’re looking for a marketing agency or SMM team.",
          "You want advanced SEO, ads and ongoing optimizations.",
          "You want e-commerce or a CMS you update every week."
        ],
        ctaCase: "See how we work",
        ctaContact: "Contact us"
      },
      proof: {
        title: "Proof",
        line1: "A real project, not a mock.",
        line2: "KALTÉ apparel capsule: 3 tees, 1 hoodie, 1 tracksuit.",
        line3: "Output: identity, assets, specs and production-ready handoff.",
        cta: "Open case study"
      },
      contact: {
        title: "Contact",
        lead: "Write only if you have a clear goal and a realistic scope.",
        mailLabel: "Email",
        phoneLabel: "Phone",
        igLabel: "IG",
        note: "No endless briefs: 10 clear lines beat 3 calls."
      }
    },
    digital: {
      kicker: "Digital",
      title: "Static sites, 1–3 pages. Done.",
      lead: "Vanilla HTML/CSS/JS: fast load, clear structure, simple delivery. No platform to “manage”.",
      micro: "If you want e-commerce, managed WordPress, advanced SEO or ongoing maintenance: no.",
      what: {
        title: "What we do",
        list: [
          "1–3 page static site (home + service pages + contact).",
          "Clear structure (sections, CTAs, scope and limits).",
          "Clean UI focused on conscious conversion.",
          "Language toggle (e.g., IT/EN).",
          "Delivery ready for GitHub Pages / Netlify / Cloudflare Pages."
        ],
        note: "Recommended hosting: GitHub Pages / Netlify / Cloudflare Pages. Clean delivery, no lock-in."
      },
      not: {
        title: "What we don’t do",
        list: [
          "E-commerce, payments, checkout, dynamic catalogs.",
          "Managed WordPress or any CMS you must keep maintaining.",
          "Advanced SEO, ongoing audits, link-building, campaigns.",
          "Continuous maintenance: we deliver finished, clean builds."
        ]
      },
      start: {
        title: "To start",
        lead: "We need a few things — written well.",
        list: [
          "Who you are and what you do (2–4 sentences).",
          "Site goal (e.g., contacts, presentation, qualified leads).",
          "Main services/products (priorities + what to exclude).",
          "Available assets (logo, palette if any, photos, even rough copy).",
          "2–3 reference sites you like and why."
        ],
        cta: "Contact",
        cta2: "See case study"
      }
    },
    visual: {
      kicker: "Visual",
      title: "Essential identity, applied properly.",
      lead: "Logo/restyling, palette, fonts and basic rules: the minimum needed to stay consistent everywhere.",
      what: {
        title: "What we do",
        list: [
          "Logo / restyling (clean, readable, reproducible).",
          "Essential identity: colors, fonts, basic usage rules.",
          "Digital + print materials (templates and applications).",
          "Merch applications (print/embroidery) with clear specs."
        ]
      },
      merch: {
        title: "Merch / Apparel",
        carouselTitle: "Tiers",
        hint: "Scroll tiers: Standard / Plus / Premium.",
        selective: "Full production coordination only for selected projects.",
        cta: "Contact",
        cta2: "See case study",
        tiers: [
          {
            kicker: "STANDARD",
            title: "Design + tech pack + handoff",
            list: [
              "Design (graphics/placements).",
              "Tech pack + specs (print/embroidery/materials).",
              "Handoff to supplier: client pays supplier.",
              "Production-ready output, no interpretation needed."
            ],
            note: "Client remains the direct supplier contact."
          },
          {
            kicker: "PLUS",
            title: "Standard + revisions + supplier support",
            list: [
              "Everything in Standard.",
              "Up to 5 revision rounds.",
              "Support choosing the supplier.",
              "Factory contact list (China) used for KALTÉ merch.",
              "Client remains the supplier contact."
            ],
            note: "More control without full delegation."
          },
          {
            kicker: "PREMIUM",
            title: "Full production coordination (selected projects)",
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
    },
    case: {
      kicker: "How we work",
      title: "Case study: KALTÉ apparel capsule",
      lead: "Real project: 3 tees, 1 hoodie, 1 tracksuit. Goal: coherent identity + production-ready handoff.",
      request: {
        title: "Request",
        list: [
          "An apparel capsule with a recognizable identity.",
          "Reusable assets for communication and production.",
          "Clear print/embroidery specs for predictable results."
        ]
      },
      objective: {
        title: "Goal",
        list: [
          "Visual coherence across different garments.",
          "Reduce production ambiguity (tech + specs).",
          "Handoff delivery: ready for factory."
        ]
      },
      work: {
        title: "What we did",
        list: [
          "Concept definition and graphic coherence.",
          "Basic identity rules (essential system).",
          "Mockups and application choices (placements, sizes).",
          "Technical specs for print/embroidery and final files."
        ],
        note: "Full production coordination only for selected projects."
      },
      handoff: {
        title: "What we deliver (handoff)",
        list: [
          "Final files (print/embroidery) and required variants.",
          "Tech pack with measurements, placements and notes.",
          "Materials/result specs and production checklist.",
          "Clear structure for supplier handoff."
        ]
      },
      gallery: {
        title: "Tracksuit gallery"
      }
    }
  }
};

function getByPath(obj, path) {
  return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N[DEFAULT_LANG];

  // Simple strings
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = getByPath(dict, key);
    if (typeof val === "string") el.textContent = val;
  });

  // Lists
  document.querySelectorAll("[data-i18n-list]").forEach((el) => {
    const key = el.getAttribute("data-i18n-list");
    const arr = getByPath(dict, key);
    if (!Array.isArray(arr)) return;

    el.innerHTML = "";
    arr.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      el.appendChild(li);
    });
  });

  // html lang attribute
  document.documentElement.setAttribute("lang", lang);

  // Update lang buttons UI
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  // Update carousel content (if present)
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

// ----- Tier carousel (Visual page) -----
let tierIndex = 0;

function renderTier(container, tier) {
  const kicker = container.querySelector("[data-carousel-kicker]");
  const title = container.querySelector("[data-carousel-title]");
  const list = container.querySelector("[data-carousel-list]");
  const note = container.querySelector("[data-carousel-note]");

  if (kicker) kicker.textContent = tier.kicker;
  if (title) title.textContent = tier.title;

  if (list) {
    list.innerHTML = "";
    (tier.list || []).forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      list.appendChild(li);
    });
  }

  if (note) note.textContent = tier.note || "";
}

function initOrUpdateTierCarousel(lang) {
  const container = document.querySelector('[data-carousel="tiers"]');
  if (!container) return;

  const dict = I18N[lang] || I18N[DEFAULT_LANG];
  const tiers = (dict.visual && dict.visual.merch && Array.isArray(dict.visual.merch.tiers))
    ? dict.visual.merch.tiers
    : [];

  if (!tiers.length) return;

  // clamp index
  if (tierIndex < 0) tierIndex = 0;
  if (tierIndex > tiers.length - 1) tierIndex = tiers.length - 1;

  renderTier(container, tiers[tierIndex]);

  const prev = container.querySelector("[data-carousel-prev]");
  const next = container.querySelector("[data-carousel-next]");

  // bind once
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

// ----- Boot -----
document.addEventListener("DOMContentLoaded", () => {
  // Bind lang buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLang(lang);
    });
  });

  // Initial lang
  applyI18n(getLang());
});
