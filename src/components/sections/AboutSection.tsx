import { Heading } from "@/components/ui/Heading";
import { BodyText } from "@/components/ui/BodyText";
import { Button } from "@/components/ui/Button";

const expertiseStack = [
  "React & Next.js",
  "TypeScript",
  "Tailwind CSS",
  "UI Engineering",
  "System Design",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-8 md:px-16 border-b border-ghost-100"
    >
      {/* Section title */}
      <Heading as="h2" className="text-center text-gold mb-20">
        About Me
      </Heading>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-center max-w-5xl mx-auto">
        {/* Left: geometric monogram card */}
        <div className="relative aspect-square bg-ghost-100 border border-ghost-200 flex items-center justify-center overflow-hidden">
          {/* Geometric background shapes */}
          <div className="absolute w-[65%] h-[65%] border border-gold/15 rotate-[18deg]" />
          <div className="absolute w-[50%] h-[50%] border border-gold/20 rotate-[-7deg]" />
          <div className="absolute w-[35%] h-[35%] border border-gold/25 rotate-[5deg]" />
          {/* Monogram */}
          <span className="font-serif italic text-gold text-[5rem] leading-none select-none relative z-10">
            MZ
          </span>
        </div>

        {/* Right: content */}
        <div className="flex flex-col gap-6">
          <Heading as="h3" className="font-serif italic text-foreground">
            Crafting Digital Experiences
          </Heading>

          <BodyText>
            I&apos;m a{" "}
            <span className="text-gold font-medium">
              Mid-Level React Developer
            </span>{" "}
            with 4 years of experience specializing in building high-performance,
            accessible web applications. Currently focused on{" "}
            <span className="text-gold font-medium">
              creating meaningful user experiences
            </span>{" "}
            at the intersection of design and robust engineering.
          </BodyText>

          {/* Divider */}
          <div className="w-full h-px bg-ghost-200" />

          {/* Expertise stack */}
          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-[0.3em] uppercase text-muted">
              Expertise Stack:
            </span>
            <p className="text-sm text-foreground tracking-wide">
              {expertiseStack.join(" / ")}
            </p>
          </div>

          <a href="#contact" className="mt-2">
            <Button variant="ghost">
              Let&apos;s Collaborate &rarr;
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
