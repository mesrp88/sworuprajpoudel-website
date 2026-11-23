import type { ReactNode } from "react";

/** Numbered chapter marker for the homepage story (01, 02 …). */
export function Chapter({ n, children, dark = false }: { n: string; children: ReactNode; dark?: boolean }) {
  return (
    <p className="flex items-center gap-3 font-display text-base font-medium">
      <span
        className={`grid h-7 w-7 place-items-center rounded-full text-xs font-semibold ${
          dark ? "bg-paper text-ink" : "bg-ink text-paper"
        }`}
      >
        {n}
      </span>
      <span className={dark ? "text-fibre-light" : "text-clay"}>{children}</span>
    </p>
  );
}
