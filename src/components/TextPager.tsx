// src/components/TextPager.tsx
import * as React from "react";
import PaginationDemo from "@/components/PaginationDemo";
import FaqQA from "@/components/FaqQA";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactSection from "@/components/ContactSection";
import { useLang } from "@/hooks/uselang";

export default function TextPager() {
  const { dict } = useLang();

  const PAGES: React.ReactNode[] = [
    // <HomeSection key="home" />,
    <FaqQA key="faq" />,
    // <ProjectsGrid key="projects" />,
    <ContactSection key="contact" />,
  ];

  const [page, setPage] = React.useState(1);
  const totalPages = PAGES.length;

  React.useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("pager:changed", {
        detail: { page, totalPages, labels: dict.nav },
      }),
    );
  }, [page, dict.nav, totalPages]);

  React.useEffect(() => {
    const onNavigate = (e: Event) => {
      const ce = e as CustomEvent<{ page: number }>;
      if (typeof ce.detail?.page === "number") setPage(ce.detail.page);
    };
    window.addEventListener("pager:navigate", onNavigate);
    window.dispatchEvent(
      new CustomEvent("pager:changed", {
        detail: { page, totalPages, labels: dict.nav },
      }),
    );
    return () => window.removeEventListener("pager:navigate", onNavigate);
  }, [dict.nav, totalPages]);

  return (
    <div className="mx-12 mt-6 space-y-4 pb-28">
      <div className="rounded-md border p-4 md:p-6 text-base leading-relaxed bg-background/70">
        {PAGES[page - 1]}
      </div>
      <div className="fixed bottom-4 left-4">
        <PaginationDemo
          totalPages={totalPages}
          initialPage={page}
          maxVisible={3}
          onChange={(p: number) => setPage(p)}
        />
      </div>
    </div>
  );
}
