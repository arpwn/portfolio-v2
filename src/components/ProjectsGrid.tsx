import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLang } from "@/hooks/uselang";

type I18N = { es: string; en: string };

type Project = {
  title: I18N;
  description: I18N;
  image?: string;
  tech: string[];
  demo?: string;
  code?: string;
};

const PROJECTS: Project[] = [
  {
    title: { es: "RuleCheck", en: "RuleCheck" },
    description: {
      es: "Evaluador de solicitudes internas con reglas simples para detectar riesgo, priorizar revisión y sugerir el siguiente paso.",
      en: "Internal request evaluator with simple rules to detect risk, prioritize review, and suggest the next step.",
    },
    image:
      "/RuleCheck.png",
    tech: ["React", "Tailwind", "Vercel"],
    demo: "https://rulecheck-kappa.vercel.app/",
    code: "https://github.com/arpwn/rulecheck",
  },
  {
    title: { es: "Landing Astro", en: "Astro Landing" },
    description: {
      es: "Landing page ultrarrápida con Astro Islands, optimizada para SEO y Lighthouse 100.",
      en: "Ultra-fast landing using Astro Islands, SEO-optimized and Lighthouse 100.",
    },
    image:
      "/AstroLanding.png",
    tech: ["Astro", "Tailwind"],
    demo: "https://landing-astro-bay.vercel.app/",
    code: "https://github.com/arpwn/landing-astro",
  },
  {
    title: { es: "ShiftNote", en: "ShiftNote" },
    description: {
      es: "Generador de resumen operativo para entregar notas de turno de forma clara, rápida y consistente.",
      en: "Operational summary generator to deliver shift notes in a clear, fast and consistent manner.",
    },
    image:
      "/ShiftNote.png",
    tech: ["React", "Tailwind", "Vercel"],
    demo: "https://shiftnote-one.vercel.app/",
    code: "https://github.com/arpwn/shiftnote",
  },
  {
    title: { es: "Crypto Market Dashboard", en: "Crypto Market Dashboard" },
    description: {
      es: "Dashboard interactivo para visualizar precios, tendencias y métricas clave del mercado cripto en tiempo real, con una interfaz moderna y responsiva.",
      en: "Interactive dashboard to visualize prices, trends and key metrics of the crypto market in real time, with a modern and responsive interface.",
    },
    image:
      "/CryptoMarket.png",
    tech: ["React", "TypeScript", "Vercel", "API", "Charts"],
    demo: "https://crypto-market-dashboard-steel.vercel.app/",
    code: "https://github.com/arpwn/crypto-market-dashboard",
  },
  {
    title: { es: "SpaceX Mission Control", en: "SpaceX Mission Control" },
    description: {
      es: "Panel interactivo para explorar misiones, lanzamientos y datos clave de SpaceX con una interfaz moderna inspirada en un centro de control espacial.",
      en: "Interactive panel to explore SpaceX missions, launches and key data with a modern interface inspired by a space control center.",
    },
    image:
      "/SpaceX.png",
    tech: ["React", "TypeScript", "API", "Dashboard"],
    demo: "https://spacex-mission-control-delta.vercel.app/",
    code: "https://github.com/arpwn/spacex-mission-control",
  },
];

export default function ProjectsGrid() {
  const { lang } = useLang(); // <- se re-renderiza al cambiar idioma

  return (
    <section className="px-12 py-12">
      <h2
        className="text-2xl md:text-3xl font-bold tracking-tight mb-6
        bg-gradient-to-r 
        from-pink-200 via-rose-400 via-fuchsia-500 via-rose-300 to-pink-100
        dark:from-rose-200 dark:via-fuchsia-400 dark:via-pink-500 dark:via-purple-400 dark:to-rose-100
        bg-clip-text text-transparent animate-gradient"
      >
        {lang === "es" ? "Proyectos" : "Projects"}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Card key={i} className="overflow-hidden border hover:shadow-lg transition-shadow">
            {p.image && (
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title[lang]}
                  className="h-full w-full object-cover hover:scale-105 transition-transform"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{p.title[lang]}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{p.description[lang]}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t, idx) => (
                  <Badge key={idx} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              {p.demo && (
                <Button asChild size="sm">
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    {lang === "es" ? "Demo" : "Live"}
                  </a>
                </Button>
              )}
              {p.code && (
                <Button asChild size="sm" variant="outline">
                  <a href={p.code} target="_blank" rel="noreferrer">
                    {lang === "es" ? "Código" : "Code"}
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
