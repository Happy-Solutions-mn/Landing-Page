type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="group relative overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />

      <div className="flex w-max animate-marquee gap-12 py-4 group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-3 font-mono text-sm uppercase tracking-[0.22em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-[var(--accent)]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
