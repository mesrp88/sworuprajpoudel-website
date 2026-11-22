// Simple line illustrations for the process strip.
const common = {
  width: 56,
  height: 56,
  viewBox: "0 0 56 56",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ProcessIcon({ name }: { name: string }) {
  switch (name) {
    case "leaf":
      return (
        <svg {...common} aria-hidden>
          <path d="M28 50V22" />
          <path d="M28 30c-8 0-14-6-14-16 8 0 14 6 14 16z" />
          <path d="M28 24c6 0 12-5 12-14-7 0-12 5-12 14z" />
          <path d="M18 50h20" />
        </svg>
      );
    case "extract":
      return (
        <svg {...common} aria-hidden>
          <circle cx="20" cy="20" r="8" />
          <circle cx="36" cy="20" r="8" />
          <path d="M28 28v6" />
          <path d="M18 38c4 3 6 8 6 12M28 38v12M38 38c-4 3-6 8-6 12" />
        </svg>
      );
    case "treat":
      return (
        <svg {...common} aria-hidden>
          <path d="M14 18h28l-3 30H17z" />
          <path d="M16 30c4-3 8 3 12 0s8 3 12 0" />
          <path d="M22 10c0 3 3 3 3 6M30 8c0 3 3 3 3 6" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common} aria-hidden>
          <path d="M8 22l20-10 20 10-20 10z" />
          <path d="M8 30l20 10 20-10" />
          <path d="M8 38l20 10 20-10" />
        </svg>
      );
    case "machine":
      return (
        <svg {...common} aria-hidden>
          <circle cx="18" cy="24" r="9" />
          <circle cx="18" cy="24" r="3" />
          <circle cx="38" cy="24" r="9" />
          <circle cx="38" cy="24" r="3" />
          <path d="M6 44h44M10 44V36h36v8" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-hidden>
          <path d="M6 34h44" />
          <path d="M10 40h6M22 44h8M36 40h8M14 48h4M40 48h4" />
          <path d="M28 34V20" />
          <path d="M28 24c-5 0-8-4-8-10 5 0 8 4 8 10zM28 22c4 0 7-3 7-8-4 0-7 3-7 8z" />
        </svg>
      );
  }
}
