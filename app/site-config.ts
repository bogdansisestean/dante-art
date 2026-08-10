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
  // Pin fixed to exact clinic coordinates (47.6493962, 23.5558489) instead of
  // geocoding the street address, which Google was placing at the wrong spot.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=47.6493962%2C23.5558489",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=47.6493962,23.5558489&output=embed",
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

// Live /servicii/[slug] pages, surfaced in the header "Servicii" dropdown.
// Only treatments with a published page belong here, so no link 404s. Order
// mirrors the /servicii grid. Add a treatment once its page goes live.
export const servicesMenu = [
  { href: "/servicii/ortodontie-baia-mare", label: "Ortodonție" },
  { href: "/servicii/fatete-dentare-baia-mare", label: "Fațete dentare" },
  { href: "/servicii/albire-dentara-baia-mare", label: "Albire dentară" },
  { href: "/servicii/coroane-si-proteze-dentare-baia-mare", label: "Coroane și proteze" },
  { href: "/servicii/igienizare-dentara-baia-mare", label: "Igienizare și prevenție" },
  { href: "/servicii/tratament-de-canal-baia-mare", label: "Tratament de canal" },
];

export const footerNavigation = [
  { href: "/", label: "Acasă" },
  { href: "/despre", label: "Despre noi" },
  { href: "/echipa", label: "Echipa" },
  { href: "/tehnologie", label: "Tehnologie" },
  { href: "/preturi", label: "Prețuri" },
  { href: "/contact", label: "Contact" },
];

// As each /servicii/[nume-tratament] page goes live, its footer link points to
// the page. Treatments without a dedicated page yet (implant) link into the
// matching /preturi section so they never lead to a 404.
export const footerServices = [
  { href: "/preturi#implantologie", label: "Implant dentar" },
  { href: "/servicii/ortodontie-baia-mare", label: "Ortodonție" },
  { href: "/servicii/fatete-dentare-baia-mare", label: "Fațete dentare" },
  { href: "/servicii/albire-dentara-baia-mare", label: "Albire dentară" },
  { href: "/servicii/coroane-si-proteze-dentare-baia-mare", label: "Coroane și proteze" },
  { href: "/servicii/tratament-de-canal-baia-mare", label: "Tratament de canal" },
  { href: "/servicii/igienizare-dentara-baia-mare", label: "Igienizare și prevenție" },
];
