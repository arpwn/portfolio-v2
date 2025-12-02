// src/hooks/useLang.ts
import * as React from "react";
import { dictionaries, getInitialLang } from "@/i18n";

export function useLang() {
  const [lang, setLangState] = React.useState(getInitialLang());
  const dict = dictionaries[lang];

  React.useEffect(() => {
    const onChange = (e: Event) => {
      const ce = e as CustomEvent<{ lang: "es" | "en" }>;
      if (ce.detail?.lang) setLangState(ce.detail.lang);
    };
    window.addEventListener("lang:changed", onChange);
    return () => window.removeEventListener("lang:changed", onChange);
  }, []);

  return { lang, dict };
}
