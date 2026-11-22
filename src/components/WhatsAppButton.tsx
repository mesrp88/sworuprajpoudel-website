import { site } from "@/content/site";

const message = encodeURIComponent("Hello Sworup, I found your website and would like to ask about ");

/** Floating WhatsApp chat button shown on every page. */
export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-lg shadow-ink/20 transition-transform hover:scale-105 md:right-6 md:bottom-6"
    >
      <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M16.04 3C9.4 3 4 8.36 4 14.97c0 2.11.56 4.17 1.62 5.98L4 29l8.27-1.58a12.1 12.1 0 0 0 3.77.6C22.68 28.02 28 22.66 28 16.05 28 9.44 22.68 3 16.04 3zm0 22.83c-1.2 0-2.39-.2-3.52-.6l-.5-.17-4.9.94.97-4.75-.33-.53a9.66 9.66 0 0 1-1.5-5.17c0-5.38 4.4-9.75 9.79-9.75 5.38 0 9.75 4.37 9.75 9.75 0 5.4-4.37 10.28-9.76 10.28zm5.37-7.3c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.3-.15-1.24-.46-2.37-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.03 1-1.03 2.45 0 1.44 1.05 2.84 1.2 3.03.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.35.19 1.85.12.57-.09 1.74-.71 1.99-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.56-.34z" />
      </svg>
      <span className="hidden pr-1 text-sm font-medium md:group-hover:inline">WhatsApp</span>
    </a>
  );
}
