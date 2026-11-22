import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-5 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fibre">{children}</p>;
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="hero-backdrop text-paper">
      <Container className="py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fibre-light">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] font-medium md:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-paper/80">{intro}</p>}
      </Container>
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const styles =
    variant === "primary"
      ? "bg-leaf text-paper hover:bg-leaf-dark"
      : "border border-ink/25 text-ink hover:border-leaf hover:text-leaf";
  return (
    <Link href={href} className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${styles}`}>
      {children}
    </Link>
  );
}

/** Stand-in for photos until real ones are added. */
export function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`fibre-pattern relative flex items-end overflow-hidden rounded-2xl border border-line ${className}`}>
      <span className="m-3 rounded-full bg-paper/90 px-3 py-1 text-xs text-ink-soft">Photo: {label}</span>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink-soft">{children}</span>;
}
