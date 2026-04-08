import { ElementType, ReactNode } from "react";

interface BodyTextProps {
  as?: "p" | "span" | "div";
  muted?: boolean;
  children: ReactNode;
  className?: string;
}

export function BodyText({
  as = "p",
  muted = false,
  children,
  className = "",
}: BodyTextProps) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={`font-sans leading-relaxed ${muted ? "text-muted" : "text-foreground"} ${className}`}
    >
      {children}
    </Tag>
  );
}
