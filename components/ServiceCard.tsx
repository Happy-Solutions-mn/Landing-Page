import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@/components/Icons";

type ServiceCardProps = {
  index: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  icon?: ReactNode;
  tag?: string;
};

export function ServiceCard({
  index,
  title,
  description,
  href,
  linkLabel = "Дэлгэрэнгүй үзэх",
  icon,
  tag,
}: ServiceCardProps) {
  const content = (
    <>
      {/* Top row: index + icon */}
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--muted)]">
          {index}
        </span>
        {icon ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface-2)] text-[var(--foreground)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
            {icon}
          </span>
        ) : null}
      </div>

      {tag ? (
        <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          {tag}
        </span>
      ) : null}

      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight md:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-[15px]">
        {description}
      </p>

      {href ? (
        <div className="mt-7 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]">
          <span>{linkLabel}</span>
          <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      ) : (
        <div className="mt-7 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
          <span>Удахгүй</span>
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[var(--accent)]" />
        </div>
      )}

      {/* Top accent line on hover */}
      <span
        className="pointer-events-none absolute right-0 top-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full"
        aria-hidden
      />
      {/* Glow on hover */}
      <span
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), var(--accent-glow), transparent 40%)",
        }}
        aria-hidden
      />
    </>
  );

  const className =
    "group shine-on-hover relative flex flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_0_0_1px_var(--accent-glow)] md:p-8";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={className}
      >
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
