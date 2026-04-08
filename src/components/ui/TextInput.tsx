import { InputHTMLAttributes, useId } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function TextInput({ label, error, className = "", ...props }: TextInputProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-xs tracking-widest uppercase text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        className={`
          bg-transparent border-b border-ghost-200 text-foreground
          py-2 outline-none placeholder:text-muted
          focus:border-b-gold transition-colors
          ${error ? "border-b-red-500" : ""}
          ${className}
        `}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-400">{error}</span>
      )}
    </div>
  );
}
