import type { ReactNode } from "react";

/**
 * Formerly a scroll fade-in. Section-by-section fades were removed in favour of a
 * single hero entrance; kept as a plain wrapper so pages don't need restructuring.
 */
export function Reveal({ children, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={className}>{children}</div>;
}
