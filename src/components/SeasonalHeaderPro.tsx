import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/**
 * SeasonalHeaderPro - Minimalista Elegante
 * - Solo header (absolute inside container)
 * - Nieve/granos/hojas/petals/sun - subtle
 * - Adaptativo a light/dark via CSS variables
 * - Respeta prefers-reduced-motion
 */

export default function SeasonalHeaderPro() {
  const [season, setSeason] = React.useState<
    | "winter"
    | "valentine"
    | "spring"
    | "summer"
    | "autumn"
    | "day-of-the-dead"
    | "code-night"
    | "launch-mode"
    | "none"
  >("none");

  React.useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1; // 1..12
    const day = today.getDate();

    if (month === 11 && day <= 2) setSeason("day-of-the-dead");
    else if (month === 12 || month === 1) setSeason("winter");
    else if (month === 2) setSeason("valentine");
    else if (month >= 3 && month <= 5) setSeason("spring");
    else if (month >= 6 && month <= 8) setSeason("summer");
    else if (month >= 9 && month <= 11) setSeason("autumn");
    else setSeason("none");
    // setSeason("day-of-the-dead"); // Estatico para demo
    setSeason("code-night"); // Estatico para demo
    // setSeason("launch-mode"); // Estatico para demo

  }, []);

  return (
    <header className="relative mx-12 mt-8 flex items-center gap-3 overflow-hidden py-4">
      {/* Particles layer (absolute, constrained to header) */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <SeasonalLayer season={season} />
      </div>

      {/* Content - above particles */}
      <div className="relative z-10 flex items-center gap-3">
        <Avatar>
          <AvatarImage
            src="https://ih1.redbubble.net/image.5758561875.8765/st,small,507x507-pad,600x600,f8f8f8.jpg"
            alt="Avatar"
          />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>

        <h1 className="text-2xl font-semibold" style={{ color: "var(--header-name)" }}>
          Armando Gtz
        </h1>
      </div>

      {/* CSS variables for colors (light by default, dark overrides below) */}
      <style>{`
        :root {
          --snow-color: rgba(160,160,160,0.95); /* visible on light */
          --snow-glow: rgba(255,255,255,0.6);
          --petal-color: rgba(225,190,230,0.95);
          --leaf-color: rgba(210,150,80,0.95);
          --sun-color: rgba(250,200,100,0.95);
          --accent: #0ea5e9; /* header name fallback */
          --header-name: #0ea5e9;
        }
        .dark {
          --snow-color: rgba(255,255,255,0.95);
          --snow-glow: rgba(255,255,255,0.85);
          --petal-color: rgba(240,200,255,0.95);
          --leaf-color: rgba(255,180,80,0.95);
          --sun-color: rgba(255,230,120,0.95);
          --accent: #7dd3fc;
          --header-name: #7dd3fc;
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .seasonal-particle { animation: none !important; opacity: 0.9 !important; }
        }
      `}</style>
    </header>
  );
}

/* ---------- Seasonal layer ---------- */

function SeasonalLayer({ season }: { season: string }) {
  switch (season) {
    case "winter":
      return <WinterMini />;
    case "valentine":
      return <ValentineMini />;
    case "spring":
      return <SpringMini />;
    case "summer":
      return <SummerMini />;
    case "autumn":
      return <AutumnMini />;
    case "day-of-the-dead":
      return <DayOfTheDeadMini />;
    case "code-night":
      return <CodeNightMini />;
    case "launch-mode":
      return <LaunchModeMini />;
    default:
      return null;
  }
}

