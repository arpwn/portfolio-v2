// src/components/ContactSection.tsx
import * as React from "react";
import ContactFormNF from "@/components/ContactFormNF";
import { useLang } from "@/hooks/uselang"; // ojo con el casing exacto

export default function ContactSection() {
  // tu hook puede exponer dict, lang o ambos según tu versión
  const { dict, lang } = useLang() as {
    dict?: any;
    lang?: "es" | "en";
  };

  const title =
    dict?.contact_title ?? (lang === "en" ? "Contact" : "Contacto");

  const note =
    dict?.contact_note ??
    (lang === "en"
      ? "Want to chat? I usually reply within 24h."
      : "¿Hablamos de tu idea? Respondo en 24h.");

  return (
    <section className="space-y-4 px-1 md:px-0">
      {/* Título con cromo sutil y soporte dark */}
      <h2
        className="text-2xl md:text-3xl font-bold tracking-tight
          bg-gradient-to-r from-gray-200 via-cyan-400 to-gray-100
          dark:from-gray-100 dark:via-blue-400 dark:to-gray-200
          bg-clip-text text-transparent animate-gradient"
      >
        {title}
      </h2>

      <p className="text-muted-foreground">{note}</p>

      <ContactFormNF />
    </section>
  );
}
