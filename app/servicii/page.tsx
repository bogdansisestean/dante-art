import type { Metadata } from "next";
import ServicesSite from "../services-site";

export const metadata: Metadata = {
  title: "Servicii stomatologice în Baia Mare | Clinica Dantè Art",
  description:
    "Implanturi, ortodonție, fațete, albire, protetică și igienizare dentară în Baia Mare. Plan de tratament scris, cu toate costurile stabilite de la început.",
  alternates: {
    canonical: "/servicii",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "/#dentist",
  name: "Dantè Art",
  availableService: [
    "Implant dentar",
    "Ortodonție",
    "Fațete dentare",
    "Albire dentară",
    "Coroane și proteze",
    "Igienizare și prevenție",
    "Tratarea cariilor",
    "Tratament de canal",
    "Parodontologie",
    "Stomatologie pentru copii",
    "Extracții și chirurgie orală",
  ].map((name) => ({
    "@type": "Service",
    name,
    provider: { "@id": "/#dentist" },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesSite />
    </>
  );
}
