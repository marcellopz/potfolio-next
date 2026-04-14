import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Archive", href: "#archive" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 border-b border-ghost-100 bg-void/90 backdrop-blur-md">
      <a
        href="#hero"
        className="font-serif italic text-gold text-xl tracking-[0.15em] leading-none select-none"
      >
        MZ
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contact">
        <Button variant="ghost" className="text-xs py-2 px-5">
          Contact
        </Button>
      </a>
    </header>
  );
}
