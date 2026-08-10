import type { Metadata } from "next";
import ContactSite from "../contact-site";

export const metadata: Metadata = {
  title: "Contact | Clinică stomatologică Dantè Art — Baia Mare",
  description:
    "Programează o consultație la clinica stomatologică Dantè Art din Baia Mare. Ne găsești pe Aleea Uranus nr. 1. Contact prin telefon, WhatsApp sau formular online. Program: Luni – Vineri, 09:00 – 20:00.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactSite />;
}
