import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useLang } from "@/hooks/uselang";

type FaqProps = { showHeader?: boolean };

export default function FaqQA({ showHeader = true }: FaqProps) {
  const { dict } = useLang();

  return (
    /* max-w-full permite que el componente use todo el espacio definido en index.astro */
    <section className="w-full max-w-full px-0 py-12">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-16">
        
        {/* --- COLUMNA IZQUIERDA: ACORDEÓN --- */}
        <div className="w-full lg:max-w-2xl flex-1"> 
          {showHeader && (
            <div className="mb-8">
              <h2
                className="text-2xl md:text-3xl font-bold tracking-tight mb-2
                  bg-[linear-gradient(90deg,#e5e7eb,#9ca3af_20%,#f472b6_40%,#22d3ee_60%,#f3f4f6_85%)]
                  dark:bg-[linear-gradient(90deg,#f3f4f6,#9ca3af_25%,#a78bfa_50%,#60a5fa_70%,#e5e7eb_95%)]
                  bg-clip-text text-transparent animate-gradient"
              >
                {dict.faq_title}
              </h2>

              <p className="text-muted-foreground text-base">
                {dict.faq_intro}
              </p>
            </div>
          )}

          <Accordion type="single" collapsible className="w-full border-t border-zinc-100 dark:border-zinc-800/50">
            <AccordionItem value="q1" className="border-b border-zinc-100 dark:border-zinc-800/50">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                {dict.faq_q1}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {dict.faq_a1}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="border-b border-zinc-100 dark:border-zinc-800/50">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                {dict.faq_q2}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {dict.faq_a2}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="border-b border-zinc-100 dark:border-zinc-800/50">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                {dict.faq_q3}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {dict.faq_a3}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="border-b border-zinc-100 dark:border-zinc-800/50">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                {dict.faq_q4}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {dict.faq_a4}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* --- COLUMNA DERECHA: TARJETA QUICK INFO --- */}
        {/* hidden lg:flex hace que desaparezca en móvil para no romper el flujo vertical */}
        <aside className="hidden lg:flex w-72 flex-shrink-0 flex-col border border-zinc-200 dark:border-zinc-800 rounded-[2rem] p-7 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md shadow-sm sticky top-10 transition-colors duration-300">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mb-6">
            {dict.card_title || "Quick Info"}
          </h3>
          
          <ul className="space-y-6 mb-8">
            <li className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
              <span className="mr-3 text-lg opacity-80">📍</span>
              <span className="font-medium">{dict.card_location || "Mexico / Remote"}</span>
            </li>
            <li className="flex items-center text-sm">
              <div className="mr-3 flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {dict.card_status || "Available for hire"}
              </span>
            </li>
          </ul>

          <a 
            href={dict.card_cv_url || "/CV_Armando_ES.pdf"} 
            download 
            className="group flex items-center justify-center w-full py-3.5 px-4 bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-950 rounded-2xl text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-black/10 dark:shadow-white/5"
          >
            <svg 
              className="w-4 h-4 mr-2 transition-transform group-hover:translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            {dict.card_cv || "Download CV"}
          </a>
        </aside>

      </div>
    </section>
  );
}