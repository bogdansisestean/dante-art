import type { Metadata } from "next";
import TechnologySite from "../technology-site";

export const metadata: Metadata = {
  title: "Tehnologie dentară digitală | CBCT și scanner 3D - Dantè Art Baia Mare",
  description:
    "Radiologie digitală cu CBCT, scanner intraoral 3D, unit dentar modern și albire profesională. Tehnologie certificată european la clinica Dantè Art din Baia Mare.",
  alternates: {
    canonical: "/tehnologie",
  },
};

export default function TechnologyPage() {
  return <TechnologySite />;
}
