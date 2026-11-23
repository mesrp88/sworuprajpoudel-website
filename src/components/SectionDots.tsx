"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

/** Right-edge progress dots: one per homepage chapter, highlighting the one in view. */
export function SectionDots({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = items.map((it) => document.getElementById(it.id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive((e.target as HTMLElement).id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav aria-label="Page sections" className="fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 xl:block">
      <ul className="flex flex-col items-end gap-2.5">
        {items.map((it) => {
          const on = it.id === active;
          return (
            <li key={it.id}>
              <a href={`#${it.id}`} className="group flex items-center gap-3" aria-current={on ? "true" : undefined}>
                <span
                  className={`rounded bg-ink px-2 py-0.5 font-display text-xs whitespace-nowrap text-paper transition-opacity ${
                    on ? "opacity-0 group-hover:opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
                >
                  {it.label}
                </span>
                <span
                  className={`block rounded-full ring-2 ring-paper/70 transition-all ${
                    on ? "h-3 w-3 bg-clay" : "h-2 w-2 bg-fibre/70 group-hover:bg-fibre"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
