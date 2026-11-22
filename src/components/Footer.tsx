import Link from "next/link";
import type { ReactNode } from "react";
import { nav, site } from "@/content/site";

const socialLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  facebook: "Facebook",
  instagram: "Instagram",
};

const socialIcons: Record<string, ReactNode> = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.25H3zM9.75 9.75h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.03c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21h-4z" />
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
  ),
  facebook: (
    <path d="M22 12.06A10 10 0 1 0 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22A10 10 0 0 0 22 12.06z" />
  ),
  instagram: (
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85C2.42 3.92 3.94 2.42 7.15 2.27 8.42 2.21 8.8 2.2 12 2.2zm0 4.86a4.94 4.94 0 1 0 0 9.88 4.94 4.94 0 0 0 0-9.88zm0 8.15a3.21 3.21 0 1 1 0-6.42 3.21 3.21 0 0 1 0 6.42zm5.13-9.5a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3z" />
  ),
};

const icon = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const icons = {
  pin: (
    <svg {...icon}>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  mail: (
    <svg {...icon}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
};

function ContactRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0 text-fibre-light">{icon}</span>
      <span className="min-w-0 break-words">{children}</span>
    </li>
  );
}

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  const links = [...nav, { href: "/contact", label: "Contact" }];

  return (
    <footer className="mt-24 bg-leaf-night font-display text-paper/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-12 md:grid-cols-12 md:gap-8">
        {/* Who */}
        <div className="md:col-span-5">
          <p className="text-3xl font-semibold text-paper [font-stretch:85%]">{site.name}</p>
          <p className="mt-1 text-fibre-light">{site.role}</p>
          <p className="mt-5 max-w-sm font-sans text-[0.95rem] leading-relaxed text-paper/65">
            Consulting on compostable hygiene products from natural fibres, and the machines that make them.
          </p>
        </div>

        {/* Pages */}
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="font-medium text-paper">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1 lg:grid-cols-2">
            {links.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-paper">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="md:col-span-4">
          <p className="font-medium text-paper">Get in touch</p>
          <ul className="mt-4 space-y-3">
            <ContactRow icon={icons.pin}>{site.location}</ContactRow>
            {site.email && (
              <ContactRow icon={icons.mail}>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-paper">
                  {site.email}
                </a>
              </ContactRow>
            )}
          </ul>
          {socials.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener"
                    aria-label={socialLabels[name] ?? name}
                    title={socialLabels[name] ?? name}
                    className="grid h-11 w-11 place-items-center rounded-md border border-paper/20 text-paper/80 transition-colors hover:border-fibre-light hover:text-fibre-light"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      {socialIcons[name]}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 pr-24 text-sm text-paper/50 sm:flex-row sm:justify-between">
          <p>
            © <CopyrightYear /> {site.name}
          </p>
          <p>Photos courtesy of NIDISI Nepal</p>
        </div>
      </div>
    </footer>
  );
}

async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
