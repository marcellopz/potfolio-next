export function Footer() {
  return (
    <footer className="border-t border-ghost-100 px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <span className="text-xs tracking-widest uppercase text-muted">
        © 2025 Archivist. Engineered with precision.
      </span>
      <nav className="flex items-center gap-6">
        {[
          { label: "GitHub", href: "https://github.com" },
          { label: "LinkedIn", href: "https://linkedin.com" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
