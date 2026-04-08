import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: `
      bg-gradient-to-r from-gold-dark via-gold to-gold-light
      text-void hover:brightness-110
    `,
    ghost: `
      border border-ghost-300 text-foreground bg-transparent
      hover:border-gold hover:text-gold
    `,
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
