import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Command,
  CommandList,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator
} from "@/components/ui/command";
import {
  Sun,
  Moon,
  Home,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";

type Lang = "es" | "en";

const LABELS = {
  es: {
    search: "Escribe una acción o busca… (⌘K / Ctrl+K)",
    empty: "No hay resultados.",
    nav: "Navegación",
    home: "Inicio",
    contact: "Contacto",
    quick: "Acciones rápidas",
    theme: "Alternar tema (claro/oscuro)",
    copy: "Copiar email",
    whatsapp: "WhatsApp",
    links: "Redes / Links",
  },
  en: {
    search: "Type a command or search… (⌘K / Ctrl+K)",
    empty: "No results found.",
    nav: "Navigation",
    home: "Home",
    contact: "Contact",
    quick: "Quick actions",
    theme: "Toggle theme (light/dark)",
    copy: "Copy email",
    whatsapp: "WhatsApp",
    links: "Social / Links",
  },
};

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState<Lang>("es");

  // Detectar cambios de idioma desde LanguageToggle
  React.useEffect(() => {
    const onLang = (e: Event) => {
      const ce = e as CustomEvent<{ lang: Lang }>;
      const l = ce.detail?.lang ?? "es";
      setLang(l);
    };
    window.addEventListener("lang:changed", onLang);
    return () => window.removeEventListener("lang:changed", onLang);
  }, []);

  const t = LABELS[lang];

  // Abrir con ⌘K / Ctrl+K
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpenEvt = () => setOpen(true);

    window.addEventListener("keydown", onKey);
    window.addEventListener("command:open", onOpenEvt as EventListener);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("command:open", onOpenEvt as EventListener);
    };
  }, []);

  const navigatePage = (page: number) => {
    window.dispatchEvent(
      new CustomEvent("pager:navigate", { detail: { page } })
    );
    setOpen(false);
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
    setOpen(false);
  };

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      window.location.href = `mailto:${email}`;
    }
    setOpen(false);
  };

  const openUrl = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 overflow-hidden">
        <Command>
          <CommandInput placeholder={t.search} />
          <CommandList>
            <CommandEmpty>{t.empty}</CommandEmpty>

            {/* Navegación */}
            <CommandGroup heading={t.nav}>
              <CommandItem onSelect={() => navigatePage(1)}>
                <Home className="mr-2 h-4 w-4" />
                {t.home}
              </CommandItem>

              <CommandItem onSelect={() => navigatePage(2)}>
                <Mail className="mr-2 h-4 w-4" />
                {t.contact}
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            {/* Acciones rápidas */}
            <CommandGroup heading={t.quick}>
              <CommandItem onSelect={toggleTheme}>
                <span className="mr-2 inline-flex items-center justify-center">
                  {document?.documentElement?.classList?.contains("dark") ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </span>
                {t.theme}
              </CommandItem>

              <CommandItem onSelect={() => copyEmail("armando@example.com")}>
                <Mail className="mr-2 h-4 w-4" />
                {t.copy}
              </CommandItem>

            </CommandGroup>

            <CommandSeparator />

            {/* Redes */}
            <CommandGroup heading={t.links}>
              <CommandItem onSelect={() => openUrl("https://www.linkedin.com/in/armandonery34/")}>
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn <ExternalLink className="ml-auto h-3 w-3 opacity-60" />
              </CommandItem>

              <CommandItem onSelect={() => openUrl("https://github.com/arpwn")}>
                <Github className="mr-2 h-4 w-4" />
                GitHub <ExternalLink className="ml-auto h-3 w-3 opacity-60" />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
