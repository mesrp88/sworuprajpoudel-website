# sworuprajpoudel.com.np

Personal consultancy website of **Sworup Raj Poudel**: compostable hygiene products from natural fibres (banana fibre, sugarcane bagasse, hemp), plus machinery design, selection and sourcing.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where the content lives

All text is in `src/content/`:

| File | What it holds |
| --- | --- |
| `site.ts` | Name, bio, contact details, social links, homepage stats |
| `services.ts` | The three service areas |
| `materials.ts` | Banana fibre, bagasse, hemp pages |
| `projects.ts` | Case studies (marked `draft: true` until finished) |
| `posts.ts` | Insights / blog articles |

Pages read content only through `src/lib/content.ts`, so a CMS (e.g. Sanity) can replace these files later without changing the pages.

Photos: put images in `public/images/` and replace the `PhotoPlaceholder` components with `next/image`.

## Contact form

The form (`src/app/contact/`) validates input on the server and emails each enquiry using [Resend](https://resend.com). Set these environment variables in your hosting dashboard:

| Variable | Example |
| --- | --- |
| `RESEND_API_KEY` | `re_...` |
| `CONTACT_TO_EMAIL` | where enquiries should arrive |
| `CONTACT_FROM_EMAIL` | optional, e.g. `Website <hello@sworuprajpoudel.com.np>` once the domain is verified in Resend |

Without them, enquiries are only logged to the server console.

## Deploy (Vercel)

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project**, import the repository and deploy.
3. Add the environment variables above.
4. Under **Settings → Domains**, add `sworuprajpoudel.com.np` and update the DNS records (currently on Cloudflare) as Vercel instructs.

## Roadmap

- [ ] Real photos, CV and case-study details
- [ ] Connect a CMS with an admin login for editing content
- [ ] Store enquiries in a database
- [ ] Supplier / machinery catalogue
