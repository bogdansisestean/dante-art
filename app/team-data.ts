export type TeamMember = {
  slug: string;
  name: string;
  eyebrow: string;
  role: string;
  bio: string;
  quote: string;
  tags: string[];
  shortCard: string;
  image: string;
  imageAlt: string;
};

export const team: TeamMember[] = [
  {
    slug: "ileana-zaharie",
    name: "Dr. Ileana Zaharie",
    eyebrow: "Medic fondator",
    role: "Medic stomatolog · Fondator Dantè Art",
    bio: "Pentru Dr. Ileana Zaharie, medicina dentară înseamnă echilibrul dintre profesionalism, empatie și atenția acordată fiecărui detaliu. A fondat Dantè Art pornind de la un standard simplu, dar rar întâlnit: fiecare pacient primește un plan de tratament gândit pentru el, explicat fără grabă și fără termeni de dicționar. Coordonează cazurile complexe alături de întreaga echipă și rămâne implicată în fiecare etapă, de la prima consultație până la rezultatul final.",
    quote: "Mi-am propus să ofer pacienților o experiență bazată pe încredere, comunicare și tratamente personalizate.",
    tags: ["Stomatologie generală", "Planificare tratament", "Estetică dentară"],
    shortCard: "Fondatoarea clinicii. Profesionalism, empatie și atenție la fiecare detaliu.",
    image: "/team/ileana-zaharie.jpg",
    imageAlt: "Dr. Ileana Zaharie, medic stomatolog și fondator Dantè Art, clinica stomatologică din Baia Mare",
  },
  {
    slug: "hosu-oana-cristina",
    name: "Dr. Hosu Oana Cristina",
    eyebrow: "Medic specialist",
    role: "Medic specialist chirurgie dento-alveolară · Competență în implantologie",
    bio: "Dr. Oana Hosu tratează cazurile de chirurgie dento-alveolară și reabilitările orale complexe, cu competență în implantologie. Lucrează pe baza planificării digitale și a unui protocol riguros, în care fiecare etapă este anticipată înainte de a fi realizată. Formarea continuă și cursurile de specializare la care participă constant se traduc, pentru pacient, într-o intervenție previzibilă și o recuperare lină.",
    quote: "Îmi doresc ca fiecare pacient să beneficieze nu doar de un tratament de înaltă calitate, ci și de o experiență bazată pe empatie, transparență și încredere.",
    tags: ["Chirurgie orală", "Implantologie", "Reabilitări orale complexe"],
    shortCard: "Chirurgie dento-alveolară și implantologie, cu planificare digitală și precizie.",
    image: "/team/hosu-oana-cristina.jpg",
    imageAlt: "Dr. Hosu Oana Cristina, medic specialist chirurgie dento-alveolară la clinica Dantè Art din Baia Mare",
  },
  {
    slug: "detesan-mihaela-florina",
    name: "Dr. Deteșan Mihaela-Florina",
    eyebrow: "Medic specialist",
    role: "Medic specialist ortodonție și ortopedie dento-facială",
    bio: "Dr. Mihaela Deteșan se ocupă de ortodonție și ortopedie dento-facială, pentru copii, adolescenți și adulți. Fiecare plan pornește de la o analiză completă a mușcăturii și a proporțiilor faciale, nu doar de la poziția dinților, iar etapele sunt stabilite împreună cu pacientul, în funcție de obiectivele lui. Urmărește un rezultat care rămâne stabil în timp, nu doar corect în ziua în care aparatul este îndepărtat.",
    quote: "Un rezultat bun se vede în echilibru, nu doar în aliniere.",
    tags: ["Aparate dentare fixe și mobile", "Ortodonție pentru copii și adulți", "Ortopedie dento-facială"],
    shortCard: "Ortodonție și ortopedie dento-facială, pentru copii și adulți.",
    image: "/team/detesan-mihaela-florina.jpg",
    imageAlt: "Dr. Deteșan Mihaela-Florina, medic specialist ortodonție și ortopedie dento-facială, Baia Mare",
  },
  {
    slug: "giz-andra-maria",
    name: "Gîz Andra Maria",
    eyebrow: "Asistență medicală",
    role: "Asistent medical generalist · Specialist inhalosedare · Front desk",
    bio: "Cu peste opt ani de experiență în domeniul medical, Andra Gîz întâmpină pacienții la recepție și îi însoțește apoi în cabinet. Este specializată în inhalosedare, sedarea conștientă care permite parcurgerea tratamentului în stare de relaxare, fără anestezie generală. Determinată, zâmbitoare și energică, transformă prin empatie și comunicare o programare stomatologică într-o experiență liniștită.",
    quote: "Grijă cu suflet, profesionalism cu zâmbet.",
    tags: ["Inhalosedare (sedare conștientă)", "Asistență la tratament", "Programări"],
    shortCard: "Peste 8 ani de experiență și specializare în sedare conștientă.",
    image: "/team/giz-andra-maria.jpg",
    imageAlt: "Gîz Andra Maria, asistent medical generalist și specialist inhalosedare, clinica Dantè Art Baia Mare",
  },
];
