export type EquipmentBlock = {
  eyebrow: string;
  title: string;
  paragraph: string;
  points: string[];
  image: string;
  alt: string;
  reverse: boolean;
  contain?: boolean;
  // Short label + text used by the home-page technology teaser cards.
  cardTitle: string;
  cardText: string;
};

export const equipmentBlocks: EquipmentBlock[] = [
  {
    eyebrow: "Diagnostic",
    title: "Diagnostic în trei dimensiuni.",
    paragraph:
      "Departamentul de radiologie este dotat cu tehnologie digitală modernă, inclusiv CBCT — tomografia computerizată dentară, care oferă o imagine tridimensională a dinților și a oaselor maxilare. Investigația durează câteva secunde și se realizează cu o doză redusă de radiații. Pe baza ei stabilim un diagnostic corect și planificăm intervențiile complexe, în special implanturile, cu o precizie pe care radiografia clasică nu o permite.",
    points: ["Imagine 3D completă (CBCT)", "Doză redusă de radiații", "Rezultat disponibil imediat"],
    image: "/technology/radiologie-cbct.jpg",
    alt: "Aparat CBCT pentru tomografie computerizată dentară în clinica Dantè Art din Baia Mare",
    reverse: false,
    cardTitle: "Radiologie digitală",
    cardText:
      "Tehnologie digitală modernă, inclusiv CBCT, pentru o imagine 3D a dinților și a oaselor maxilare, cu o doză redusă de radiații.",
  },
  {
    eyebrow: "Amprentare digitală",
    title: "Amprente fără amprente.",
    paragraph:
      "Scannerul intraoral digital înlocuiește amprentele clasice cu o scanare rapidă și confortabilă, fără materialele de amprentare și fără disconfortul asociat acestora. În câteva minute obținem o imagine 3D precisă a arcadelor, pe baza căreia planificăm tratamentul și realizăm lucrări protetice cu o potrivire exactă. Imaginea este vizibilă pe ecran în timp real, astfel încât planul de tratament poate fi discutat împreună cu pacientul.",
    points: ["Fără materiale de amprentare", "Precizie 3D", "Rezultat vizibil pe ecran, pe loc"],
    image: "/technology/scanner-intraoral.webp",
    alt: "Scanner intraoral digital utilizat pentru amprente 3D la clinica Dantè Art",
    reverse: true,
    cardTitle: "Scanner intraoral",
    cardText:
      "Amprente digitale rapide și confortabile, fără materialele clasice de amprentare, cu precizie 3D vizibilă pe ecran.",
  },
  {
    eyebrow: "Cabinet",
    title: "Un cabinet gândit până la ultimul detaliu.",
    paragraph:
      "Am ales un unit dentar de ultimă generație, certificat conform normelor europene, pentru tratamente realizate la cele mai înalte standarde. Poziționarea ergonomică, instrumentarul integrat și sistemele proprii de dezinfecție permit intervenții precise, în condiții de igienă riguros controlată. De la sprijinul pentru cap până la iluminarea câmpului de lucru, fiecare detaliu este gândit pentru o experiență modernă și lipsită de stres.",
    points: ["Confort ergonomic", "Instrumentar integrat", "Certificare europeană"],
    image: "/technology/unit-dentar.jpg",
    alt: "Unit dentar modern în cabinetul clinicii stomatologice Dantè Art, Baia Mare",
    reverse: false,
    cardTitle: "Unit dentar de ultimă generație",
    cardText:
      "Unit dentar certificat european, cu poziționare ergonomică și sisteme proprii de dezinfecție, pentru intervenții precise.",
  },
  {
    eyebrow: "Estetică dentară",
    title: "Albire profesională, într-o singură ședință.",
    paragraph:
      "Lampa profesională de albire, certificată conform normelor europene, permite realizarea albirii în cabinet într-o singură ședință. Protocolul este stabilit de medic și adaptat sensibilității fiecărui pacient, iar întreaga procedură se desfășoară sub supraveghere. Rezultatul este o nuanță naturală, obținută eficient și în condiții de siguranță.",
    points: ["Rezultat într-o singură ședință", "Protocol supravegheat medical", "Certificare europeană"],
    image: "/technology/lampa-albire.jpg",
    alt: "Lampă profesională de albire dentară la clinica Dantè Art",
    reverse: true,
    contain: true,
    cardTitle: "Albire profesională",
    cardText:
      "Lampă profesională de albire, certificată european, pentru rezultate într-o singură ședință, sub supraveghere medicală.",
  },
];
