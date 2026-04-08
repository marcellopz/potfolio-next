import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Experiência", href: "#experience" },
  { label: "Galeria", href: "#gallery" },
  { label: "Sobre", href: "#about" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-ghost-100 bg-void/90 backdrop-blur-md">
      <a
        href="#hero"
        className="font-serif text-sm tracking-[0.25em] uppercase text-foreground"
      >
        The Digital Archivist
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contact">
        <Button variant="ghost" className="text-xs py-2 px-5">
          Contato
        </Button>
      </a>
    </header>
  );
}
