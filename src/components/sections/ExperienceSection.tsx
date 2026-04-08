import { Heading } from "@/components/ui/Heading";
import { BodyText } from "@/components/ui/BodyText";

type ExperienceEntry = {
  index: string;
  company: string;
  period: string;
  role: string;
  context: string;
  description: string;
  tags: string[];
  quote?: string;
};

const experiences: ExperienceEntry[] = [
  {
    index: "01",
    company: "FullStack Labs",
    period: "MAY 2025 – PRESENT",
    role: "Software Engineer (Mid Level)",
    context: "CLIENT: FLOQAST",
    quote: "The intersection of architectural precision and scalable design.",
    description:
      "Spearheading the systematic migration of core design systems. Bridging the gap between creative vision and functional reality through high-performance React architectures.",
    tags: ["React", "Styled Components", "Design Systems"],
  },
  {
    index: "02",
    company: "senhasegura",
    period: "FEB 2022 – DEC 2024",
    role: "React Developer (Mid-Level)",
    context: "IDENTITY & ACCESS MANAGEMENT",
    description:
      "Architected the front-end interface for a global cloud identity platform. Led the technical implementation of security-first components using TypeScript, ensuring rigorous data integrity and seamless user flow.",
    tags: ["TypeScript", "React", "Cloud Architecture"],
  },
];

const infoCards = [
  { label: "Stack.Core", value: "React &\nTypeScript" },
  { label: "Focus.Area", value: "Design\nSystems" },
  { label: "Geo.Location", value: "Remote /\nGlobal" },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-8 md:px-16 border-b border-ghost-100"
    >
      {/* Section header */}
      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
        // Manifesto 02. Experience
      </p>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <Heading as="h1" className="font-serif italic text-foreground leading-tight">
            Marcello Pimentel
          </Heading>
          <Heading as="h1" className="font-serif text-gold leading-tight">
            Zanandrea
          </Heading>
        </div>
        <div className="flex flex-col gap-1 md:text-right">
          {["Software Engineering", "Design Systems", "Specialist", "Mid-Level Expertise"].map(
            (item) => (
              <span key={item} className="text-xs tracking-widest uppercase text-muted">
                {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* Experience entries */}
      <div className="flex flex-col gap-24">
        {experiences.map((exp) => (
          <div
            key={exp.index}
            className="grid md:grid-cols-[5fr_7fr] gap-10 items-start"
          >
            {/* Left: company info */}
            <div className="flex flex-col gap-3">
              <span className="text-[4rem] leading-none font-serif text-ghost-200 select-none">
                {exp.index}
              </span>
              <Heading as="h3" className="font-serif text-foreground">
                {exp.company}
              </Heading>
              <span className="text-xs tracking-widest uppercase text-gold">
                {exp.period}
              </span>
              {exp.quote && (
                <blockquote className="mt-4 border-l-2 border-gold/40 pl-4 italic text-sm text-muted leading-relaxed">
                  &ldquo;{exp.quote}&rdquo;
                </blockquote>
              )}
            </div>

            {/* Right: role card */}
            <div className="border border-ghost-200 bg-ghost-100 p-8 flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <Heading as="h3" className="font-serif text-foreground leading-snug">
                  {exp.role}
                </Heading>
              </div>
              <span className="text-xs tracking-widest uppercase text-muted">
                {exp.context}
              </span>
              <BodyText muted className="text-sm leading-relaxed">
                {exp.description}
              </BodyText>
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-widest uppercase border border-ghost-200 px-2 py-0.5 text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Junior / Intern entry */}
        <div className="border-t border-ghost-100 pt-12">
          <p className="text-xs tracking-widest uppercase text-muted mb-6 flex items-center gap-2">
            <span className="text-gold">◎</span> Previous Role: Junior / Intern
            Path
          </p>
          <div className="grid md:grid-cols-[5fr_7fr] gap-10">
            <div>
              <Heading as="h4" className="font-serif text-foreground">
                PHP Back-End Intern
              </Heading>
              <span className="text-xs tracking-widest uppercase text-gold mt-2 block">
                JUN 2021 – FEB 2022
              </span>
            </div>
            <BodyText muted className="text-sm leading-relaxed italic">
              Established foundational backend patterns using PHP and Symfony.
              Focused on secure CRUD operations and data modeling for core
              security modules.
            </BodyText>
          </div>
        </div>
      </div>

      {/* Bottom info cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-24 border border-ghost-200">
        {infoCards.map((card) => (
          <div
            key={card.label}
            className="border-r border-ghost-200 p-6 flex flex-col gap-4"
          >
            <span className="text-[10px] tracking-widest uppercase text-muted">
              {card.label}
            </span>
            <Heading as="h4" className="font-serif text-foreground whitespace-pre-line">
              {card.value}
            </Heading>
          </div>
        ))}
        {/* Download CV card */}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 flex flex-col justify-between gap-4 bg-gold group hover:bg-gold-light transition-colors cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase text-void/70">
            Archive.Request
          </span>
          <div className="flex items-end justify-between">
            <Heading as="h4" className="font-serif text-void leading-tight">
              Download CV
            </Heading>
            <span className="text-void text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
