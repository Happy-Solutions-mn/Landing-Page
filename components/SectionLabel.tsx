import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
      {children}
    </p>
  );
}
