export type Lang = "fr" | "en" | "ar" | "es";

export const LANGS: Lang[] = ["fr", "en", "ar", "es"];

export function getLangFromStorage(): Lang {
  if (typeof window === "undefined") return "fr";
  const v = window.localStorage.getItem("lang");
  if (v === "fr" || v === "en" || v === "ar" || v === "es") return v;
  return "fr";
}

export function setLangToStorage(lang: Lang) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("lang", lang);
}

export function getDir(lang: Lang) {
  return lang === "ar" ? "rtl" : "ltr";
}

export function tNavLabel(lang: Lang, key: "home" | "catalog" | "reservation" | "about" | "contact") {
  const dict: Record<Lang, Record<typeof key, string>> = {
    fr: {
      home: "Accueil",
      catalog: "Catalogue",
      reservation: "Réservation",
      about: "À propos",
      contact: "Contact",
    },
    en: {
      home: "Home",
      catalog: "Catalog",
      reservation: "Reservation",
      about: "About",
      contact: "Contact",
    },
    ar: {
      home: "الرئيسية",
      catalog: "كتالوج",
      reservation: "الحجز",
      about: "من نحن",
      contact: "اتصل بنا",
    },
    es: {
      home: "Inicio",
      catalog: "Catálogo",
      reservation: "Reserva",
      about: "Acerca de",
      contact: "Contacto",
    },
  };

  return dict[lang][key];
}

export function tCTA(lang: Lang, key: "requestVisit") {
  const dict: Record<Lang, Record<typeof key, string>> = {
    fr: { requestVisit: "Demander une visite" },
    en: { requestVisit: "Request a visit" },
    ar: { requestVisit: "اطلب زيارة" },
    es: { requestVisit: "Solicitar una visita" },
  };

  return dict[lang][key];
}

