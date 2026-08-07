import type { Metadata } from "next";
import TeamSite from "../team-site";
import { team } from "../team-data";

export const metadata: Metadata = {
  title: "Echipa Dantè Art | Medici stomatologi în Baia Mare",
  description:
    "Medici specialiști în chirurgie orală, implantologie și ortodonție, alături de o echipă dedicată confortului fiecărui pacient. Faceți cunoștință cu echipa Dantè Art.",
  alternates: {
    canonical: "/echipa",
  },
};

const teamSchema = team.map((member) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `/echipa#${member.slug}`,
  name: member.name,
  jobTitle: member.role,
  description: member.bio,
  worksFor: {
    "@id": "/#dentist",
  },
}));

export default function TeamPage() {
  return (
    <>
      {teamSchema.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <TeamSite />
    </>
  );
}
