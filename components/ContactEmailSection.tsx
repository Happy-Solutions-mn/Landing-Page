"use client";

import { FormEvent, useCallback, useMemo, useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/ui/Button";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const DEFAULT_FORM: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_TO = "tikaking0@gmail.com";

export function ContactEmailSection() {
  const [formData, setFormData] = useState<FormData>(DEFAULT_FORM);
  const [error, setError] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      formData.name.trim().length > 1 &&
      formData.email.trim().length > 5 &&
      formData.subject.trim().length > 2 &&
      formData.message.trim().length > 9
    );
  }, [formData]);

  const updateField = useCallback(
    (key: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
      if (error) {
        setError("");
      }
    },
    [error],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!canSubmit) {
        setError("Мэдээллээ бүрэн бөглөөд дахин оролдоно уу.");
        return;
      }

      const subject = encodeURIComponent(formData.subject.trim());
      const body = encodeURIComponent(
        `Нэр: ${formData.name.trim()}\nИ-мэйл: ${formData.email.trim()}\n\n${formData.message.trim()}`,
      );

      window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
    },
    [canSubmit, formData],
  );

  const handleOpenForm = useCallback(() => {
    setIsFormVisible(true);
  }, []);

  return (
    <section
      id="contact"
      className="scroll-mt-16 px-5 py-20 md:px-8 md:py-24"
      aria-label="Холбоо барих"
    >
      <div className="mx-auto max-w-6xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionLabel>Дараагийн алхам</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Төслөө хамтран тодорхойлъё.
            </h2>
            <p className="mt-3 max-w-md text-[var(--muted)]">
              И-мэйл товч дээр дарахад холбоо барих форм нээгдэнэ.
            </p>
          </div>
          {!isFormVisible ? (
            <Button href="#contact-form" variant="primary" onClick={handleOpenForm}>
              И-мэйл илгээх
            </Button>
          ) : null}
        </div>

        {isFormVisible ? (
          <form
            id="contact-form"
            className="mt-8 space-y-4 border-t border-[var(--border)] pt-8"
            onSubmit={handleSubmit}
          >
            <label className="block text-sm font-medium" htmlFor="contact-name">
              Нэр
            </label>
            <input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Жишээ: Happy Solutions LLC-ээс"
              className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              required
            />

            <label className="block text-sm font-medium" htmlFor="contact-email">
              И-мэйл
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="Жишээ: name@company.mn"
              className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              required
            />

            <label className="block text-sm font-medium" htmlFor="contact-subject">
              Гарчиг
            </label>
            <input
              id="contact-subject"
              type="text"
              value={formData.subject}
              onChange={(event) => updateField("subject", event.target.value)}
              placeholder="Жишээ: Вэб систем хөгжүүлэх санал"
              className="w-full border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              required
            />

            <label className="block text-sm font-medium" htmlFor="contact-message">
              Мессеж
            </label>
            <textarea
              id="contact-message"
              value={formData.message}
              onChange={(event) => updateField("message", event.target.value)}
              rows={5}
              placeholder="Төслийн зорилго, шаардлага, хугацаагаа товч бичнэ үү."
              className="w-full resize-y border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              required
            />

            {error ? <p className="text-sm text-red-500">{error}</p> : null}

            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex items-center justify-center bg-[var(--accent)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--accent-foreground)] transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              И-мэйл илгээх
            </button>
          </form>
        ) : null}
      </div>
    </section>
  );
}
