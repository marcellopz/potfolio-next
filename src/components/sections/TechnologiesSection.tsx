import { Heading } from "@/components/ui/Heading";
import { BodyText } from "@/components/ui/BodyText";

type TechGroup = {
  label: string;
  items: string[];
};

const techGroups: TechGroup[] = [
  {
    label: "Core",
    items: ["React.js", "TypeScript", "JavaScript ES6+", "Node.js"],
  },
  {
    label: "Styling & UI",
    items: ["Tailwind CSS", "CSS3", "Material UI", "Styled Components"],
  },
  {
    label: "Tools & Infra",
    items: ["Git", "Firebase", "AWS", "Vercel", "Figma"],
  },
];

export function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="py-24 px-8 md:px-16 border-b border-ghost-100"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
        // Stack
      </p>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <Heading as="h2" className="font-serif text-foreground">
          Technologies
        </Heading>
        <BodyText muted className="max-w-sm text-sm">
          The instruments behind the craft — chosen for precision and
          scalability.
        </BodyText>
      </div>

      <div className="grid md:grid-cols-3 gap-0 border border-ghost-200">
        {techGroups.map((group, i) => (
          <div
            key={group.label}
            className={`p-8 flex flex-col gap-6 ${i < techGroups.length - 1 ? "border-b md:border-b-0 md:border-r border-ghost-200" : ""}`}
          >
            <span className="text-xs tracking-widest uppercase text-gold">
              {group.label}
            </span>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-px h-4 bg-gold/40 flex-shrink-0" />
                  <span className="text-sm text-foreground tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
