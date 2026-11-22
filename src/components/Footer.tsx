import Link from "next/link";
import { nav, site } from "@/content/site";

const socialLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  facebook: "Facebook",
  instagram: "Instagram",
};

export function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);
  return (
    <footer className="mt-24 bg-ink text-paper/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-paper">{site.name}</p>
          <p className="mt-2 text-sm">{site.role}</p>
          <p className="mt-4 max-w-xs text-sm text-paper/65">
            Consulting on compostable hygiene products from natural fibres, and the machines that make them.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-fibre-light">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-paper">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="hover:text-paper">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-fibre-light">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{site.location}</li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-paper">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${site.whatsapp}`} className="hover:text-paper" target="_blank" rel="noopener">
                WhatsApp
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-paper">
                  {site.email}
                </a>
              </li>
            )}
          </ul>
          {socials.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-4 text-sm">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener" className="underline-offset-4 hover:underline">
                    {socialLabels[name] ?? name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-t border-paper/10 py-5 text-center text-xs text-paper/50">
        © <CopyrightYear /> {site.name} · Photos courtesy of NIDISI Nepal
      </div>
    </footer>
  );
}

async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
