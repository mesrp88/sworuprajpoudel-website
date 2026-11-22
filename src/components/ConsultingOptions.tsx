import Link from "next/link";
import { consultingOptions } from "@/content/consulting";

/** The four ways to work together, in the order a client usually goes through them. */
export function ConsultingOptions() {
  return (
    <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {consultingOptions.map((o) => (
        <li
          key={o.slug}
          id={o.slug}
          className={`flex scroll-mt-24 flex-col p-6 md:p-7 ${o.free ? "bg-leaf text-paper" : "bg-paper"}`}
        >
          <h3 className="font-display text-2xl font-semibold">{o.name}</h3>
          <p className={`mt-1 font-display text-sm font-medium ${o.free ? "text-fibre-light" : "text-clay"}`}>
            {o.length}
          </p>
          <p className={`mt-4 text-[0.95rem] ${o.free ? "text-paper/85" : "text-ink-soft"}`}>{o.summary}</p>
          <ul className="mt-5 space-y-2 text-sm">
            {o.includes.map((i) => (
              <li key={i} className="flex gap-2.5">
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${o.free ? "bg-fibre-light" : "bg-leaf"}`} />
                {i}
              </li>
            ))}
          </ul>
          <p className={`mt-5 border-t pt-4 text-sm italic ${o.free ? "border-paper/20 text-paper/85" : "border-line text-ink-soft"}`}>
            {o.outcome}
          </p>
          <div className="mt-auto pt-6">
            <Link
              href={`/contact?option=${o.slug}`}
              className={`inline-flex w-full justify-center rounded-md px-4 py-3 font-display font-semibold transition-colors ${
                o.free
                  ? "bg-paper text-ink hover:bg-fibre-light"
                  : "border border-ink/25 text-ink hover:border-leaf hover:text-leaf"
              }`}
            >
              {o.cta}
            </Link>
          </div>
        </li>
      ))}
    </ol>
  );
}