/* ---------- Winter (Subtle snow) ---------- */
function WinterMini() {
  // small number of SVG flakes, soft animation
  const flakes = Array.from({ length: 8 });
  return (
    <>
      {flakes.map((_, i) => (
        <svg
          key={i}
          className="seasonal-particle absolute"
          viewBox="0 0 24 24"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 30}px`,
            width: `${8 + Math.random() * 10}px`,
            height: `${8 + Math.random() * 10}px`,
            animation: `flake-fall ${3 + Math.random() * 3}s linear ${Math.random() * 1}s infinite`,
            opacity: 0.95,
            filter: `drop-shadow(0 0 4px var(--snow-glow))`,
            color: "var(--snow-color)",
          }}
        >
          <path fill="currentColor" d="M11 1h2v22h-2zM1 11h22v2H1zM4.22 4.22l1.42-1.42L19.78 17.9l-1.42 1.42zM19.78 6.34L18.36 4.92 4.22 19.06l1.42 1.42z"/>
        </svg>
      ))}

      <style>{`
        @keyframes flake-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(48px) rotate(30deg); opacity: 0.85; }
        }
      `}</style>
    </>
  );
}

/* ---------- Valentine (tiny floating hearts) ---------- */
function ValentineMini() {
  const hearts = Array.from({ length: 6 });
  return (
    <>
      {hearts.map((_, i) => (
        <div
          key={i}
          className="seasonal-particle absolute"
          style={{
            left: `${8 + Math.random() * 84}%`,
            top: `${20 + Math.random() * 20}px`,
            fontSize: `${10 + Math.random() * 10}px`,
            animation: `heart-rise ${2.5 + Math.random() * 2}s ease-out ${Math.random() * 0.8}s infinite`,
            color: "rgba(220,90,120,0.95)",
            opacity: 0.95,
          }}
        >
          ❤️
        </div>
      ))}

      <style>{`
        @keyframes heart-rise {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-26px) scale(0.9); opacity: 0.65; }
        }
      `}</style>
    </>
  );
}

/* ---------- Spring (very subtle petals) ---------- */
function SpringMini() {
  const petals = Array.from({ length: 7 });
  return (
    <>
      {petals.map((_, i) => (
        <div
          key={i}
          className="seasonal-particle absolute"
          style={{
            left: `${6 + Math.random() * 88}%`,
            top: `${-6 + Math.random() * 36}px`,
            width: `${8 + Math.random() * 10}px`,
            height: `${8 + Math.random() * 10}px`,
            animation: `petal-drift ${4 + Math.random() * 3}s linear ${Math.random() * 1}s infinite`,
            color: "var(--petal-color)",
            fontSize: `${10 + Math.random() * 10}px`,
            opacity: 0.95,
            transformOrigin: "center",
          }}
        >
          🌸
        </div>
      ))}

      <style>{`
        @keyframes petal-drift {
          0% { transform: translateY(-6px) rotate(0deg); opacity: 0.95; }
          50% { transform: translateY(14px) rotate(8deg); opacity: 1; }
          100% { transform: translateY(34px) rotate(20deg); opacity: 0.85; }
        }
      `}</style>
    </>
  );
}

/* ---------- Summer (tiny sun accent) ---------- */
function SummerMini() {
  return (
    <>
      <div
        className="seasonal-particle absolute"
        style={{
          right: "6%",
          top: "6px",
          fontSize: "18px",
          color: "var(--sun-color)",
          opacity: 0.85,
          transform: "translateZ(0)",
          animation: "sun-pulse 3.8s ease-in-out infinite",
        }}
      >
        ☀️
      </div>

      <style>{`
        @keyframes sun-pulse {
          0% { transform: scale(0.98); opacity: 0.85; }
          50% { transform: scale(1.06); opacity: 0.95; }
          100% { transform: scale(0.98); opacity: 0.85; }
        }
      `}</style>
    </>
  );
}

/* ---------- Autumn (soft leaves) ---------- */
function AutumnMini() {
  const leaves = Array.from({ length: 6 });
  return (
    <>
      {leaves.map((_, i) => (
        <div
          key={i}
          className="seasonal-particle absolute"
          style={{
            left: `${6 + Math.random() * 88}%`,
            top: `${-8 + Math.random() * 38}px`,
            fontSize: `${10 + Math.random() * 10}px`,
            color: "var(--leaf-color)",
            animation: `leaf-fall ${3.5 + Math.random() * 3}s linear ${Math.random() * 0.8}s infinite`,
            opacity: 0.95,
            transformOrigin: "center",
          }}
        >
          🍂
        </div>
      ))}

      <style>{`
        @keyframes leaf-fall {
          0% { transform: translateY(-6px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(46px) rotate(60deg); opacity: 0.75; }
        }
      `}</style>
    </>
  );
}


/* ---------- Day of the Dead (cempasuchil petals) ---------- */
function DayOfTheDeadMini() {
  const petals = Array.from({ length: 8 });

  return (
    <>
      {petals.map((_, i) => (
        <div
          key={i}
          className="seasonal-particle absolute"
          style={{
            left: `${6 + Math.random() * 88}%`,
            top: `${-8 + Math.random() * 38}px`,
            fontSize: `${12 + Math.random() * 8}px`,
            animation: `cempasuchil-fall ${3.5 + Math.random() * 3}s linear ${Math.random() * 0.8}s infinite`,
            opacity: 0.95,
          }}
        >
          🏵️
        </div>
      ))}

      <style>{`
        @keyframes cempasuchil-fall {
          0% { transform: translateY(-6px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(46px) rotate(80deg); opacity: 0.75; }
        }
      `}</style>
    </>
  );
}

/* ---------- Code Night (terminal dots) ---------- */
function CodeNightMini() {
  const dots = Array.from({ length: 10 });

  return (
    <>
      {dots.map((_, i) => (
        <span
          key={i}
          className="seasonal-particle absolute font-mono"
          style={{
            left: `${8 + Math.random() * 84}%`,
            top: `${2 + Math.random() * 42}px`,
            fontSize: `${10 + Math.random() * 7}px`,
            color: i % 2 === 0 ? "#22c55e" : "#38bdf8",
            animation: `code-blink ${1.8 + Math.random() * 1.8}s ease-in-out ${Math.random()}s infinite`,
            opacity: 0.85,
          }}
        >
          {i % 3 === 0 ? "{}" : i % 3 === 1 ? "/>" : "01"}
        </span>
      ))}

      <style>{`
        @keyframes code-blink {
          0%, 100% { transform: translateY(0); opacity: 0.45; }
          50% { transform: translateY(-5px); opacity: 0.95; }
        }
      `}</style>
    </>
  );
}

/* ---------- Launch Mode (space mission accent) ---------- */
function LaunchModeMini() {
  return (
    <>
      <div
        className="seasonal-particle absolute"
        style={{
          right: "8%",
          top: "10px",
          fontSize: "20px",
          animation: "rocket-launch 3.2s ease-in-out infinite",
          opacity: 0.9,
        }}
      >
        🚀
      </div>
      <div
        className="seasonal-particle absolute rounded-full"
        style={{
          right: "11%",
          top: "38px",
          width: "6px",
          height: "6px",
          background: "#f97316",
          boxShadow: "0 0 12px #f97316",
          animation: "rocket-flame 0.9s ease-in-out infinite",
        }}
      />

      <style>{`
        @keyframes rocket-launch {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-10px) rotate(-12deg); }
        }
        @keyframes rocket-flame {
          0%, 100% { transform: scale(0.75); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </>
  );
}
