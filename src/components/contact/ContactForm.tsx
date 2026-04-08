"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextInput } from "@/components/ui/TextInput";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
      <TextInput
        label="Nome"
        name="from_name"
        placeholder="Seu nome"
        required
        disabled={status === "sending"}
      />
      <TextInput
        label="E-mail"
        name="reply_to"
        type="email"
        placeholder="seu@email.com"
        required
        disabled={status === "sending"}
      />
      <div className="flex flex-col gap-1">
        <label className="text-xs tracking-widest uppercase text-muted">
          Mensagem
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Conte sobre o seu projeto..."
          required
          disabled={status === "sending"}
          className="
            bg-transparent border-b border-ghost-200 text-foreground
            py-2 outline-none placeholder:text-muted resize-none
            focus:border-b-gold transition-colors
          "
        />
      </div>

      <div className="flex items-center gap-6">
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        </Button>

        {status === "sent" && (
          <span className="text-sm text-gold tracking-wide">
            Mensagem enviada com sucesso.
          </span>
        )}
        {status === "error" && (
          <span className="text-sm text-red-400 tracking-wide">
            Algo deu errado. Tente novamente.
          </span>
        )}
      </div>
    </form>
  );
}
