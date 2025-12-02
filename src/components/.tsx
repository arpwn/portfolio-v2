import { Award } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Azure Fundamentals (AZ-900)",
      org: "Microsoft",
      date: "2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    },
    {
      title: "Azure Developer Associate (AZ-204)",
      org: "Microsoft",
      date: "En progreso",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    },
    {
      title: "Cybersecurity Fundamentals",
      org: "IBM SkillsBuild",
      date: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      title: "Effective Communication",
      org: "LinkedIn Learning",
      date: "2022",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
  ];

  return (
    <section id="certificaciones" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Award className="size-7" />
        Certificaciones
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="rounded-xl border shadow-sm p-6 hover:shadow-lg transition duration-300 bg-card group"
          >
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={cert.logo}
                alt={cert.org}
                className="h-12 w-auto opacity-80 group-hover:opacity-100 transition"
              />
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold text-center">{cert.title}</h3>
            <p className="text-muted-foreground text-center">{cert.org}</p>
            <p className="text-xs mt-2 opacity-70 text-center">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
