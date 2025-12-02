"use client";
import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export default function CommandDialogPalette() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // ⌘K (Mac) o Ctrl+K (Win/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {/* Un botón opcional para abrir */}
      <button onClick={() => setOpen(true)}>Open Command Palette</button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => console.log("Calendar")}>Calendar</CommandItem>
            <CommandItem onSelect={() => console.log("Search Emoji")}>Search Emoji</CommandItem>
            <CommandItem onSelect={() => console.log("Calculator")}>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => console.log("Profile")}>Profile</CommandItem>
            <CommandItem onSelect={() => console.log("Billing")}>Billing</CommandItem>
            <CommandItem onSelect={() => console.log("Settings")}>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
