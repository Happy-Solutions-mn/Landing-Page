"use client";

import { FormEvent, useCallback, useMemo, useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CheckIcon, MailIcon, SparkleIcon } from "@/components/Icons";

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

const EMAIL_TO = "happysolutionsllc354@gmail.com";

const inputClass =
  "w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--accent)]";

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
      className="scroll-mt-16 px-5 py-20 md:px-8 md:py-28"
      aria-label="Холбоо барих"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_1px_0_var(--border)] md:p-14">
        {/* Decorative orb */}
        <span
          className="orb animate-float-2 right-[-80px] top-[-80px] h-[260px] w-[260px] bg-[var(--accent)] opacity-30"
          aria-hidden
        />
        {/* Dot pattern */}
        <div
          className="dot-bg pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
        />

        <div className="relative grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel>Дараагийн алхам</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Төслөө хамтран{" "}
              <span className="text-[var(--muted)]">тодорхойлъё.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--muted)] md:text-base">
              И-мэйл, утас эсвэл доорх формоор шууд холбогдоно уу. Бид 24 цагийн
              дотор хариу өгөх болно.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Үнэгүй зөвлөгөө, зургийн хувилбар",
                "Тодорхой үнэлгээ, хугацаа",
                "Шууд холбогдох баг",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm md:text-base"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-foreground)]">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${EMAIL_TO}`}
                className="group flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 transition-colors hover:border-[var(--accent)]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                  <MailIcon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    И-мэйл
                  </p>
                  <p className="truncate text-sm font-medium">{EMAIL_TO}</p>
                </div>
              </a>
              <div className="group flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-md border border-[var(--border)] bg-[var(--surface-2)]">
                  <SparkleIcon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Хариу өгөх хугацаа
                  </p>
                  <p className="truncate text-sm font-medium">~ 24 цагийн дотор</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {!isFormVisible ? (
              <div className="flex h-full flex-col items-start justify-center rounded-lg border border-dashed border-[var(--border)] bg-[var(--background)]/40 p-8 md:p-10">
                <SectionLabel>Шууд бичих</SectionLabel>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  Санаагаа товч тайлбарлаарай.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                  Доорх товчоор формыг нээгээд төслийнхөө талаар хэдхэн өгүүлбэрээр
                  бичээрэй.
                </p>
                <Button
                  href="#contact-form"
                  variant="primary"
                  onClick={handleOpenForm}
                  className="mt-6 shine-on-hover"
                >
                  <span className="flex items-center gap-2">
                    Формыг нээх
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Button>
              </div>
            ) : (
              <form
                id="contact-form"
                className="space-y-4 rounded-lg border border-[var(--border)] bg-[var(--background)]/40 p-6 md:p-8"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="block font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]"
                      htmlFor="contact-name"
                    >
                      Нэр
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      placeholder="Жишээ: Б.Болд"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="block font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]"
                      htmlFor="contact-email"
                    >
                      И-мэйл
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder="name@company.mn"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="block font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]"
                    htmlFor="contact-subject"
                  >
                    Гарчиг
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(event) => updateField("subject", event.target.value)}
                    placeholder="Жишээ: Вэб систем хөгжүүлэх санал"
                    className={inputClass}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="block font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]"
                    htmlFor="contact-message"
                  >
                    Мессеж
                  </label>
                  <textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    rows={5}
                    placeholder="Төслийн зорилго, шаардлага, хугацаагаа товч бичнэ үү."
                    className={`${inputClass} resize-y`}
                    required
                  />
                </div>

                {error ? <p className="text-sm text-red-500">{error}</p> : null}

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="shine-on-hover inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--accent-foreground)] transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  И-мэйл илгээх
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
