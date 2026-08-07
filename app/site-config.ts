// Single source of truth for clinic contact data, social links and legal/company
// details. Complete only with information confirmed by the clinic owner.

export type ClinicDetails = {
  city: string;
  streetAddress?: string;
  phoneDisplay?: string;
  phoneHref?: string;
  whatsappHref?: string;
  email?: string;
  weekdayHours?: string;
  saturdayHours?: string;
  sundayHours?: string;
  mapsUrl?: string;
  mapsEmbedUrl?: string;
};

export const clinic: ClinicDetails = {
  city: "Baia Mare",
  streetAddress: "Aleea Uranus, Nr. 1, Baia Mare, Maramureș",
  phoneDisplay: "0770 733 891",
  phoneHref: "tel:+40770733891",
  whatsappHref: "https://wa.me/40770733891",
  email: "contact.danteart@gmail.com",
  weekdayHours: "09:00–20:00",
  saturdayHours: "Închis",
  sundayHours: "Închis",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Aleea+Uranus+1%2C+Baia+Mare%2C+Maramure%C8%99",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Aleea%20Uranus%201%2C%20Baia%20Mare%2C%20Maramure%C8%99&output=embed",
};

// Legal entity behind the Dantè Art brand.
export const company = {
  legalName: "DOCTORTIM S.R.L.",
  brand: "Dantè Art",
  cui: "50303647",
  regCom: "J2024001014244",
  address: "Aleea Uranus, Nr. 1, Baia Mare, Maramureș",
};

// Builds a mailto: link so contact/appointment forms can hand the message off
// to whatever mail app is set as default on the visitor's device — no backend/SMTP involved.
export function buildMailtoLink(to: string, subject: string, lines: (string | false | undefined)[]) {
  const body = lines.filter((line): line is string => Boolean(line)).join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type SocialName = "facebook" | "instagram" | "tiktok";

export const socialLinks: { name: SocialName; label: string; href: string }[] = [
  {
    name: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/19LahH3kGn/?mibextid=wwXIfr",
  },
  {
    name: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/clinicadanteart?igsh=Mm15ZDN5NHV1MHFk",
  },
  {
    name: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@clinicadanteart?_r=1&_t=ZN-98a7h28Qd7P",
  },
];

// ANPC – Soluționarea Alternativă a Litigiilor. Official badge self-hosted in /public.
export const anpc = {
  href: "https://anpc.ro/ce-este-sal/",
  banner: "/anpc-sal.png",
  label: "ANPC – Soluționarea Alternativă a Litigiilor",
};

export const footerNavigation = [
  { href: "/", label: "Acasă" },
  { href: "/despre", label: "Despre noi" },
  { href: "/echipa", label: "Echipa" },
  { href: "/tehnologie", label: "Tehnologie" },
  { href: "/preturi", label: "Prețuri" },
  { href: "/contact", label: "Contact" },
];

// Individual /servicii/[nume-tratament] pages aren't built yet — link into the
// matching /preturi section instead of a 404 until each page goes live.
export const footerServices = [
  { href: "/preturi#implantologie", label: "Implant dentar" },
  { href: "/preturi#protetica", label: "Fațete dentare" },
  { href: "/preturi#albire", label: "Albire dentară" },
  { href: "/preturi#ortodontie", label: "Ortodonție" },
  { href: "/preturi#protetica", label: "Coroane și proteze" },
  { href: "/preturi#igienizare", label: "Igienizare și prevenție" },
];
