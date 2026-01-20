/* KALTÉ — script.js
   - Vanilla i18n IT/EN
   - data-i18n for single strings
   - data-i18n-list for arrays (UL/OL or any container -> generates <li>)
   - localStorage key: "kalte_lang"
*/

(() => {
  const LS_KEY = "kalte_lang";
  const DEFAULT_LANG = "it";

  // =========================
  // I18N DICTIONARY (IT / EN)
  // =========================
  const I18N = {
    it: {
      // ---- GLOBAL / NAV ----
      "brand.name": "KALTÉ",
      "nav.home": "Home",
      "nav.digital": "Digital",
      "nav.visual": "Visual",
      "nav.work": "Work",
      "nav.contact": "Contatti",
      "nav.lang.it": "IT",
      "nav.lang.en": "EN",

      // ---- HOME ----
      "home.hero.kicker": "Digital & Visual Solutions",
      "home.hero.title": "Siti statici e identità visive essenziali.",
      "home.hero.subtitle":
        "Progetti puliti, veloci, senza fronzoli. Se cerchi marketing, SEO avanzata o ecommerce: non è qui.",
      "home.hero.cta.primary": "Vedi servizi",
      "home.hero.cta.secondary": "Contatti",

      "home.filter.note.title": "Filtro",
      "home.filter.note.text":
        "Accettiamo solo richieste consapevoli. Niente ecommerce, niente gestione continua, niente “facciamo un po’ di tutto”.",

      // ---- HOME: SELECTED WORK (NEW) ----
      "home.selectedWork.title": "SELECTED WORK",
      "home.selectedWork.subtitle":
        "Prove reali di applicazione su vestiario / merch. Non è produzione standard: solo progetti selezionati.",
      "home.selectedWork.note":
        "Nota: supporto produzione solo su progetti selezionati (vedi PREMIUM).",

      // Optional captions (use only if your HTML has them)
      "home.selectedWork.item1.title": "Capsule / Tee",
      "home.selectedWork.item1.desc": "Grafica + specifiche stampa",
      "home.selectedWork.item2.title": "Hoodie / Embroidery",
      "home.selectedWork.item2.desc": "Ricamo + posizionamento",
      "home.selectedWork.item3.title": "Labeling",
      "home.selectedWork.item3.desc": "Etichette + regole base",

      // ---- DIGITAL PAGE ----
      "digital.page.title": "DIGITAL",
      "digital.page.subtitle":
        "Siti statici HTML/CSS/JS. Veloci. Chiari. Zero manutenzione continua.",
      "digital.section.what.title": "Cosa facciamo",
      "digital.section.what.lead":
        "Siti 1–3 pagine progettati per presentare bene, subito, senza dipendenze.",
      "digital.section.what.list": [
        "Sito statico 1–3 pagine (HTML/CSS/JS vanilla)",
        "Copy essenziale e struttura pulita",
        "Responsive (mobile-first)",
        "Deploy su GitHub Pages / Netlify / Cloudflare Pages",
        "Toggle lingua IT/EN via JS (se richiesto)"
      ],
      "digital.section.not.title": "Cosa NON facciamo",
      "digital.section.not.list": [
        "Ecommerce",
        "WordPress gestito / CMS con gestione continua",
        "SEO avanzata / crescita organica",
        "Manutenzione continuativa e “supporto infinito”"
      ],
      "digital.section.deliverables.title": "Deliverables",
      "digital.section.deliverables.list": [
        "Repository con codice pulito",
        "Build deployata (link live)",
        "Assets organizzati",
        "Istruzioni minime per handoff"
      ],
      "digital.section.cta.title": "Hai una richiesta concreta?",
      "digital.section.cta.text":
        "Scrivi solo se sai cosa vuoi ottenere e hai contenuti minimi pronti (testi, immagini, riferimenti).",
      "digital.section.cta.button": "Contatti",

      // ---- VISUAL PAGE ----
      "visual.page.title": "VISUAL",
      "visual.page.subtitle":
        "Identità essenziale: logo, regole base, applicazioni coerenti. Niente pacchetti “marketing”.",
      "visual.section.core.title": "Cosa facciamo",
      "visual.section.core.list": [
        "Logo / restyling",
        "Identità visiva (colori, font, regole base)",
        "Materiali digitali e stampati",
        "Applicazioni su merch / vestiario"
      ],
      "visual.section.constraints.title": "Limiti chiari",
      "visual.section.constraints.list": [
        "Non facciamo SMM",
        "Non facciamo SEO avanzata",
        "Non facciamo ecommerce"
      ],

      // ---- VISUAL: MERCH / APPAREL (NEW) ----
      "visual.merch.title": "MERCH / APPAREL",
      "visual.merch.subtitle":
        "Due livelli. Se vuoi produzione “chiavi in mano” senza selezione: non siamo il partner giusto.",

      "visual.merch.standard.title": "STANDARD",
      "visual.merch.standard.tagline": "Design + handoff. Il cliente gestisce il fornitore.",
      "visual.merch.standard.includes.title": "Include",
      "visual.merch.standard.includes.list": [
        "Design (grafica / posizionamenti)",
        "Tech pack",
        "Specifiche stampa / ricamo",
        "Handoff completo al fornitore"
      ],
      "visual.merch.standard.notes.title": "Note",
      "visual.merch.standard.notes.list": [
        "Il cliente paga il fornitore direttamente",
        "Nessuna gestione produzione da parte di KALTÉ",
        "Tempi e qualità dipendono dal fornitore scelto"
      ],

      "visual.merch.premium.title": "PREMIUM",
      "visual.merch.premium.tagline": "Full Production Coordination. KALTÉ è unico referente.",
      "visual.merch.premium.includes.title": "Include",
      "visual.merch.premium.includes.list": [
        "KALTÉ come unico referente cliente ↔ fornitore",
        "Gestione campioni (max 2 revisioni)",
        "Supervisione produzione",
        "Allineamento su specifiche e qualità"
      ],
      "visual.merch.premium.fee.title": "Fee",
      "visual.merch.premium.fee.text":
        "Fee +30–40% sul costo di produzione (in base a complessità e rischio).",
      "visual.merch.premium.limits.title": "Limiti",
      "visual.merch.premium.limits.list": [
        "Solo progetti selezionati",
        "Scope chiuso: niente richieste infinite",
        "Se il budget non regge qualità e campionatura: stop"
      ],

      // ---- CONTACT / FOOTER (generic keys) ----
      "contact.title": "Contatti",
      "contact.subtitle": "Solo richieste chiare. Se non hai brief minimo, aspetta.",
      "contact.button.email": "Scrivi via email",
      "footer.note":
        "KALTÉ — Digital & Visual Solutions. Static sites + essential identity."
    },

    en: {
      // ---- GLOBAL / NAV ----
      "brand.name": "KALTÉ",
      "nav.home": "Home",
      "nav.digital": "Digital",
      "nav.visual": "Visual",
      "nav.work": "Work",
      "nav.contact": "Contact",
      "nav.lang.it": "IT",
      "nav.lang.en": "EN",

      // ---- HOME ----
      "home.hero.kicker": "Digital & Visual Solutions",
      "home.hero.title": "Static websites and essential visual identity.",
      "home.hero.subtitle":
        "Clean, fast, no fluff. If you want marketing, advanced SEO, or ecommerce: this isn’t it.",
      "home.hero.cta.primary": "View services",
      "home.hero.cta.secondary": "Contact",

      "home.filter.note.title": "Filter",
      "home.filter.note.text":
        "We only take aware requests. No ecommerce, no ongoing management, no “we do everything”.",

      // ---- HOME: SELECTED WORK (NEW) ----
      "home.selectedWork.title": "SELECTED WORK",
      "home.selectedWork.subtitle":
        "Real apparel / merch applications. Not standard production: selected projects only.",
      "home.selectedWork.note":
        "Note: production support only on selected projects (see PREMIUM).",

      // Optional captions
      "home.selectedWork.item1.title": "Capsule / Tee",
      "home.selectedWork.item1.desc": "Design + print specs",
      "home.selectedWork.item2.title": "Hoodie / Embroidery",
      "home.selectedWork.item2.desc": "Embroidery + placement",
      "home.selectedWork.item3.title": "Labeling",
      "home.selectedWork.item3.desc": "Labels + basic rules",

      // ---- DIGITAL PAGE ----
      "digital.page.title": "DIGITAL",
      "digital.page.subtitle":
        "Static HTML/CSS/JS websites. Fast. Clear. No ongoing maintenance.",
      "digital.section.what.title": "What we do",
      "digital.section.what.lead":
        "1–3 page static sites built to present clearly, immediately, without dependencies.",
      "digital.section.what.list": [
        "1–3 page static site (vanilla HTML/CSS/JS)",
        "Essential copy and clean structure",
        "Responsive (mobile-first)",
        "Deploy on GitHub Pages / Netlify / Cloudflare Pages",
        "IT/EN language toggle via JS (if needed)"
      ],
      "digital.section.not.title": "What we do NOT do",
      "digital.section.not.list": [
        "Ecommerce",
        "Managed WordPress / CMS with ongoing management",
        "Advanced SEO / organic growth",
        "Continuous maintenance and “infinite support”"
      ],
      "digital.section.deliverables.title": "Deliverables",
      "digital.section.deliverables.list": [
        "Repository with clean code",
        "Deployed build (live link)",
        "Organized assets",
        "Minimal handoff instructions"
      ],
      "digital.section.cta.title": "Do you have a concrete request?",
      "digital.section.cta.text":
        "Write only if you know what you want and you have minimum content ready (text, images, references).",
      "digital.section.cta.button": "Contact",

      // ---- VISUAL PAGE ----
      "visual.page.title": "VISUAL",
      "visual.page.subtitle":
        "Essential identity: logo, basic rules, coherent applications. No “marketing packages”.",
      "visual.section.core.title": "What we do",
      "visual.section.core.list": [
        "Logo / redesign",
        "Visual identity (colors, fonts, basic rules)",
        "Digital + print materials",
        "Merch / apparel applications"
      ],
      "visual.section.constraints.title": "Clear boundaries",
      "visual.section.constraints.list": [
        "No SMM",
        "No advanced SEO",
        "No ecommerce"
      ],

      // ---- VISUAL: MERCH / APPAREL (NEW) ----
      "visual.merch.title": "MERCH / APPAREL",
      "visual.merch.subtitle":
        "Two levels. If you want turnkey production without selection: we’re not the right partner.",

      "visual.merch.standard.title": "STANDARD",
      "visual.merch.standard.tagline": "Design + handoff. Client manages the supplier.",
      "visual.merch.standard.includes.title": "Includes",
      "visual.merch.standard.includes.list": [
        "Design (artwork / placements)",
        "Tech pack",
        "Print / embroidery specifications",
        "Full handoff to supplier"
      ],
      "visual.merch.standard.notes.title": "Notes",
      "visual.merch.standard.notes.list": [
        "Client pays the supplier directly",
        "No production management by KALTÉ",
        "Timing and quality depend on the chosen supplier"
      ],

      "visual.merch.premium.title": "PREMIUM",
      "visual.merch.premium.tagline": "Full Production Coordination. KALTÉ is the single point of contact.",
      "visual.merch.premium.includes.title": "Includes",
      "visual.merch.premium.includes.list": [
        "KALTÉ as the single contact client ↔ supplier",
        "Sample handling (max 2 revisions)",
        "Production supervision",
        "Alignment on specs and quality"
      ],
      "visual.merch.premium.fee.title": "Fee",
      "visual.merch.premium.fee.text":
        "Fee +30–40% on production cost (based on complexity and risk).",
      "visual.merch.premium.limits.title": "Limits",
      "visual.merch.premium.limits.list": [
        "Selected projects only",
        "Closed scope: no endless requests",
        "If budget can’t support quality and sampling: stop"
      ],

      // ---- CONTACT / FOOTER (generic keys) ----
      "contact.title": "Contact",
      "contact.subtitle": "Only clear requests. If you don’t have a minimum brief, wait.",
      "contact.button.email": "Email us",
      "footer.note":
        "KALTÉ — Digital & Visual Solutions. Static sites + essential identity."
    }
  };

  // =========================
  // HELPERS
  // =========================
  const getStoredLang = () => {
    const raw = (localStorage.getItem(LS_KEY) || "").toLowerCase();
    return raw === "en" || raw === "it" ? raw : DEFAULT_LANG;
  };

  const setStoredLang = (lang) => {
    localStorage.setItem(LS_KEY, lang);
  };

  const t = (lang, key) => {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    const val = dict[key];
    return typeof val === "string" ? val : "";
  };

  const tList = (lang, key) => {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    const val = dict[key];
    return Array.isArray(val) ? val : [];
  };

  const setActiveLangUI = (lang) => {
    // Optional: mark buttons/links with [data-lang="it|en"] as active
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const isActive = (el.getAttribute("data-lang") || "").toLowerCase() === lang;
      el.classList.toggle("is-active", isActive);
      el.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    // Optional: set <html lang="...">
    document.documentElement.setAttribute("lang", lang);
  };

  const applyI18n = (lang) => {
    // Single strings
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;

      const value = t(lang, key);
      if (!value) return;

      // If element has data-i18n-target="placeholder|title|aria-label|text"
      const target = (el.getAttribute("data-i18n-target") || "text").toLowerCase();

      if (target === "placeholder") {
        el.setAttribute("placeholder", value);
      } else if (target === "title") {
        el.setAttribute("title", value);
      } else if (target === "aria-label") {
        el.setAttribute("aria-label", value);
      } else {
        el.textContent = value;
      }
    });

    // Lists (arrays)
    document.querySelectorAll("[data-i18n-list]").forEach((el) => {
      const key = el.getAttribute("data-i18n-list");
      if (!key) return;

      const items = tList(lang, key);
      if (!items.length) return;

      // If you want to keep existing <li> structure, set data-i18n-list-mode="replace"
      const mode = (el.getAttribute("data-i18n-list-mode") || "replace").toLowerCase();

      if (mode === "replace") {
        el.innerHTML = items.map((txt) => `<li>${escapeHtml(txt)}</li>`).join("");
        return;
      }

      // mode === "update": updates existing children if present, otherwise generates.
      const li = Array.from(el.querySelectorAll("li"));
      if (li.length) {
        li.forEach((node, i) => {
          if (typeof items[i] === "string") node.textContent = items[i];
        });
      } else {
        el.innerHTML = items.map((txt) => `<li>${escapeHtml(txt)}</li>`).join("");
      }
    });

    setActiveLangUI(lang);
  };

  const escapeHtml = (str) => {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  };

  const setLang = (lang) => {
    const normalized = (lang || "").toLowerCase() === "en" ? "en" : "it";
    setStoredLang(normalized);
    applyI18n(normalized);
  };

  // =========================
  // INIT
  // =========================
  document.addEventListener("DOMContentLoaded", () => {
    // Initial language
    const lang = getStoredLang();
    applyI18n(lang);

    // Language toggle binding:
    // Any element with [data-set-lang="it|en"] will switch language.
    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const next = (btn.getAttribute("data-set-lang") || "").toLowerCase();
        setLang(next);
      });
    });

    // Backward compatibility:
    // If you already use [data-lang="it|en"] for buttons, it will work too.
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // avoid double-binding if both attributes exist
        if (btn.hasAttribute("data-set-lang")) return;
        e.preventDefault();
        const next = (btn.getAttribute("data-lang") || "").toLowerCase();
        setLang(next);
      });
    });
  });

  // Optional: expose for debugging
  window.KALTE_I18N = { I18N, setLang, getStoredLang };
})();
