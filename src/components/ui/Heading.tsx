import { ElementType, ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

const styles: Record<HeadingLevel, string> = {
  h1: "text-5xl tracking-tight leading-tight",
  h2: "text-3xl tracking-tight leading-snug",
  h3: "text-2xl tracking-tight leading-snug",
  h4: "text-xl tracking-tight leading-normal",
};

interface HeadingProps {
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
}

export function Heading({ as = "h2", children, className = "" }: HeadingProps) {
  const Tag = as as ElementType;
  return (
    <Tag className={`font-serif text-foreground ${styles[as]} ${className}`}>
      {children}
    </Tag>
  );
}
