// src/components/HomeSection.tsx
import * as React from "react";
import FaqQA from "@/components/FaqQA";
import { useLang } from "@/hooks/uselang";

export default function HomeSection() {
  const { lang } = useLang();

  return (
    <section className="space-y-4 px-1 md:px-0">
      <h2
        className="text-2xl md:text-3xl font-bold tracking-tight
          bg-gradient-to-r from-gray-200 via-pink-400 to-gray-100
          dark:from-gray-100 dark:via-purple-400 dark:to-gray-200
          bg-clip-text text-transparent animate-gradient"
      >
        {lang === "es" ? "Inicio" : "Home"}
      </h2>

      <p className="text-muted-foreground">
        {lang === "es"
          ? "Quién soy, cómo trabajo y qué ofrezco."
          : "Who I am, how I work, and what I offer."}
      </p>

      <FaqQA />
    </section>
  );
}
