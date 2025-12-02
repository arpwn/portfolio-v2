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
    <section className="max-w-3xl px-0 py-12">
      {showHeader && (
        <>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-tight mb-2
              bg-[linear-gradient(90deg,#e5e7eb,#9ca3af_20%,#f472b6_40%,#22d3ee_60%,#f3f4f6_85%)]
              dark:bg-[linear-gradient(90deg,#f3f4f6,#9ca3af_25%,#a78bfa_50%,#60a5fa_70%,#e5e7eb_95%)]
              bg-clip-text text-transparent animate-gradient"
          >
            {dict.faq_title}
          </h2>

          <p className="text-muted-foreground mb-6">
            {dict.faq_intro}
          </p>
        </>
      )}

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger className="justify-start text-left font-medium">
            {dict.faq_q1}
          </AccordionTrigger>
          <AccordionContent className="leading-relaxed">
            {dict.faq_a1}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger className="justify-start text-left font-medium">
            {dict.faq_q2}
          </AccordionTrigger>
          <AccordionContent className="leading-relaxed">
            {dict.faq_a2}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger className="justify-start text-left font-medium">
            {dict.faq_q3}
          </AccordionTrigger>
          <AccordionContent className="leading-relaxed">
            {dict.faq_a3}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger className="justify-start text-left font-medium">
            {dict.faq_q4}
          </AccordionTrigger>
          <AccordionContent className="leading-relaxed">
            {dict.faq_a4}
          </AccordionContent>
        </AccordionItem>

        {/* <AccordionItem value="q5">
          <AccordionTrigger className="justify-start text-left font-medium">
            {dict.faq_q5}
          </AccordionTrigger>
          <AccordionContent className="leading-relaxed">
            {dict.faq_a5}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q6">
          <AccordionTrigger className="justify-start text-left font-medium">
            {dict.faq_q6}
          </AccordionTrigger>
          <AccordionContent className="leading-relaxed">
            {dict.faq_a6}
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </section>
  );
}
