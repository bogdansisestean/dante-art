import type { Metadata } from "next";
import ContactSite from "../contact-site";

export const metadata: Metadata = {
  title: "Contact | Clinică stomatologică Dantè Art — Baia Mare",
  description:
    "Programări la clinica stomatologică Dante Art din Baia Mare, Aleea Uranus nr. 1. Luni – Vineri, 09:00 – 20:00. Telefon, WhatsApp și formular de contact.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactSite />;
}
