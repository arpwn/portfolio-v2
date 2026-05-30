import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

// Diccionario ES/EN
const dict = {
  es: ["Inicio", "Proyectos", "Contacto"],
  en: ["Home", "Projects", "Contact"],
};

type Lang = "es" | "en";

export default function BreadcrumbDemo() {
  const [lang, setLang] = React.useState<Lang>("es");
  const [labels, setLabels] = React.useState(dict.es);
  const [page, setPage] = React.useState(1);

  // Escucha cambios del paginador
  React.useEffect(() => {
    const onChanged = (e: Event) => {
      const ce = e as CustomEvent<{ page: number }>;
      if (typeof ce.detail?.page === "number") setPage(ce.detail.page);
    };
    window.addEventListener("pager:changed", onChanged);
    return () => window.removeEventListener("pager:changed", onChanged);
  }, []);

  // Escucha cambios del idioma (desde LanguageToggle)
  React.useEffect(() => {
    const onLang = (e: Event) => {
      const ce = e as CustomEvent<{ lang: Lang }>;
      const l = ce.detail?.lang ?? "es";
      setLang(l);
      setLabels(dict[l]);
    };
    window.addEventListener("lang:changed", onLang);
    return () => window.removeEventListener("lang:changed", onLang);
  }, []);

  // Navegación
  const go = (p: number) => {
    window.dispatchEvent(new CustomEvent("pager:navigate", { detail: { page: p } }));
  };

  // Páginas:
  // page 1 → Inicio
  // page 2 → Proyectos
  // page 3 → Contacto
  const isFirst = page === 1;
  const currentLabel = labels[page - 1] ?? labels[0];

  return (
    <Breadcrumb>
      <BreadcrumbList>

        {/* Nivel 1 — Inicio */}
        <BreadcrumbItem>
          {isFirst ? (
            <BreadcrumbPage>{labels[0]}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                go(1);
              }}
            >
              {labels[0]}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>

        {/* Solo mostramos el Separador y el segundo nivel cuando NO estamos en Inicio */}
        {!isFirst && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentLabel}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}

      </BreadcrumbList>
    </Breadcrumb>
  );
}
