import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ProcessIcon } from "@/components/Icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-5 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-display text-base font-medium text-clay">{children}</p>;
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="hero-backdrop text-paper">
      <Container className="py-20 md:py-28">
        <p className="font-display text-base font-medium text-fibre-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold md:text-7xl">{title}</h1>
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
    <Link href={href} className={`inline-flex items-center gap-2 rounded-md px-5 py-3 font-display text-[0.95rem] font-semibold transition-colors ${styles}`}>
      {children}
    </Link>
  );
}

/** Stand-in for photos until real ones are added. */
export function PhotoPlaceholder({ label, className = "", icon }: { label: string; className?: string; icon?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`fibre-pattern relative grid place-items-center overflow-hidden rounded-md border border-line ${className}`}
    >
      {icon && (
        <span className="scale-[2.4] text-leaf/40">
          <ProcessIcon name={icon} />
        </span>
      )}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded border border-line bg-paper px-2.5 py-0.5 font-display text-xs text-ink-soft">{children}</span>;
}

/** A real photo filling its box. Pass object-position to control the crop. */
export function Photo({
  src,
  alt,
  className = "",
  position = "center",
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-md ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" style={{ objectPosition: position }} />
    </div>
  );
}

/** Uses the photo when there is one, otherwise the striped placeholder. */
export function Media({
  src,
  alt,
  className = "",
  position,
  icon,
}: {
  src?: string;
  alt: string;
  className?: string;
  position?: string;
  icon?: string;
}) {
  return src ? (
    <Photo src={src} alt={alt} className={className} position={position} />
  ) : (
    <PhotoPlaceholder label={alt} className={className} icon={icon} />
  );
}
