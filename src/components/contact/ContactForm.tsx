"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextInput } from "@/components/ui/TextInput";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    setErrorMessage(null);
    setStatus("sending");

    const emailConfig = {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    };

    const missingConfig = Object.entries(emailConfig)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingConfig.length > 0) {
      console.error("Missing EmailJS config:", missingConfig.join(", "));
      setStatus("error");
      setErrorMessage(
        "Email service is not configured yet. Please reach out directly."
      );
      return;
    }

    try {
      await emailjs.sendForm(
        emailConfig.serviceId!,
        emailConfig.templateId!,
        formRef.current,
        emailConfig.publicKey!
      );
      setStatus("sent");
      setErrorMessage(null);
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
      <TextInput
        label="Name"
        name="from_name"
        placeholder="Your name"
        required
        disabled={status === "sending"}
      />
      <TextInput
        label="Email Address"
        name="reply_to"
        type="email"
        placeholder="your@email.com"
        required
        disabled={status === "sending"}
      />
      <div className="flex flex-col gap-1">
        <label className="text-xs tracking-widest uppercase text-muted">
          Project Details
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
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
          {status === "sending" ? "Sending..." : "Send Request"}
        </Button>

        {status === "sent" && (
          <span className="text-sm text-gold tracking-wide">
            Message sent successfully.
          </span>
        )}
        {status === "error" && (
          <span className="text-sm text-red-400 tracking-wide">
            {errorMessage ?? "Something went wrong. Please try again."}
          </span>
        )}
      </div>
    </form>
  );
}
