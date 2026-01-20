/* KALTÉ — script.js
   - Vanilla i18n IT/EN
   - data-i18n for single strings
   - data-i18n-list for arrays (generates <li>)
   - localStorage key: "kalte_lang"
*/

(() => {
  const LS_KEY = "kalte_lang";
  const DEFAULT_LANG = "it";

  const I18N = {
    it: {
      // ===== GLOBAL =====
      "brand.name": "KALTÉ",
      "tagline.micro": "Static sites. Clean identity. No unnecessary complexity.",

      // NAV
      "nav.about": "About",
      "nav.services": "Servizi",
      "nav.work": "Selected work",
      "nav.contact": "Contatti",
      "nav.social": "Social",
      "nav.backHome": "← Home",
      "nav.lang.it": "IT",
      "nav.lang.en": "EN",

      // ===== HOME HERO =====
      "home.hero.kicker": "Digital & Visual Solutions",
      "home.hero.title": "Siti statici + identità visiva essenziale.",
      "home.hero.subtitle":
        "Se cerchi marketing, SEO avanzata o ecommerce: non è il servizio giusto.",
      "home.hero.cta.digital": "Vai a DIGITAL",
      "home.hero.cta.visual": "Vai a VISUAL",

      // HOME FILTER STRIP
      "home.filter.title": "Filtro rapido",
      "home.filter.list": [
        "No ecommerce",
        "No SMM",
        "No SEO avanzata",
        "No gestione continua"
      ],

      // ===== HOME ABOUT (SHORT) =====
      "home.about.title": "ABOUT",
      "home.about.lead":
        "Costruiamo asset che devono funzionare: chiari, veloci, e replicabili.",
      "home.about.list": [
        "Siti statici 1–3 pagine (HTML/CSS/JS vanilla)",
        "Identità visiva essenziale (regole base, applicazioni)",
        "Handoff pulito: file ordinati + istruzioni minime"
      ],

      // ===== HOME SERVICES =====
      "home.services.title": "SERVICES",
      "home.services.digital.title": "Focus DIGITAL",
      "home.services.digital.desc": "Siti statici 1–3 pagine. Veloci, chiari, senza gestione continua.",
      "home.services.digital.meta": "No ecommerce. No WordPress gestito.",
      "home.services.digital.cta": "Open page →",

      "home.services.visual.title": "Focus VISUAL",
      "home.services.visual.desc": "Logo, mini identity, materiali. Applicazioni su merch quando serve.",
      "home.services.visual.meta": "No pacchetti marketing.",
      "home.services.visual.cta": "Open page →",

      // ===== HOME SELECTED WORK =====
      "home.work.title": "SELECTED WORK",
      "home.work.subtitle":
        "Proof of work su apparel/merch. Produzione non standard: solo progetti selezionati.",
      "home.work.note":
        "Produzione non è un servizio standard. Premium solo su progetti selezionati.",

      // ===== CONTACT / SOCIAL =====
      "contact.title": "CONTACT",
      "contact.email.label": "Email",
      "contact.whatsapp.label": "WhatsApp",

      "social.title": "SOCIAL",
      "social.instagram": "Instagram",

      "footer.note": "Digital & Visual Solutions.",

      // ===== DIGITAL PAGE =====
      "digital.title": "DIGITAL",
      "digital.subtitle": "Siti web statici 1–3 pagine. Veloci, chiari, senza gestione continua.",

      "digital.what.title": "Cosa facciamo",
      "digital.what.list": [
        "Sito statico 1–3 pagine (HTML/CSS/JS)",
        "Struttura e copy essenziale (se hai i contenuti, meglio)",
        "Responsive mobile-first",
        "Deploy su GitHub Pages / Netlify / Cloudflare Pages",
        "Toggle lingua IT/EN (se richiesto)"
      ],

      "digital.not.title": "Cosa NON facciamo",
      "digital.not.list": [
        "Ecommerce",
        "WordPress gestito / CMS con gestione continua",
        "SEO avanzata / crescita organica",
        "Manutenzione continuativa e supporto infinito"
      ],

      "digital.fit.title": "Quando ha senso",
      "digital.fit.list": [
        "Attività locali che vogliono essere trovate e capite",
        "Creativi / professionisti che devono presentarsi bene",
        "Piccoli brand che vogliono una vetrina pulita (non uno shop)"
      ],

      "start.title": "PER INIZIARE",
      "start.lead": "Per lavorare veloce e senza giri a vuoto, mandami questi 4 punti:",
      "digital.start.list": [
        "Obiettivo del sito (1 frase, senza poesia)",
        "Numero pagine + esempi/refs (2–3 link)",
        "Contenuti disponibili: testi, immagini, logo (anche grezzi)",
        "Tempistiche e budget realistici"
      ],
      "start.note": "Se cerchi ecommerce, SEO avanzata o gestione social, non è il servizio che offriamo.",
      "start.cta": "Contatti",

      // ===== VISUAL PAGE =====
      "visual.title": "VISUAL",
      "visual.subtitle": "Identità visiva essenziale, applicabile e coerente. Niente decorazioni vuote.",

      "visual.include.title": "Include",
      "visual.include.list": [
        "Logo / restyling",
        "Mini identity: palette, font, regole base",
        "Materiali digitali e stampati",
        "Applicazioni su merch/vestiario (quando serve)"
      ],

      "visual.logoOnly.title": "Logo-only",
      "visual.logoOnly.text":
        "Possiamo fare solo il logo. Se vuoi qualcosa che regga davvero, la mini identity ti evita incoerenze e rifacimenti.",

      "visual.miniIdentity.title": "Mini identity (capsule) — include",
      "visual.miniIdentity.list": [
        "Palette e tipografia",
        "Regole base di uso (do/don’t essenziali)",
        "2–3 applicazioni (web/stampa/merch)"
      ],

      "visual.merch.title": "MERCH / APPAREL",
      "visual.merch.subtitle":
        "Applichiamo l’identità su vestiario: dal concept alle specifiche tecniche. Produzione gestita in due modalità.",

      "visual.merch.standard.title": "STANDARD",
      "visual.merch.standard.tagline": "Design + Tech pack + Handoff",
      "visual.merch.standard.includes.title": "Include",
      "visual.merch.standard.includes.list": [
        "Design (grafica + posizionamenti)",
        "Tech pack",
        "Specifiche stampa/ricamo",
        "Handoff completo al fornitore"
      ],
      "visual.merch.standard.limits.title": "Limiti",
      "visual.merch.standard.limits.list": [
        "Il cliente gestisce ordine e pagamento col fornitore",
        "KALTÉ non gestisce produzione / spedizioni",
        "Qualità e tempi dipendono dal fornitore scelto"
      ],

      "visual.merch.premium.title": "PREMIUM",
      "visual.merch.premium.tagline": "Full Production Coordination",
      "visual.merch.premium.includes.title": "Include",
      "visual.merch.premium.includes.list": [
        "KALTÉ unico referente cliente ↔ fornitore",
        "Gestione campioni (max 2 revisioni)",
        "Supervisione produzione (specifiche + qualità)",
        "Allineamento operativo fino a fine produzione"
      ],
      "visual.merch.premium.fee.title": "Fee",
      "visual.merch.premium.fee.text": "Fee +30–40% sul costo di produzione (in base a complessità e rischio).",
      "visual.merch.premium.limits.title": "Limiti",
      "visual.merch.premium.limits.list": [
        "Solo progetti selezionati",
        "Scope chiuso: niente richieste infinite",
        "Se budget/tempi non reggono campionatura e qualità: stop"
      ],

      "visual.exclude.title": "Esclude",
      "visual.exclude.list": [
        "SMM / marketing / gestione social",
        "SEO avanzata",
        "Ecommerce"
      ],

      "visual.start.list": [
        "Cosa vuoi ottenere (logo / mini identity / applicazioni)",
        "Asset esistenti (se ci sono) + riferimenti",
        "Dove verrà usata l’identità (web, stampa, merch)",
        "Tempistiche e budget realistici"
      ]
    },

    en: {
      // ===== GLOBAL =====
      "brand.name": "KALTÉ",
      "tagline.micro": "Static sites. Clean identity. No unnecessary complexity.",

      // NAV
      "nav.about": "About",
      "nav.services": "Services",
      "nav.work": "Selected work",
      "nav.contact": "Contact",
      "nav.social": "Social",
      "nav.backHome": "← Home",
      "nav.lang.it": "IT",
      "nav.lang.en": "EN",

      // ===== HOME HERO =====
      "home.hero.kicker": "Digital & Visual Solutions",
      "home.hero.title": "Static sites + essential visual identity.",
      "home.hero.subtitle":
        "If you want marketing, advanced SEO, or ecommerce: this isn’t the right service.",
      "home.hero.cta.digital": "Go to DIGITAL",
      "home.hero.cta.visual": "Go to VISUAL",

      // HOME FILTER STRIP
      "home.filter.title": "Quick filter",
      "home.filter.list": [
        "No ecommerce",
        "No SMM",
        "No advanced SEO",
        "No ongoing management"
      ],

      // ===== HOME ABOUT (SHORT) =====
      "home.about.title": "ABOUT",
      "home.about.lead":
        "We build assets that must work: clear, fast, and repeatable.",
      "home.about.list": [
        "1–3 page static sites (vanilla HTML/CSS/JS)",
        "Essential identity (basic rules, applications)",
        "Clean handoff: organized files + minimal instructions"
      ],

      // ===== HOME SERVICES =====
      "home.services.title": "SERVICES",
      "home.services.digital.title": "Focus DIGITAL",
      "home.services.digital.desc": "1–3 page static sites. Fast, clear, no ongoing management.",
      "home.services.digital.meta": "No ecommerce. No managed WordPress.",
      "home.services.digital.cta": "Open page →",

      "home.services.visual.title": "Focus VISUAL",
      "home.services.visual.desc": "Logo, mini identity, materials. Merch applications when needed.",
      "home.services.visual.meta": "No marketing packages.",
      "home.services.visual.cta": "Open page →",

      // ===== HOME SELECTED WORK =====
      "home.work.title": "SELECTED WORK",
      "home.work.subtitle":
        "Proof of work on apparel/merch. Not standard production: selected projects only.",
      "home.work.note":
        "Production is not a standard service. Premium on selected projects only.",

      // ===== CONTACT / SOCIAL =====
      "contact.title": "CONTACT",
      "contact.email.label": "Email",
      "contact.whatsapp.label": "WhatsApp",

      "social.title": "SOCIAL",
      "social.instagram": "Instagram",

      "footer.note": "Digital & Visual Solutions.",

      // ===== DIGITAL PAGE =====
      "digital.title": "DIGITAL",
      "digital.subtitle": "1–3 page static websites. Fast, clear, no ongoing management.",

      "digital.what.title": "What we do",
      "digital.what.list": [
        "1–3 page static site (HTML/CSS/JS)",
        "Structure + essential copy (better if you already have content)",
        "Responsive mobile-first",
        "Deploy on GitHub Pages / Netlify / Cloudflare Pages",
        "IT/EN language toggle (if needed)"
      ],

      "digital.not.title": "What we do NOT do",
      "digital.not.list": [
        "Ecommerce",
        "Managed WordPress / CMS with ongoing management",
        "Advanced SEO / organic growth",
        "Continuous maintenance and infinite support"
      ],

      "digital.fit.title": "When it makes sense",
      "digital.fit.list": [
        "Local businesses that need clarity",
        "Creatives / professionals who must present well",
        "Small brands that need a clean showcase (not a shop)"
      ],

      "start.title": "TO START",
      "start.lead": "To work fast with zero back-and-forth, send these 4 points:",
      "digital.start.list": [
        "Website goal (1 sentence, no poetry)",
        "Number of pages + examples/refs (2–3 links)",
        "Available content: text, images, logo (even rough)",
        "Timeline and realistic budget"
      ],
      "start.note": "If you want ecommerce, advanced SEO, or social management, this isn’t our service.",
      "start.cta": "Contact",

      // ===== VISUAL PAGE =====
      "visual.title": "VISUAL",
      "visual.subtitle": "Essential, usable, coherent identity. No empty decoration.",

      "visual.include.title": "Includes",
      "visual.include.list": [
        "Logo / redesign",
        "Mini identity: palette, fonts, basic rules",
        "Digital + print materials",
        "Merch/apparel applications (when needed)"
      ],

      "visual.logoOnly.title": "Logo-only",
      "visual.logoOnly.text":
        "We can do the logo only. If you want something that lasts, mini identity prevents inconsistencies and rework.",

      "visual.miniIdentity.title": "Mini identity (capsule) — includes",
      "visual.miniIdentity.list": [
        "Palette + typography",
        "Basic usage rules (essential do/don’t)",
        "2–3 applications (web/print/merch)"
      ],

      "visual.merch.title": "MERCH / APPAREL",
      "visual.merch.subtitle":
        "We apply the identity to apparel: from concept to technical specs. Production handled in two modes.",

      "visual.merch.standard.title": "STANDARD",
      "visual.merch.standard.tagline": "Design + Tech pack + Handoff",
      "visual.merch.standard.includes.title": "Includes",
      "visual.merch.standard.includes.list": [
        "Design (artwork + placements)",
        "Tech pack",
        "Print/embroidery specifications",
        "Full handoff to supplier"
      ],
      "visual.merch.standard.limits.title": "Limits",
      "visual.merch.standard.limits.list": [
        "Client manages order and payment with supplier",
        "KALTÉ does not manage production/shipping",
        "Quality and timing depend on the chosen supplier"
      ],

      "visual.merch.premium.title": "PREMIUM",
      "visual.merch.premium.tagline": "Full Production Coordination",
      "visual.merch.premium.includes.title": "Includes",
      "visual.merch.premium.includes.list": [
        "KALTÉ as the single contact client ↔ supplier",
        "Sampling (max 2 revisions)",
        "Production supervision (specs + quality)",
        "Operational alignment until production ends"
      ],
      "visual.merch.premium.fee.title": "Fee",
      "visual.merch.premium.fee.text": "Fee +30–40% on production cost (based on complexity and risk).",
      "visual.merch.premium.limits.title": "Limits",
      "visual.merch.premium.limits.list": [
        "Selected projects only",
        "Closed scope: no endless requests",
        "If budget/timeline can’t support sampling and quality: stop"
      ],

      "visual.exclude.title": "Excludes",
      "visual.exclude.list": [
        "SMM / marketing / social management",
        "Advanced SEO",
        "Ecommerce"
      ],

      "visual.start.list": [
        "What you need (logo / mini identity / applications)",
        "Existing assets (if any) + references",
        "Where the identity will be used (web, print, merch)",
        "Timeline and realistic budget"
      ]
    }
  };

  const getStoredLang = () => {
    const raw = (localStorage.getItem(LS_KEY) || "").toLowerCase();
    return raw === "en" || raw === "it" ? raw : DEFAULT_LANG;
  };

  const setStoredLang = (lang) => localStorage.setItem(LS_KEY, lang);

  const escapeHtml = (str) =>
    String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

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
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const isActive = (el.getAttribute("data-lang") || "").toLowerCase() === lang;
      el.classList.toggle("is-active", isActive);
      el.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
    document.documentElement.setAttribute("lang", lang);
  };

  const applyI18n = (lang) => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;

      const value = t(lang, key);
      if (!value) return;

      const target = (el.getAttribute("data-i18n-target") || "text").toLowerCase();

      if (target === "placeholder") el.setAttribute("placeholder", value);
      else if (target === "title") el.setAttribute("title", value);
      else if (target === "aria-label") el.setAttribute("aria-label", value);
      else el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-list]").forEach((el) => {
      const key = el.getAttribute("data-i18n-list");
      if (!key) return;

      const items = tList(lang, key);
      if (!items.length) return;

      el.innerHTML = items.map((txt) => `<li>${escapeHtml(txt)}</li>`).join("");
    });

    setActiveLangUI(lang);
  };

  const setLang = (lang) => {
    const normalized = (lang || "").toLowerCase() === "en" ? "en" : "it";
    setStoredLang(normalized);
    applyI18n(normalized);
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyI18n(getStoredLang());

    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        setLang((btn.getAttribute("data-set-lang") || "").toLowerCase());
      });
    });

    // Back-compat: if you already bind using data-lang
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      if (btn.hasAttribute("data-set-lang")) return;
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        setLang((btn.getAttribute("data-lang") || "").toLowerCase());
      });
    });
  });

  window.KALTE_I18N = { I18N, setLang, getStoredLang };
})();
