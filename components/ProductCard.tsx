import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/Icons";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  screenshot: string;
  tag?: string;
};

export function ProductCard({
  title,
  description,
  href,
  screenshot,
  tag,
}: ProductCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative flex flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_0_0_1px_var(--accent-glow)]"
    >
      {/* Screenshot preview */}
      <div className="relative h-48 w-full overflow-hidden border-b border-[var(--border)] bg-[var(--surface-2)] sm:h-56">
        <Image
          src={screenshot}
          alt={title + " screenshot"}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay bottom */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--surface)] to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 md:p-8">
        {tag ? (
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {tag}
          </span>
        ) : null}

        <h3 className="text-lg font-semibold leading-snug tracking-tight md:text-xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--muted)] md:text-[15px]">
          {description}
        </p>

        <div className="mt-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]">
          <span>Үзэх</span>
          <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Top accent line on hover */}
      <span
        className="pointer-events-none absolute right-0 top-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full"
        aria-hidden
      />
    </a>
  );
}
