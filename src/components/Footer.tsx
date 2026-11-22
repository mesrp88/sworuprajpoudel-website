import Link from "next/link";
import type { ReactNode } from "react";
import { nav, site } from "@/content/site";

const socialLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  facebook: "Facebook",
  instagram: "Instagram",
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
  phone: (
    <svg {...icon}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  ),
  chat: (
    <svg {...icon}>
      <path d="M4 20l1.4-4A8 8 0 1 1 8.6 19z" />
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
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-md bg-paper px-5 py-2.5 font-semibold text-ink transition-colors hover:bg-fibre-light"
          >
            Book a consultation
          </Link>
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
            <ContactRow icon={icons.phone}>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-paper">
                {site.phone}
              </a>
            </ContactRow>
            <ContactRow icon={icons.chat}>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                className="transition-colors hover:text-paper"
                target="_blank"
                rel="noopener"
              >
                Message on WhatsApp
              </a>
            </ContactRow>
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
                    className="inline-block rounded-md border border-paper/20 px-3 py-1.5 text-sm transition-colors hover:border-paper/60 hover:text-paper"
                  >
                    {socialLabels[name] ?? name}
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
