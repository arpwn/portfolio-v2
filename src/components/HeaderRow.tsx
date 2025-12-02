import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeaderRow() {
  return (
    <div className="mx-12 mt-8 flex items-center gap-3">
      <Avatar>
        <AvatarImage src="https://ih1.redbubble.net/image.5758561875.8765/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl text-sky-400">Armando Gtz</h1>
    </div>
  );
}
