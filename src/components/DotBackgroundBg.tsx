import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Capas de background fijas detrás del contenido.
 * No altera el flujo del layout.
 */
export default function DotBackgroundBg() {
  return (
    <>
      {/* capa de puntos */}
      <div
        className={cn(
          "pointer-events-none fixed inset-0 -z-10",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* capa de fade radial opcional */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
    </>
  );
}
