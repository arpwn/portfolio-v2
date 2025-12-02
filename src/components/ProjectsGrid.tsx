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
    title: { es: "Dashboard Analytics", en: "Analytics Dashboard" },
    description: {
      es: "Panel con métricas en tiempo real, construido con React + Tailwind y desplegado en Vercel.",
      en: "Real-time metrics dashboard built with React + Tailwind and deployed on Vercel.",
    },
    image:
      "https://plus.unsplash.com/premium_photo-1723517419729-1ecee473604c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    tech: ["React", "Tailwind", "Vercel"],
    demo: "https://demo.com",
    code: "https://github.com/arpwn",
  },
  {
    title: { es: "Landing Astro", en: "Astro Landing" },
    description: {
      es: "Landing page ultrarrápida con Astro Islands, optimizada para SEO y Lighthouse 100.",
      en: "Ultra-fast landing using Astro Islands, SEO-optimized and Lighthouse 100.",
    },
    image:
      "https://images.unsplash.com/photo-1755561401726-2552032d2fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    tech: ["Astro", "Tailwind"],
    demo: "https://astro-landing.com",
    code: "https://github.com/arpwn",
  },
  {
    title: { es: "E-commerce MVP", en: "E-commerce MVP" },
    description: {
      es: "Prototipo de tienda con autenticación, carrito y pagos con Stripe.",
      en: "Store prototype with auth, cart and Stripe payments.",
    },
    image:
      "https://plus.unsplash.com/premium_photo-1738777152204-0ec9ab3502cc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    tech: ["Next.js", "Stripe", "Supabase"],
    demo: "https://ecommerce.com",
    code: "https://github.com/arpwn",
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
