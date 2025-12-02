// src/components/LanguageToggle.tsx
import * as React from "react";
import { setLang, getInitialLang } from "@/i18n";
export default function LanguageToggle() {
  const [lang, setState] = React.useState(getInitialLang());
  const toggle = () => {
    const next = lang === "es" ? "en" : "es";
    setLang(next); setState(next);
  };
  React.useEffect(() => {
    // sincroniza html[lang] al cargar
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);
  return (
    <button
      onClick={toggle}
      className="rounded-md border px-3 py-2 text-sm hover:bg-muted/50"
      aria-label="Toggle language"
      title="Switch language"
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}
