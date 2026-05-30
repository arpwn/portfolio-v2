import * as React from "react";
import { CheckCircle2, Info, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";

type ToastVariant = "success" | "info" | "error";

type ToastPayload = {
  title: string;
  description?: string;
  variant?: ToastVariant;
};

type ToastItem = Required<ToastPayload> & {
  id: number;
};

const TOAST_EVENT = "toast:show";

export function toast(payload: ToastPayload) {
  window.dispatchEvent(
    new CustomEvent<ToastPayload>(TOAST_EVENT, {
      detail: payload,
    }),
  );
}

export function Toaster() {
  const [items, setItems] = React.useState<ToastItem[]>([]);

  React.useEffect(() => {
    const onToast = (event: Event) => {
      const { title, description = "", variant = "info" } = (
        event as CustomEvent<ToastPayload>
      ).detail;
      const id = Date.now();

      setItems((current) => [
        ...current.slice(-2),
        { id, title, description, variant },
      ]);

      window.setTimeout(() => {
        setItems((current) => current.filter((item) => item.id !== id));
      }, 2800);
    };

    window.addEventListener(TOAST_EVENT, onToast);
    return () => window.removeEventListener(TOAST_EVENT, onToast);
  }, []);

  return (
    <div className="fixed right-4 top-20 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-2">
      {items.map((item) => {
        const Icon =
          item.variant === "success"
            ? CheckCircle2
            : item.variant === "error"
              ? XCircle
              : Info;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-md border bg-background/95 p-4 text-foreground shadow-lg backdrop-blur",
              "animate-in fade-in-0 slide-in-from-top-2 duration-200",
            )}
            role="status"
          >
            <div className="flex gap-3">
              <Icon
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0",
                  item.variant === "success" && "text-emerald-500",
                  item.variant === "error" && "text-destructive",
                  item.variant === "info" && "text-sky-500",
                )}
              />
              <div className="min-w-0">
                <p className="text-sm font-medium leading-none">
                  {item.title}
                </p>
                {item.description && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
