import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SeasonalHeader() {
  const [season, setSeason] = React.useState<string>("none");

  React.useEffect(() => {
    const month = new Date().getMonth() + 1;

    if (month === 12) setSeason("winter");            // ❄ Diciembre
    else if (month === 2) setSeason("valentine");     // ❤️ Febrero
    else if (month >= 3 && month <= 5) setSeason("spring");   // 🌸 Primavera
    else if (month >= 6 && month <= 8) setSeason("summer");   // ☀️ Verano
    else if (month >= 9 && month <= 11) setSeason("autumn");  // 🍂 Otoño
  }, []);

  return (
    <div className="relative mx-12 mt-8 flex items-center gap-3 overflow-hidden py-4">

      {/* Avatar + Nombre */}
      <Avatar>
        <AvatarImage
          src="https://ih1.redbubble.net/image.5758561875.8765/st,small,507x507-pad,600x600,f8f8f8.jpg"
          alt="@shadcn"
        />
        <AvatarFallback>AG</AvatarFallback>
      </Avatar>

      <h1 className="text-2xl text-sky-400 font-semibold relative z-10">
        Armando Gtz
      </h1>

      {/* Animación SOLO dentro del header */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {season === "winter" && <SnowSmall />}
        {season === "valentine" && <HeartsSmall />}
        {season === "spring" && <FlowersSmall />}
        {season === "summer" && <SunSmall />}
        {season === "autumn" && <LeavesSmall />}
      </div>
    </div>
  );
}

/* ❄ NIEVE LIMITADA AL HEADER */
function SnowSmall() {
  return (
    <>
      {[...Array(12)].map((_, i) => (
        <svg
          key={i}
          className="snowflake-small absolute"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 2.5 + Math.random() * 2 + "s",
            animationDelay: Math.random() * 1.5 + "s",
            width: 10 + Math.random() * 10 + "px",
            height: 10 + Math.random() * 10 + "px",
          }}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 1h2v22h-2zM1 11h22v2H1zM4.22 4.22l1.42-1.42L19.78 17.9l-1.42 1.42zM19.78 6.34L18.36 4.92 4.22 19.06l1.42 1.42z"
          />
        </svg>
      ))}

      <style>{`
        .snowflake-small {
          color: var(--snow-color);
          top: -10px;
          animation-name: snowfall-small;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        @keyframes snowfall-small {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(60px); opacity: 0.8; }
        }

        /* Light mode → nieve gris visible */
        :root {
          --snow-color: #a8a8a8;
        }

        /* Dark mode → nieve blanca */
        .dark {
          --snow-color: #ffffff;
        }
      `}</style>
    </>
  );
}


/* ❤️ SAN VALENTÍN (compacto) */
function HeartsSmall() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute heart-small text-red-500 opacity-80"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 2 + Math.random() * 2 + "s",
            fontSize: 12 + Math.random() * 10 + "px",
          }}
        >
          ❤️
        </div>
      ))}

      <style>{`
        @keyframes hearts-small {
          0% { transform: translateY(30px) scale(1); }
          100% { transform: translateY(-20px) scale(0.8); }
        }
        .heart-small {
          top: 40px;
          animation-name: hearts-small;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  );
}

/* 🌸 PRIMAVERA COMPACTA */
function FlowersSmall() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-300 flower-small"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 3 + Math.random() * 2 + "s",
            fontSize: 14 + Math.random() * 8 + "px",
          }}
        >
          🌸
        </div>
      ))}

      <style>{`
        @keyframes flowers-small {
          0% { transform: translateY(-10px) rotate(0deg); }
          100% { transform: translateY(55px) rotate(180deg); }
        }
        .flower-small {
          top: -10px;
          animation-name: flowers-small;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  );
}

/* ☀️ VERANO COMPACTO */
function SunSmall() {
  return (
    <div className="absolute right-4 top-2 text-yellow-400 opacity-70 animate-pulse text-xl">
      ☀️
    </div>
  );
}

/* 🍂 OTOÑO COMPACTO */
function LeavesSmall() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute leaf-small"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 3 + Math.random() * 3 + "s",
            fontSize: 12 + Math.random() * 6 + "px",
          }}
        >
          🍂
        </div>
      ))}

      <style>{`
        @keyframes leaves-small {
          0% { transform: translateY(-10px) rotate(0deg); }
          100% { transform: translateY(60px) rotate(120deg); }
        }
        .leaf-small {
          top: -10px;
          animation-name: leaves-small;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  );
}
