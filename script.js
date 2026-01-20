/* =========================================================
   KALTÉ — script.js
   - Vanilla i18n (data-i18n / data-i18n-list)
   - localStorage key: "kalte_lang"
   ========================================================= */

const STORAGE_KEY = "kalte_lang";

const I18N = {
  it: {
    brand: {
      name: "KALTÉ",
      tagline: "Digital & Visual Solutions."
    },
    ui: {
      openPage: "Open page →"
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Servizi",
      work: "Selected work",
      contact: "Contatti",
      social: "Social",
      digital: "Digital",
      visual: "Visual"
    },
    contact: {
      title: "CONTACT",
      emailLabel: "Email —",
      whatsappLabel: "WhatsApp —"
    },
    home: {
      hero: {
        kicker: "DIGITAL & VISUAL SOLUTIONS",
        title: "Siti statici + identità visiva essenziale.",
        subtitle: "Se cerchi marketing, SEO avanzata o ecommerce: non è il servizio giusto.",
        cta: { digital: "VAI AI DIGITAL", visual: "VAI AI VISUAL" },
        micro: "Static sites. Clean identity. No unnecessary complexity."
      },
      filter: {
        title: "FILTRO RAPIDO",
        list: [
          "No ecommerce",
          "No SMM",
          "No SEO avanzata",
          "No gestione continua"
        ]
      },
      about: {
        title: "ABOUT",
        lead: "Costruiamo asset che devono funzionare: chiari, veloci, replicabili.",
        list: [
          "Siti statici 1–3 pagine (HTML/CSS/JS vanilla)",
          "Identità visiva essenziale (regole base, applicazioni)",
          "Handoff pulito: file ordinati + istruzioni minime"
        ]
      },
      services: {
        title: "SERVICES",
        digital: {
          title: "Focus DIGITAL",
          desc: "Siti statici 1–3 pagine. Veloci, chiari, senza gestione continua.",
          note: "No ecommerce. No WordPress gestito."
        },
        visual: {
          title: "Focus VISUAL",
          desc: "Logo, mini identity, materiali. Applicazioni su merch quando serve.",
          note: "No pacchetti marketing."
        }
      },
      work: {
        title: "SELECTED WORK",
        subtitle: "Proof of work su apparel/merch. Produzione non standard: solo progetti selezionati.",
        note: "Produzione non è un servizio standard. Premium solo su progetti selezionati."
      },
      social: {
        title: "SOCIAL",
        instagram: "Instagram"
      }
    },
    digital: {
      page: {
        title: "DIGITAL",
        subtitle: "Siti web statici 1–3 pagine. Veloci, chiari, senza gestione continua."
      },
      section: {
        do: {
          title: "Cosa facciamo",
          list: [
            "Sito statico 1–3 pagine (HTML/CSS/JS)",
            "Struttura e copy essenziale (se hai i contenuti, meglio)",
            "Responsive mobile-first",
            "Deploy su GitHub Pages / Netlify / Cloudflare Pages",
            "Toggle lingua IT/EN (se richiesto)"
          ]
        },
        not: {
          title: "Cosa NON facciamo",
          list: [
            "Ecommerce",
            "WordPress gestito / CMS con gestione continua",
            "SEO avanzata / crescita organica",
            "Manutenzione continuativa e supporto infinito"
          ]
        },
        fit: {
          title: "Quando ha senso",
          list: [
            "Attività locali che vogliono essere trovate e capite",
            "Creativi / professionisti che devono presentarsi bene",
            "Piccoli brand che vogliono una vetrina pulita (non uno shop)"
          ]
        },
        start: {
          title: "Per iniziare",
          lead: "Per lavorare veloce e senza giri a vuoto, mandami questi 4 punti:",
          list: [
            "Obiettivo del sito (1 frase, senza poesia)",
            "Numero pagine + esempi/refs (2–3 link)",
            "Contenuti disponibili: testi, immagini, logo (anche grezzi)",
            "Tempistiche e budget realistici"
          ],
          ctaContact: "Contatti",
          ctaWhatsapp: "WhatsApp"
        }
      }
    },
    visual: {
      page: {
        title: "VISUAL",
        subtitle: "Identità essenziale: logo, regole base, applicazioni coerenti. Niente pacchetti “marketing”."
      },
      section: {
        core: {
          title: "Cosa facciamo",
          list: [
            "Logo / restyling",
            "Identità visiva essenziale (colori, font, regole base)",
            "Materiali digitali e stampati",
            "Applicazioni su merch / vestiario"
          ]
        },
        constraints: {
          title: "Limiti chiari",
          list: [
            "Niente pacchetti SMM / gestione social",
            "Niente SEO avanzata / piani editoriali",
            "Scope chiaro, niente richieste infinite"
          ]
        }
      },
      merch: {
        title: "MERCH / APPAREL",
        subtitle: "Applichiamo l’identità su vestiario: dal concept alle specifiche tecniche. Produzione gestita in due modalità.",
        note: "Produzione non è un servizio standard. Premium solo su progetti selezionati.",
        standard: {
          title: "STANDARD",
          tagline: "Design + Tech pack + Handoff",
          includes: {
            title: "Include",
            list: [
              "Design (grafica + posizionamenti)",
              "Tech pack",
              "Specifiche stampa/ricamo",
              "Handoff completo al fornitore"
            ]
          },
          notes: {
            title: "Note",
            list: [
              "Il cliente paga il fornitore direttamente",
              "KALTÉ non gestisce pagamenti/produzione in questo livello"
            ]
          }
        },
        premium: {
          title: "PREMIUM",
          tagline: "Full Production Coordination",
          includes: {
            title: "Include",
            list: [
              "KALTÉ unico referente cliente ↔ fornitore",
              "Gestione campioni (max 2 revisioni)",
              "Supervisione produzione (specifiche + qualità)",
              "Allineamento operativo fino a fine produzione"
            ]
          },
          fee: {
            title: "Fee",
            text: "Fee +30–40% sul costo di produzione (in base a complessità e rischio)."
          },
          limits: {
            title: "Limiti",
            list: [
              "Solo progetti selezionati",
              "Scope chiuso: niente richieste infinite",
              "Se budget/tempi non reggono campionatura e qualità: stop"
            ]
          }
        }
      }
    }
  },

  en: {
    brand: {
      name: "KALTÉ",
      tagline: "Digital & Visual Solutions."
    },
    ui: {
      openPage: "Open page →"
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      work: "Selected work",
      contact: "Contact",
      social: "Social",
      digital: "Digital",
      visual: "Visual"
    },
    contact: {
      title: "CONTACT",
      emailLabel: "Email —",
      whatsappLabel: "WhatsApp —"
    },
    home: {
      hero: {
        kicker: "DIGITAL & VISUAL SOLUTIONS",
        title: "Static sites + essential visual identity.",
        subtitle: "If you need marketing, advanced SEO, or ecommerce: this is not the right service.",
        cta: { digital: "GO TO DIGITAL", visual: "GO TO VISUAL" },
        micro: "Static sites. Clean identity. No unnecessary complexity."
      },
      filter: {
        title: "QUICK FILTER",
        list: [
          "No ecommerce",
          "No SMM",
          "No advanced SEO",
          "No ongoing management"
        ]
      },
      about: {
        title: "ABOUT",
        lead: "We build assets that must work: clear, fast, repeatable.",
        list: [
          "Static websites 1–3 pages (HTML/CSS/JS vanilla)",
          "Essential visual identity (rules, basic applications)",
          "Clean handoff: organized files + minimal instructions"
        ]
      },
      services: {
        title: "SERVICES",
        digital: {
          title: "Focus DIGITAL",
          desc: "Static sites 1–3 pages. Fast, clear, no ongoing management.",
          note: "No ecommerce. No managed WordPress."
        },
        visual: {
          title: "Focus VISUAL",
          desc: "Logo, mini identity, materials. Merch applications when needed.",
          note: "No marketing packages."
        }
      },
      work: {
        title: "SELECTED WORK",
        subtitle: "Proof of work on apparel/merch. Non-standard production: selected projects only.",
        note: "Production is not a standard service. Premium only for selected projects."
      },
      social: {
        title: "SOCIAL",
        instagram: "Instagram"
      }
    },
    digital: {
      page: {
        title: "DIGITAL",
        subtitle: "Static websites 1–3 pages. Fast, clear, no ongoing management."
      },
      section: {
        do: {
          title: "What we do",
          list: [
            "Static website 1–3 pages (HTML/CSS/JS)",
            "Essential structure + copy (better if you already have content)",
            "Mobile-first responsive",
            "Deploy on GitHub Pages / Netlify / Cloudflare Pages",
            "IT/EN language toggle (if requested)"
          ]
        },
        not: {
          title: "What we don't do",
          list: [
            "Ecommerce",
            "Managed WordPress / CMS with ongoing maintenance",
            "Advanced SEO / organic growth plans",
            "Continuous maintenance and endless support"
          ]
        },
        fit: {
          title: "When it makes sense",
          list: [
            "Local businesses that need to be found and understood",
            "Creatives / professionals who must present well",
            "Small brands that need a clean showcase (not a shop)"
          ]
        },
        start: {
          title: "To start",
          lead: "To work fast and avoid back-and-forth, send these 4 points:",
          list: [
            "Website goal (one sentence, no poetry)",
            "Number of pages + references (2–3 links)",
            "Available content: text, images, logo (even rough)",
            "Timeline and realistic budget"
          ],
          ctaContact: "Contact",
          ctaWhatsapp: "WhatsApp"
        }
      }
    },
    visual: {
      page: {
        title: "VISUAL",
        subtitle: "Essential identity: logo, basic rules, consistent applications. No “marketing” packages."
      },
      section: {
        core: {
          title: "What we do",
          list: [
            "Logo / redesign",
            "Essential visual identity (colors, fonts, basic rules)",
            "Digital + print materials",
            "Merch / apparel applications"
          ]
        },
        constraints: {
          title: "Clear limits",
          list: [
            "No SMM / social management",
            "No advanced SEO / content calendars",
            "Defined scope, no endless requests"
          ]
        }
      },
      merch: {
        title: "MERCH / APPAREL",
        subtitle: "We apply identity to apparel: from concept to technical specs. Production handled in two modes.",
        note: "Production is not a standard service. Premium only for selected projects.",
        standard: {
          title: "STANDARD",
          tagline: "Design + Tech pack + Handoff",
          includes: {
            title: "Includes",
            list: [
              "Design (graphics + placements)",
              "Tech pack",
              "Print/embroidery specifications",
              "Full handoff to the supplier"
            ]
          },
          notes: {
            title: "Notes",
            list: [
              "Client pays the supplier directly",
              "KALTÉ does not manage production at this level"
            ]
          }
        },
        premium: {
          title: "PREMIUM",
          tagline: "Full Production Coordination",
          includes: {
            title: "Includes",
            list: [
              "KALTÉ as the single point of contact client ↔ supplier",
              "Sampling management (max 2 revisions)",
              "Production supervision (specs + quality)",
              "Operational alignment until production ends"
            ]
          },
          fee: {
            title: "Fee",
            text: "Fee +30–40% on production cost (based on complexity and risk)."
          },
          limits: {
            title: "Limits",
            list: [
              "Selected projects only",
              "Closed scope: no endless requests",
              "If budget/timeline can't support sampling and quality: stop"
            ]
          }
        }
      }
    }
  }
};

/* ---------- helpers ---------- */
function getByPath(obj, path) {
  return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
}

function setActiveLangUI(lang) {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.it;

  // Update <html lang="">
  document.documentElement.setAttribute("lang", lang);

  // Single strings
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
      li.textContent = String(item);
      el.appendChild(li);
    });
  });

  setActiveLangUI(lang);
}

function initLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const initial = stored === "en" || stored === "it" ? stored : "it";
  applyI18n(initial);

  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-set-lang");
      if (lang !== "it" && lang !== "en") return;
      localStorage.setItem(STORAGE_KEY, lang);
      applyI18n(lang);
    });
  });
}

document.addEventListener("DOMContentLoaded", initLang);
