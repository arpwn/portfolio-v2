import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useLang } from "@/hooks/uselang";

export default function ContactFormNF({
  action = "https://formspree.io/f/REEMPLAZA_AQUI",
  className,
}: { action?: string; className?: string }) {
  const { lang } = useLang();
  const [accepted, setAccepted] = React.useState(true); // activado por defecto ya que no tienes checkbox

  // Diccionario
  const t = {
    es: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      phName: "Tu nombre",
      phEmail: "nombre@empresa.com",
      phMessage: "Cuéntame brevemente el contexto y el siguiente paso.",
      send: "Enviar",
      direct: "Email directo",
    },
    en: {
      name: "Name",
      email: "Email",
      message: "Message",
      phName: "Your name",
      phEmail: "name@company.com",
      phMessage: "Briefly describe the context and next step.",
      send: "Send",
      direct: "Email me",
    },
  }[lang];

  return (
    <form action={action} method="POST" className={cn("space-y-5", className)}>
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="company_website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Nombre + Email */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="mb-3">{t.name}</Label>
          <Input
            id="name"
            name="name"
            placeholder={t.phName}
            autoComplete="name"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="mb-3">{t.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t.phEmail}
            autoComplete="email"
            required
          />
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <Label htmlFor="message" className="mb-3">{t.message}</Label>
        <Textarea
          id="message"
          name="message"
          className="min-h-[120px]"
          placeholder={t.phMessage}
          required
        />
      </div>

      {/* Acciones */}
      <div className="flex flex-wrap gap-3">
        <Button type="submit" disabled={!accepted}>
          {t.send}
        </Button>
        <a
          href="mailto:armandogune25@gmail.com?subject=Contacto%20desde%20portafolio"
          className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-muted"
        >
          {t.direct}
        </a>
        <a
          href="https://www.linkedin.com/in/armandonery34/"
          target="_blank"
          className="inline-flex items-center rounded-md border px-3 py-2 text-sm hover:bg-muted"
        >
          LinkedIn
        </a>
      </div>

      {/* (Opcional) redirección y asunto en Formspree */}
      {/* <input type="hidden" name="_redirect" value="https://tu-dominio.com/contacto?sent=1" /> */}
      {/* <input type="hidden" name="_subject" value="Nuevo contacto desde el portafolio" /> */}
    </form>
  );
}
