// src/i18n/index.ts
import es from "./es";
import en from "./en";
export type Lang = "es" | "en";
export const dictionaries = { es, en };

export function getInitialLang(): Lang {
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
  }
  if (typeof navigator !== "undefined") {
    return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  }
  return "es";
}

export function setLang(lang: Lang) {
  try { localStorage.setItem("lang", lang); } catch {}
  document.documentElement.setAttribute("lang", lang);
  window.dispatchEvent(new CustomEvent("lang:changed", { detail: { lang } }));
}
