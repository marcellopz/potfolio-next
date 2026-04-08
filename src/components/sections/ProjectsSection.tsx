import { Heading } from "@/components/ui/Heading";
import { BodyText } from "@/components/ui/BodyText";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  size: "large" | "medium" | "small";
};

const projects: Project[] = [
  {
    id: "rpg",
    title: "RPG Campaign Manager",
    description:
      "A comprehensive ecosystem for dungeon masters. Integrating markdown editing for rich narrative control with real-time Firebase syncing for collaborative world-building.",
    tags: ["React", "Firebase", "Markdown"],
    size: "large",
  },
  {
    id: "league",
    title: "League Analytics",
    description:
      "Performance dashboard leveraging real-time data streams to visualize player growth and match dynamics.",
    tags: ["React", "Tailwind"],
    size: "small",
  },
  {
    id: "tabletop",
    title: "Real-Time Tabletop",
    description:
      "Low-latency synchronization engine using WebSockets and a Go backend. Engineered for sub-100ms state updates across distributed clients.",
    tags: ["Go", "WebSockets", "React"],
    size: "medium",
  },
  {
    id: "archivist",
    title: "Digital Archivist",
    description:
      'The current portfolio project. A manifestation of the "Hard Edge" aesthetic, prioritizing negative space and editorial typography.',
    tags: ["TS", "Tailwind"],
    size: "medium",
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="text-[10px] tracking-widest uppercase border border-ghost-200 px-2 py-0.5 text-muted">
      {label}
    </span>
  );
}

export function ProjectsSection() {
  const [rpg, league, tabletop, archivist] = projects;

  return (
    <section
      id="gallery"
      className="py-24 px-8 md:px-16 border-b border-ghost-100"
    >
      {/* Header */}
      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
        Curated Artifacts .001
      </p>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-4">
        <div>
          <h2 className="font-serif text-foreground text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight">
            Marcello
          </h2>
          <h2 className="font-serif italic text-foreground text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight">
            Pimentel
          </h2>
          <h2 className="font-serif italic text-foreground text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight">
            Zanandrea
          </h2>
        </div>
        <div className="flex flex-col gap-1 md:text-right md:pb-2">
          <span className="text-xs tracking-widest uppercase text-muted">
            Loc: São Paulo, BR
          </span>
          <span className="text-xs tracking-widest uppercase text-muted">
            Role: Front-End Developer
          </span>
          <span className="text-xs tracking-widest uppercase text-muted">
            Spec: React / TS / Firebase
          </span>
        </div>
      </div>

      <BodyText muted className="max-w-lg mb-20 text-sm leading-relaxed">
        An editorial documentation of technical craft, balancing structured
        backends with the fluid artistry of React frontends.
      </BodyText>

      {/* Project grid — asymmetric layout */}
      <div className="grid md:grid-cols-2 gap-0 border border-ghost-200">
        {/* Row 1 — large + small */}
        <div className="border-b border-r border-ghost-200 p-8 flex flex-col gap-6">
          {/* Artifact label */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-widest uppercase border border-ghost-200 px-2 py-0.5 text-muted">
              STK_01
            </span>
          </div>
          {/* Placeholder visual */}
          <div className="aspect-video bg-ghost-100 border border-ghost-200 flex items-center justify-center">
            <span className="font-serif italic text-muted/40 text-4xl">
              RPG
            </span>
          </div>
          <Heading as="h3" className="font-serif text-foreground">
            {rpg.title}
          </Heading>
          <BodyText muted className="text-sm leading-relaxed">
            {rpg.description}
          </BodyText>
          <div className="flex flex-wrap gap-2">
            {rpg.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>

        <div className="border-b border-ghost-200 p-8 flex flex-col gap-6 justify-between">
          <div className="aspect-video bg-ghost-100 border border-ghost-200 flex items-center justify-center">
            <span className="font-serif italic text-muted/40 text-4xl">
              LOL
            </span>
          </div>
          <Heading as="h3" className="font-serif text-foreground">
            {league.title}
          </Heading>
          <BodyText muted className="text-sm leading-relaxed">
            {league.description}
          </BodyText>
          <div className="flex flex-wrap gap-2">
            {league.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — two medium cards */}
        <div className="border-r border-ghost-200 p-8 flex flex-col gap-5">
          <Heading as="h3" className="font-serif text-foreground">
            {tabletop.title}
          </Heading>
          <BodyText muted className="text-sm leading-relaxed">
            {tabletop.description}
          </BodyText>
          <div className="flex flex-wrap gap-2">
            {tabletop.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>

        <div className="p-8 flex flex-col gap-5">
          <Heading as="h3" className="font-serif text-foreground">
            {archivist.title}
          </Heading>
          <BodyText muted className="text-sm leading-relaxed">
            {archivist.description}
          </BodyText>
          <div className="flex flex-wrap gap-2">
            {archivist.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy block */}
      <div className="grid md:grid-cols-2 gap-16 items-center mt-24 pt-16 border-t border-ghost-100">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <Heading as="h2" className="font-serif italic text-foreground leading-tight">
            The Philosophy of Precision Craft.
          </Heading>
          <BodyText muted className="text-sm leading-relaxed">
            Technical architecture is more than just functional execution; it is
            the curation of logical systems into a cohesive narrative. Every
            line of code, like every typographic choice, contributes to the
            integrity of the whole.
          </BodyText>

          {/* Archive status table */}
          <div className="border border-ghost-200 mt-4">
            <div className="px-4 py-2 border-b border-ghost-200">
              <span className="text-[10px] tracking-widest uppercase text-muted">
                Archive Status
              </span>
            </div>
            {[
              { key: "Core Systems", value: "Stable" },
              { key: "Experimental Labs", value: "Active" },
              { key: "Version", value: "V.01-2025" },
            ].map((row) => (
              <div
                key={row.key}
                className="px-4 py-3 flex justify-between border-b border-ghost-100 last:border-0"
              >
                <span className="text-xs tracking-wide uppercase text-muted">
                  {row.key}
                </span>
                <span className="text-xs tracking-widest uppercase text-foreground">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image placeholder */}
        <div className="aspect-video bg-ghost-100 border border-ghost-200 flex items-center justify-center">
          <span className="font-serif italic text-muted/30 text-2xl text-center px-8">
            Precision.<br />Craft.
          </span>
        </div>
      </div>
    </section>
  );
}
