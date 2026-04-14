type ServiceCardProps = {
  index: string;
  title: string;
  description: string;
};

export function ServiceCard({ index, title, description }: ServiceCardProps) {
  return (
    <article className="group relative border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)] md:p-8">
      <span className="font-mono text-xs text-[var(--muted)]">{index}</span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground md:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
        {description}
      </p>
      <div
        className="pointer-events-none absolute right-0 top-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"
        aria-hidden
      />
    </article>
  );
}
