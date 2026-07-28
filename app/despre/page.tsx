import type { Metadata } from "next";
import AboutSite from "../about-site";

export const metadata: Metadata = {
  title: "Despre noi | Clinica stomatologică Dantè Art Baia Mare",
  description:
    "Clinica stomatologică Dantè Art din Baia Mare, fondată de Dr. Ileana Zaharie. Stomatologie generală și pedodonție, cu timp alocat fiecărui pacient.",
  alternates: {
    canonical: "/despre",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "/despre#dr-ileana-zaharie",
  name: "Dr. Ileana Zaharie",
  jobTitle: "Medic stomatolog",
  description: "Medic stomatolog specializat în stomatologie generală și pedodonție.",
  worksFor: {
    "@id": "/#dentist",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutSite />
    </>
  );
}
