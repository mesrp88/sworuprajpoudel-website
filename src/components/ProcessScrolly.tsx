"use client";

import { useEffect, useRef, useState } from "react";
import { ProcessIcon } from "@/components/Icons";

type Step = { n: string; icon: string; title: string; text: string };

/**
 * Sticky walkthrough: on large screens a panel on the left stays in place and
 * follows the step being read on the right. On small screens it is a plain list.
 */
export function ProcessScrolly({ steps }: { steps: readonly Step[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const step = steps[active];
  const progress = ((active + 1) / steps.length) * 100;

  return (
    <div className="mt-14 lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      {/* Sticky panel (large screens) */}
      <div className="hidden lg:block">
        <div className="sticky top-[calc(var(--header-h)+3rem)] overflow-hidden rounded-md border border-line bg-paper">
          <div className="h-1 bg-line">
            <div className="h-full bg-leaf transition-[width] duration-500" style={{ width: `${progress}%` }} />
          </div>
          <div className="grid aspect-[5/4] place-items-center fibre-pattern">
            <div className="grid h-56 w-56 place-items-center rounded-full border border-line bg-paper text-leaf shadow-sm">
              <span key={step.n} className="scale-[2.6] animate-[fade-in_0.5s_ease-out]">
                <ProcessIcon name={step.icon} />
              </span>
            </div>
          </div>
          <div className="flex items-baseline justify-between border-t border-line px-6 py-4 font-display">
            <span className="text-lg font-semibold">{step.title}</span>
            <span className="text-sm text-clay">
              {step.n} / {String(steps.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Steps */}
      <ol className="space-y-12 lg:space-y-0">
        {steps.map((s, i) => (
          <li
            key={s.n}
            data-index={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={`flex flex-col justify-center transition-opacity duration-500 lg:min-h-[55vh] ${
              i === active ? "lg:opacity-100" : "lg:opacity-35"
            }`}
          >
            <div className="flex items-center gap-4 text-leaf lg:hidden">
              <ProcessIcon name={s.icon} />
            </div>
            <p className="mt-3 font-display text-sm font-medium text-clay lg:mt-0">
              {s.n} / {String(steps.length).padStart(2, "0")}
            </p>
            <h3 className="mt-1 font-display text-3xl font-semibold md:text-4xl">{s.title}</h3>
            <p className="mt-3 max-w-md text-lg text-ink-soft">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
