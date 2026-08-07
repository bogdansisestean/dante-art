import { clinic } from "./site-config";

export default function FloatingWhatsApp() {
  if (!clinic.whatsappHref) return null;

  return (
    <a
      href={clinic.whatsappHref}
      className="dante-floating-whatsapp"
      aria-label="Contactează-ne pe WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.3-4.3a8.5 8.5 0 1 1 15.7-4.4Z" />
        <path d="M8.1 7.6c.2-.4.4-.4.7-.4h.5l.9 2.1c.1.3 0 .5-.2.7l-.7.8a7.3 7.3 0 0 0 3.7 3.2c.3.1.5.1.7-.2l.9-1.1c.2-.3.5-.3.8-.2l2 .9" />
      </svg>
    </a>
  );
}
