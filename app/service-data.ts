// Content for the individual /servicii/[slug] pages, transcribed from the clinic
// owner's approved copy ("Pagini Servicii"). One entry per live service page.
//
// Price figures come from the list valid starting 01.08.2026 and must be kept in
// sync with the /preturi page whenever tariffs change.

export type ServiceCost = [service: string, price: string];

export type ServiceFaq = { question: string; answer: string };

export type ServiceContent = {
  slug: string;
  // schema.org MedicalProcedure name — the treatment itself, without the city.
  procedureName: string;
  eyebrow: string;
  // Last breadcrumb crumb + BreadcrumbList label. Defaults to `eyebrow` when the
  // hero supratitle (category) differs from the page name.
  breadcrumb?: string;
  title: string;
  intro: string;
  // Optional hero photo. When present, the hero renders a two-column layout with
  // the image framed on the right; otherwise the hero stays a plain navy band.
  heroImage?: { src: string; alt: string };
  // Three short facts shown in the quick band. "label — value" is split on the
  // em dash so the label renders emphasised; plain strings render as-is.
  quickFacts: string[];
  need: { heading: string; paragraph?: string; points?: string[] };
  // Optional block rendered between "când ai nevoie" and the process steps
  // (used by dantură fixă for the All-on-4 / All-on-6 comparison cards).
  variantBlock?: {
    eyebrow: string;
    heading: string;
    intro: string;
    cards: { title: string; text: string }[];
    footnote?: string;
  };
  // Optional override for the process section H2 (defaults to a generic label).
  processHeading?: string;
  process: string[];
  // Optional narrative block rendered right before the costs table (used by
  // protetică for the "Lucrări sprijinite pe implanturi" section).
  extraBlock?: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    link?: { label: string; href: string };
  };
  costs: { rows: ServiceCost[]; note?: string };
  faqs: ServiceFaq[];
  // Optional override for the closing CTA heading + paragraph.
  cta?: { heading: string; paragraph: string };
  // Target for the "Vezi prețurile" button (defaults to /preturi).
  pricesHref?: string;
  // Internal links to sibling service pages, shown as a "Vezi și" band.
  relatedLinks?: { label: string; href: string }[];
  meta: { title: string; description: string };
};

export const services: ServiceContent[] = [
  {
    slug: "ortodontie-baia-mare",
    procedureName: "Ortodonție",
    eyebrow: "Ortodonție",
    title: "Aparat dentar în Baia Mare",
    intro:
      "Aparatul dentar aliniază dinții și corectează felul în care se închide mușcătura, la copii și la adulți deopotrivă. Dincolo de aspect, o mușcătură dezechilibrată uzează dinții neuniform și îngreunează igienizarea. Tratamentul este condus de medic specialist în ortodonție și ortopedie dento-facială.",
    quickFacts: [
      "Preț — de la 1.500 lei aparatul, pentru ambele arcade",
      "Variante — metalic, din safir sau mobilizabil",
      "Vârstă — primul control ortodontic este recomandat în jurul vârstei de 7 ani",
    ],
    need: {
      heading: "Nu doar dinții strâmbi cer aparat",
      paragraph:
        "Ortodonția corectează poziția dinților, dar și relația dintre cele două arcade. Un aparat pus la timp poate evita mai târziu uzura dinților, tratamente protetice și probleme la nivelul articulației.",
      points: [
        "dinți înghesuiți, suprapuși sau cu spații între ei;",
        "o mușcătură care nu se închide corect;",
        "un dinte ieșit din arcadă sau blocat în erupție;",
        "un copil la care dinții permanenți erup înghesuit;",
        "un adult care a purtat aparat, dar dinții s-au mișcat la loc.",
      ],
    },
    process: [
      "Consultație, fotografii și scanare — analizăm poziția dinților și mușcătura, apoi primești planul de tratament, cu durata estimată și costul total.",
      "Montarea aparatului — se face pe ambele arcade, într-o singură ședință.",
      "Activările — la 4 – 6 săptămâni, ședințe scurte în care aparatul este reglat.",
      "Contenția — după îndepărtarea aparatului, o contenție fixă sau mobilă menține rezultatul obținut.",
    ],
    costs: {
      rows: [
        ["Consultație ortodonție", "300"],
        ["Fotografii și scanare", "300"],
        ["Aparat ortodontic metalic", "3.000"],
        ["Aparat ortodontic safir", "4.000"],
        ["Aparat ortodontic mobilizabil", "1.500"],
        ["Activare aparat metalic (per arcadă)", "150"],
        ["Activare aparat estetic (per arcadă)", "170"],
        ["Contenție fixă / mobilă", "300 / 550"],
      ],
      note: "Prețul aparatului include montarea pe ambele arcade. Activările periodice se tarifează separat.",
    },
    faqs: [
      {
        question: "Cât durează un tratament ortodontic?",
        answer:
          "În general între 1 și 2 ani, în funcție de complexitatea cazului și de vârstă. Durata estimată ți-o comunicăm de la prima consultație, în planul de tratament.",
      },
      {
        question: "Metalic sau safir?",
        answer:
          "Diferența este estetică: aparatul din safir este translucid și mult mai discret. Ca funcționare și ca durată de tratament, cele două sunt comparabile.",
      },
      {
        question: "Se poate pune aparat la adulți?",
        answer:
          "Da. Dinții se pot alinia la orice vârstă, cu condiția ca gingia și osul să fie sănătoase. Evaluăm asta la consultație.",
      },
    ],
    meta: {
      title: "Aparat dentar Baia Mare | Ortodonție copii și adulți — Dantè Art",
      description:
        "Aparat dentar metalic, safir sau mobilizabil, pentru copii și adulți, în Baia Mare. De la 1.500 lei. Tratament condus de medic specialist în ortodonție.",
    },
  },
  {
    slug: "igienizare-dentara-baia-mare",
    procedureName: "Igienizare dentară",
    eyebrow: "Prevenție",
    title: "Igienizare dentară în Baia Mare",
    intro:
      "Detartrajul și periajul profesional îndepărtează tartrul și placa bacteriană pe care periajul de acasă nu le mai poate curăța, iar procedura Air Flow elimină petele lăsate de cafea, ceai sau fumat. O ședință la fiecare șase luni previne cariile și boala parodontală, adică exact tratamentele scumpe.",
    quickFacts: [
      "Preț — de la 300 lei",
      "Durată — în general sub o oră",
      "Frecvență — o ședință la fiecare șase luni",
    ],
    need: {
      heading: "Semne că e momentul",
      paragraph:
        "Tartrul se depune și la un periaj corect, în zonele greu accesibile. Odată întărit, nu mai poate fi îndepărtat acasă, iar sub el gingia se inflamează.",
      points: [
        "gingiile sângerează la periaj sau la ață dentară;",
        "observi depuneri gălbui la baza dinților;",
        "ai respirație neplăcută constantă;",
        "au trecut mai mult de șase luni de la ultima ședință.",
      ],
    },
    process: [
      "Detartraj cu ultrasunete — îndepărtăm tartrul de pe suprafața dinților și de sub marginea gingiei.",
      "Air Flow — un jet fin de particule și apă care ridică petele de cafea, ceai sau tutun.",
      "Periaj profesional și fluorizare — netezim suprafața dintelui și îl protejăm împotriva cariilor.",
    ],
    costs: {
      rows: [
        ["Detartraj, periaj profesional și Air Flow", "400"],
        ["Detartraj și periaj profesional", "300"],
        ["Air Flow", "200"],
        ["Periaj profesional", "100"],
        ["Detartraj copii (două arcade)", "250"],
        ["Fluorizare", "100"],
        ["Consultație stomatologică simplă", "100"],
      ],
      note: "Pachetul complet include detartrajul, periajul și Air Flow-ul.",
    },
    faqs: [
      {
        question: "Doare?",
        answer:
          "În general procedura este suportată bine. Poate apărea o sensibilitate ușoară dacă gingia este deja inflamată sau dacă tartrul s-a depus de mult timp.",
      },
      {
        question: "Detartrajul slăbește dinții?",
        answer:
          "Nu. Senzația de dinți „mai mișcați” după prima ședință apare pentru că tartrul care îi bloca mecanic a fost îndepărtat, iar gingia inflamată se retrage. Este un semn că detartrajul era necesar.",
      },
      {
        question: "Cât de des am nevoie?",
        answer:
          "La fiecare șase luni, ca regulă generală. Fumătorii și pacienții cu probleme gingivale pot avea nevoie mai des.",
      },
    ],
    meta: {
      title: "Igienizare dentară Baia Mare | Detartraj și Air Flow — Dantè Art",
      description:
        "Detartraj, periaj profesional și Air Flow în Baia Mare, de la 300 lei. Cea mai simplă metodă de a preveni cariile și boala parodontală.",
    },
  },
  {
    slug: "albire-dentara-baia-mare",
    procedureName: "Albire dentară",
    eyebrow: "Estetică dentară",
    title: "Albire dentară în Baia Mare",
    intro:
      "Albirea profesională îndepărtează petele acumulate în timp și deschide nuanța dinților. Se poate face în cabinet, cu lampă, într-o singură ședință, sau acasă, cu gutiere realizate special după amprenta ta. Înainte de albire recomandăm o ședință de igienizare, pentru ca substanța să acționeze uniform pe fiecare dinte.",
    quickFacts: [
      "Preț — 850 lei acasă, 1.000 lei în cabinet",
      "În cabinet — o singură ședință",
      "Realizată de medic, cu protejarea gingiei",
    ],
    need: {
      heading: "Ce poate și ce nu poate face albirea",
      paragraph:
        "Albirea acționează pe dinții naturali, ridicând petele acumulate din cafea, ceai, vin sau tutun și nuanța gălbuie care apare odată cu vârsta. Nu modifică însă culoarea lucrărilor existente: coroanele, fațetele și obturațiile rămân la nuanța lor. Dacă ai lucrări în zona frontală, discutăm la consultație ordinea corectă a etapelor.",
    },
    process: [
      "Consultație și igienizare — verificăm sănătatea dinților și îndepărtăm depunerile, ca substanța să acționeze uniform.",
      "Albirea — protejăm gingia, aplicăm substanța și activăm procedura cu lampa. Pentru varianta la domiciliu, primești gutierele și substanța, cu instrucțiuni clare.",
      "Primele zile — eviți alimentele și băuturile puternic colorate, ca rezultatul să se stabilizeze.",
    ],
    costs: {
      rows: [
        ["Albire dentară profesională în cabinet, cu lampă", "1.000"],
        ["Albire dentară la domiciliu, cu gutiere personalizate", "850"],
        ["Detartraj, periaj profesional și Air Flow", "400"],
        ["Consultație de specialitate cu cameră intraorală și fotografii", "250"],
      ],
      note: "Igienizarea nu este inclusă în prețul albirii, dar o recomandăm înainte.",
    },
    faqs: [
      {
        question: "Apare sensibilitate după albire?",
        answer:
          "Poate apărea o sensibilitate temporară la cald și rece, care scade în zilele următoare. Îți recomandăm o pastă de dinți pentru sensibilitate în această perioadă.",
      },
      {
        question: "Cât ține rezultatul?",
        answer:
          "Depinde de igienă și de obiceiuri: cafeaua, ceaiul negru, vinul roșu și fumatul repigmentează dinții mai repede. În general, rezultatul se menține unul până la doi ani.",
      },
      {
        question: "În cabinet sau acasă?",
        answer:
          "În cabinet obții rezultatul într-o singură ședință, sub supravegherea medicului. Acasă, rezultatul apare treptat, în două-trei săptămâni de purtare a gutierelor.",
      },
    ],
    meta: {
      title: "Albire dentară Baia Mare | În cabinet sau acasă — Dantè Art",
      description:
        "Albire dentară profesională în Baia Mare: în cabinet, cu lampă, 1.000 lei, sau acasă, cu gutiere personalizate, 850 lei.",
    },
  },
  {
    slug: "fatete-dentare-baia-mare",
    procedureName: "Fațete dentare",
    eyebrow: "Estetică dentară",
    title: "Fațete dentare în Baia Mare",
    intro:
      "Fațetele sunt lamele fine care se aplică pe suprafața dinților din față și le corectează forma, culoarea și micile neregularități. Sunt soluția pentru situațiile în care albirea nu este suficientă, iar rezultatul se proiectează dinainte, pornind de la trăsăturile tale.",
    quickFacts: [
      "Preț — 2.000 lei per fațetă",
      "Se lucrează pe un grup de dinți, pentru un rezultat unitar",
      "Amprentă digitală, fără material clasic",
    ],
    need: {
      heading: "Când sunt o soluție potrivită",
      paragraph:
        "Fațetele rezolvă simultan forma și culoarea, acolo unde dinții sunt sănătoși, dar nu arată cum ți-ai dori.",
      points: [
        "dinți tociți, ciobiți sau cu margini neregulate;",
        "spații mici între dinții din față;",
        "o nuanță care nu răspunde la albire;",
        "obturații vechi, vizibile, în zona frontală.",
      ],
    },
    process: [
      "Consultație și proiectarea zâmbetului — fotografii și scanare, pe baza cărora stabilim împreună forma și nuanța.",
      "Prepararea și amprenta digitală — dinții sunt pregătiți minimal, iar amprenta se ia cu scannerul intraoral.",
      "Aplicarea fațetelor — le fixăm definitiv și verificăm mușcătura.",
    ],
    costs: {
      rows: [
        ["Fațetă dentară (per bucată)", "2.000"],
        ["Consultație de specialitate cu cameră intraorală și fotografii", "250"],
        ["Coroană zirconiu monolit (alternativă, la dinți foarte distruși)", "1.420"],
      ],
      note: "Numărul de fațete se stabilește la consultație, în funcție de câți dinți se văd când zâmbești.",
    },
    faqs: [
      {
        question: "De câte fațete am nevoie?",
        answer:
          "De obicei se lucrează pe grupul de dinți vizibili la zâmbet, între patru și zece. O singură fațetă se face doar când restul dinților au deja nuanța potrivită.",
      },
      {
        question: "Se șlefuiesc mult dinții?",
        answer:
          "Prepararea este minimă și se limitează la stratul de smalț necesar pentru grosimea fațetei. Cât anume se îndepărtează depinde de situația fiecărui dinte și îți explicăm asta înainte.",
      },
      {
        question: "Cât rezistă?",
        answer:
          "Cu o igienă corectă și controale periodice, fațetele funcționează mulți ani. Scrâșnitul dinților le scurtează durata, de aceea în astfel de cazuri recomandăm o gutieră de noapte.",
      },
    ],
    meta: {
      title: "Fațete dentare Baia Mare | Preț 2.000 lei — Dantè Art",
      description:
        "Fațete dentare în Baia Mare, cu proiectarea zâmbetului și amprentă digitală. Preț 2.000 lei per fațetă. Programează o consultație.",
    },
  },
  {
    slug: "coroane-si-proteze-dentare-baia-mare",
    procedureName: "Protetică dentară",
    eyebrow: "Protetică dentară",
    title: "Protetică dentară în Baia Mare",
    intro:
      "Când dintele este prea distrus pentru o plombă sau lipsește complet, lucrările protetice îi refac forma, funcția și aspectul. Coroanele din zirconiu monolit oferă cea mai bună combinație între rezistență și aspect natural, iar protezele acoperă situațiile în care lipsesc mai mulți dinți.",
    heroImage: {
      src: "/servicii/protetica.webp",
      alt: "Lucrări protetice dentare la clinica Dantè Art din Baia Mare",
    },
    quickFacts: [
      "Coroană — de la 800 lei",
      "Proteză — de la 2.000 lei",
      "Amprentă digitală, fără material de amprentare",
    ],
    need: {
      heading: "Când ai nevoie de o lucrare protetică",
      paragraph:
        "O coroană protejează dintele care nu mai are suficientă structură proprie, iar o proteză înlocuiește dinții care lipsesc de pe arcadă.",
      points: [
        "un dinte tratat pe canal, care a devenit fragil;",
        "un dinte distrus de o carie întinsă;",
        "o lucrare veche, care s-a desprins sau nu mai arată bine;",
        "mai mulți dinți lipsă de pe aceeași arcadă.",
      ],
    },
    process: [
      "Consultație și amprentă digitală — stabilim tipul de lucrare și luăm amprenta cu scannerul intraoral.",
      "Realizarea lucrării — se execută în laborator, iar între timp poți purta o lucrare provizorie.",
      "Proba și fixarea — verificăm potrivirea, nuanța și mușcătura, apoi lucrarea se fixează definitiv.",
    ],
    extraBlock: {
      eyebrow: "Protetică pe implanturi",
      heading: "Lucrări sprijinite pe implanturi",
      paragraph:
        "Când dintele lipsește cu totul, coroana se poate fixa pe un implant, iar dintele nou funcționează independent de cei vecini. Atunci când lipsește o arcadă întreagă, soluția este o lucrare fixă sprijinită pe patru sau șase implanturi.",
      link: {
        label: "Vezi dantura fixă pe implanturi",
        href: "/servicii/dantura-fixa-pe-implanturi-baia-mare",
      },
    },
    costs: {
      rows: [
        ["Coroană zirconiu monolit", "1.420"],
        ["Coroană metalo-ceramică", "800"],
        ["Coroană zirconiu pe implant", "1.600"],
        ["Coroană ceramică cu zirconiu pe implant", "1.800"],
        ["Pivot (per dinte)", "350"],
        ["Proteză clasică sau parțială", "2.000 – 2.500"],
        ["Proteză pe implanturi Fast & Fixed (per arcadă)", "20.000"],
      ],
      note: "Coroana care se montează pe un implant se tarifează separat de implantul propriu-zis.",
    },
    faqs: [
      {
        question: "Zirconiu sau metalo-ceramică?",
        answer:
          "Zirconiul monolit este mai rezistent și arată mai natural, pentru că nu are schelet metalic dedesubt. Metalo-ceramica rămâne o variantă mai accesibilă, potrivită mai ales în zona laterală.",
      },
      {
        question: "Cât durează până primesc lucrarea?",
        answer:
          "Între amprentă și fixarea definitivă trec de obicei una-două săptămâni, timp în care lucrarea se execută în laborator.",
      },
      {
        question: "Proteză fixă sau mobilă?",
        answer:
          "Proteza fixă se sprijină pe implanturi și nu se scoate. Cea mobilă este mai accesibilă, dar se îndepărtează pentru igienizare. Alegerea depinde de câți dinți lipsesc și de starea osului.",
      },
    ],
    meta: {
      title: "Protetică dentară Baia Mare | Coroane și proteze — Dantè Art",
      description:
        "Coroane din zirconiu monolit, coroane pe implant și proteze dentare în Baia Mare. De la 800 lei, cu amprentă digitală.",
    },
  },
  {
    slug: "tratament-de-canal-baia-mare",
    procedureName: "Tratament de canal",
    eyebrow: "Endodonție",
    title: "Tratament de canal în Baia Mare",
    intro:
      "Tratamentul de canal salvează dintele atunci când caria a ajuns la nerv sau când o infecție s-a instalat la nivelul rădăcinii. Canalele sunt curățate, dezinfectate și sigilate, iar dintele rămâne pe arcadă, în locul unei extracții urmate de implant.",
    quickFacts: [
      "Preț — de la 500 lei",
      "Costul depinde de numărul de canale ale dintelui",
      "Se realizează sub anestezie locală",
    ],
    need: {
      heading: "Semne că nervul este afectat",
      paragraph:
        "Cu cât ajungi mai repede la cabinet, cu atât dintele are șanse mai mari să fie salvat fără complicații.",
      points: [
        "durere spontană, care apare fără un motiv clar, mai ales noaptea;",
        "sensibilitate prelungită la cald;",
        "un dinte care și-a schimbat culoarea;",
        "umflătură sau sensibilitate la nivelul gingiei, în dreptul dintelui.",
      ],
    },
    process: [
      "Diagnostic — stabilim starea nervului și verificăm rădăcina pe radiografie.",
      "Curățarea canalelor — sub anestezie, îndepărtăm țesutul infectat și dezinfectăm canalele.",
      "Obturarea canalelor — le sigilăm etanș, ca infecția să nu revină.",
      "Refacerea dintelui — la final, dintele are nevoie de o obturație coronară, iar în unele cazuri de o coroană, pentru că devine mai fragil.",
    ],
    costs: {
      rows: [
        ["Tratament și obturație de canal — un canal", "500"],
        ["Tratament și obturație de canal — două canale", "600"],
        ["Tratament și obturație de canal — trei sau patru canale", "750"],
        ["Retratament endodontic — un canal", "550"],
        ["Retratament endodontic — două canale", "650"],
        ["Retratament endodontic — trei sau patru canale", "800"],
        ["Obturație coronară după tratamentul de canal", "250"],
      ],
      note: "Incisivii și caninii au de obicei un canal, iar molarii trei sau patru. Obturația coronară se tarifează separat.",
    },
    faqs: [
      {
        question: "Doare?",
        answer:
          "Tratamentul se face sub anestezie locală, deci nu simți durere în timpul lui. Disconfortul de dinainte, cauzat de inflamația nervului, dispare de regulă în zilele următoare.",
      },
      {
        question: "Câte ședințe sunt necesare?",
        answer:
          "În multe cazuri tratamentul se finalizează într-o singură ședință. Dacă infecția este extinsă, poate fi nevoie de încă una.",
      },
      {
        question: "Ce înseamnă retratament?",
        answer:
          "Se aplică unui dinte tratat anterior, la care infecția a reapărut. Se îndepărtează vechea obturație de canal, se dezinfectează din nou și se sigilează.",
      },
    ],
    meta: {
      title: "Tratament de canal Baia Mare | De la 500 lei — Dantè Art",
      description:
        "Tratament de canal și retratament endodontic în Baia Mare, de la 500 lei. Salvăm dintele atunci când caria a ajuns la nerv.",
    },
  },
  {
    slug: "implant-dentar-baia-mare",
    procedureName: "Implant dentar",
    eyebrow: "Implantologie",
    breadcrumb: "Implant dentar",
    title: "Implant dentar în Baia Mare",
    intro:
      "Implantul înlocuiește rădăcina dintelui pierdut și oprește retragerea osului din zona respectivă. Pe el se fixează coroana definitivă, iar dintele nou se folosește ca unul natural: mesteci, vorbești și îl perii la fel. Poziția fiecărui implant se stabilește digital, pe imaginea 3D obținută prin CBCT.",
    heroImage: {
      src: "/servicii/implant-dentar.webp",
      alt: "Implant dentar planificat digital la clinica Dantè Art din Baia Mare",
    },
    quickFacts: [
      "Preț de la 2.500 lei",
      "Poziția implantului, planificată digital",
      "Se realizează sub anestezie locală",
    ],
    need: {
      heading: "Situațiile în care implantul este soluția",
      paragraph:
        "Un spațiu rămas gol nu înseamnă doar un dinte lipsă. Dinții vecini se înclină spre el, cel de pe arcada opusă coboară, iar osul din zonă începe să se retragă.",
      points: [
        "ai pierdut un dinte, iar spațiul rămas îți afectează masticația sau zâmbetul;",
        "porți o punte care se sprijină pe dinți vecini sănătoși, șlefuiți pentru a o susține;",
        "ai o proteză mobilă care se deplasează sau te incomodează;",
        "ai extras recent un dinte și vrei să eviți retragerea osului din zona respectivă.",
      ],
    },
    processHeading: "De la consultație până la dintele finalizat",
    process: [
      "Consultația și CBCT — verificăm volumul de os disponibil și stabilim dacă zona permite inserarea implantului.",
      "Planificarea digitală — alegem poziția, lungimea și diametrul implantului pe imaginea 3D, înainte de intervenție.",
      "Inserarea implantului — intervenția se face sub anestezie locală și durează, de regulă, mai puțin de o oră.",
      "Vindecarea — osul se integrează în jurul implantului, într-un interval care ține de zonă și de calitatea osului.",
      "Coroana definitivă — amprentăm digital și fixăm coroana. Din acest moment folosești dintele normal.",
    ],
    costs: {
      rows: [
        ["Consultație de specialitate implanturi și plan de tratament", "200"],
        ["Implant dentar Neodent", "2.500"],
        ["Implant dentar MegaGen", "2.600"],
        ["Implant dentar Straumann", "2.800"],
        ["Coroană zirconiu pe implant", "1.600"],
        ["Coroană ceramică cu zirconiu pe implant", "1.800"],
        ["Sinus lift", "4.500"],
        ["Adiție de os", "5.000"],
      ],
      note: "Prețul implantului acoperă implantul de titan și inserarea chirurgicală. Coroana care se montează pe el se tarifează separat. Costul total al unui dinte pe implant îl primești în planul de tratament scris, după consultație.",
    },
    faqs: [
      {
        question: "Cât durează, de la început până la finalizare?",
        answer:
          "Între inserarea implantului și coroana definitivă trebuie să treacă timpul necesar osului să se integreze în jurul implantului. Intervalul diferă de la un pacient la altul și îl afli la consultație, după CBCT.",
      },
      {
        question: "Doare?",
        answer:
          "Intervenția se face sub anestezie locală, deci nu simți durere în timpul ei. În primele zile pot apărea o ușoară umflătură și disconfort, pentru care primești indicații clare.",
      },
      {
        question: "Ce se întâmplă dacă nu am suficient os?",
        answer:
          "Se poate reface volumul osos prin adiție de os sau, la maxilarul superior, prin ridicarea planșeului sinusal. Stabilim asta la consultație, pe imaginea CBCT, nu în timpul intervenției.",
      },
      {
        question: "Ce diferență este între sistemele de implanturi?",
        answer:
          "Lucrăm cu Neodent, MegaGen și Straumann, sisteme cu documentație clinică pe termen lung. Diferă prin producător, design și preț. Medicul îți recomandă varianta potrivită situației tale.",
      },
      {
        question: "Cât rezistă un implant?",
        answer:
          "Un implant integrat corect poate rămâne funcțional mulți ani. Ce contează pe termen lung este igiena de acasă, controalele periodice și, în cazul fumătorilor, renunțarea la fumat.",
      },
    ],
    cta: {
      heading: "Vino la o consultație",
      paragraph:
        "Verificăm zona, facem investigația necesară și îți explicăm ce presupune tratamentul în cazul tău. Ne poți suna, ne poți scrie pe WhatsApp sau poți completa formularul de contact.",
    },
    relatedLinks: [
      { label: "Dantură fixă pe implanturi", href: "/servicii/dantura-fixa-pe-implanturi-baia-mare" },
      { label: "Protetică dentară", href: "/servicii/coroane-si-proteze-dentare-baia-mare" },
    ],
    meta: {
      title: "Implant dentar Baia Mare | De la 2.500 lei — Dantè Art",
      description:
        "Implant dentar în Baia Mare, de la 2.500 lei. Poziția implantului este planificată digital, pe imaginea 3D obținută prin CBCT.",
    },
  },
  {
    slug: "dantura-fixa-pe-implanturi-baia-mare",
    procedureName: "Dantură fixă pe implanturi",
    eyebrow: "Implantologie",
    breadcrumb: "Dantură fixă pe implanturi",
    title: "Dantură fixă pe implanturi în Baia Mare",
    intro:
      "Când o arcadă întreagă nu mai poate fi salvată, dinții se pot reface printr-o lucrare fixă, sprijinită pe patru sau șase implanturi. Spre deosebire de proteza mobilă, lucrarea rămâne pe loc: nu se scoate seara, nu se deplasează în timp ce mănânci și nu acoperă cerul gurii.",
    heroImage: {
      src: "/servicii/dantura-fixa.webp",
      alt: "Reabilitare cu dantură fixă pe implanturi la clinica Dantè Art din Baia Mare",
    },
    quickFacts: [
      "Patru sau șase implanturi pe arcadă",
      "Lucrare fixă, care rămâne pe loc",
      "Planificare digitală, pe imagine CBCT",
    ],
    need: {
      heading: "Situațiile în care refacem toată arcada",
      points: [
        "ai pierdut majoritatea dinților de pe o arcadă;",
        "porți o proteză mobilă care se deplasează, te incomodează sau îți schimbă percepția gustului;",
        "dinții rămași au mobilitate avansată și nu mai pot susține o lucrare;",
        "vrei o soluție fixă, fără să înlocuiești fiecare dinte lipsă cu câte un implant separat.",
      ],
    },
    variantBlock: {
      eyebrow: "Două variante",
      heading: "All-on-4 sau All-on-6?",
      intro:
        "Numărul din denumire arată câte implanturi susțin lucrarea. Diferența nu ține de calitatea rezultatului, ci de osul pe care îl are fiecare pacient.",
      cards: [
        {
          title: "All-on-4",
          text: "Lucrarea se sprijină pe patru implanturi, dintre care cele din spate se inseră înclinat, ca să folosească osul disponibil. Este varianta care evită, în multe cazuri, intervențiile suplimentare de adiție osoasă.",
        },
        {
          title: "All-on-6",
          text: "Șase implanturi distribuie forțele de masticație pe o suprafață mai mare și oferă un sprijin suplimentar lucrării. Presupune os suficient și în zonele laterale.",
        },
      ],
      footnote:
        "Care dintre ele ți se potrivește se stabilește după investigația CBCT, la consultația de implantologie. Nu este o alegere de catalog, ci o decizie care ține de volumul de os, de forma maxilarului și de felul în care se închide mușcătura.",
    },
    processHeading: "Etapele unei arcade complete",
    process: [
      "Consultația și CBCT — evaluăm dinții rămași, volumul de os și forma maxilarului.",
      "Planul de tratament scris — numărul de implanturi, etapele, durata estimată și costul total, stabilite înainte de prima intervenție.",
      "Intervenția — extracțiile necesare și inserarea implanturilor se fac sub anestezie, în aceeași ședință.",
      "Vindecarea — implanturile se integrează în os, iar tu primești indicațiile pentru această perioadă.",
      "Lucrarea definitivă — după amprentarea digitală, lucrarea se fixează pe o bază de titan.",
    ],
    costs: {
      rows: [
        ["All-on-4 — lucrare definitivă, standard, bază de titan", "9.500"],
        ["All-on-6 — lucrare definitivă, standard, bază de titan", "La consultație"],
        ["Implant dentar Neodent", "2.500"],
        ["Implant dentar MegaGen", "2.600"],
        ["Implant dentar Straumann", "2.800"],
        ["Sinus lift", "4.500"],
        ["Adiție de os", "5.000"],
      ],
      note: "Prețul lucrării nu include implanturile pe care se sprijină; acestea se tarifează separat, în funcție de sistemul ales. Costul total al unei arcade depinde de numărul de implanturi, de extracțiile necesare și de eventuala refacere a osului. Îl primești integral, în scris, înainte de prima intervenție.",
    },
    faqs: [
      {
        question: "Lucrarea se scoate?",
        answer:
          "Nu. Este fixată pe implanturi și rămâne pe loc. Se demontează doar în cabinet, la controalele periodice sau atunci când este nevoie de o intervenție.",
      },
      {
        question: "Cât durează tratamentul?",
        answer:
          "Depinde de situația fiecărui pacient și de timpul necesar integrării implanturilor în os. Durata estimată o primești în planul de tratament, după consultația cu CBCT.",
      },
      {
        question: "Pot face lucrarea dacă am puțin os?",
        answer:
          "De multe ori, da. Varianta All-on-4 folosește implanturi înclinate tocmai pentru a valorifica osul disponibil. Când nu este suficient, se poate reface prin adiție de os sau sinus lift.",
      },
      {
        question: "Cum se îngrijește?",
        answer:
          "Se perie ca dinții naturali, cu atenție la zona de contact cu gingia, unde se folosesc periuțe interdentare sau duș bucal. Sunt necesare controale și igienizări profesionale la intervalele stabilite de medic.",
      },
      {
        question: "De ce nu un implant pentru fiecare dinte?",
        answer:
          "Ar însemna mai multe implanturi, mai mult os necesar și un cost considerabil mai mare. Patru sau șase implanturi bine poziționate susțin o arcadă completă, iar forțele de masticație se distribuie uniform pe toată lucrarea.",
      },
    ],
    cta: {
      heading: "Discutăm despre situația ta",
      paragraph:
        "La consultația de implantologie evaluăm osul pe imagine CBCT și îți explicăm ce variante ai. La final primești planul de tratament scris, cu etapele și costul total.",
    },
    pricesHref: "/preturi#implantologie",
    relatedLinks: [
      { label: "Implant dentar", href: "/servicii/implant-dentar-baia-mare" },
    ],
    meta: {
      title: "Dantură fixă pe implanturi Baia Mare | All-on-4 și All-on-6 — Dantè Art",
      description:
        "Dantură fixă pe implanturi în Baia Mare, prin soluții All-on-4 și All-on-6. Reabilitarea unei arcade complete, planificată digital pe CBCT.",
    },
  },
  {
    slug: "pedodontie-baia-mare",
    procedureName: "Pedodonție",
    eyebrow: "Pedodonție",
    title: "Stomatologie pentru copii în Baia Mare",
    intro:
      "Prima vizită la dentist stabilește relația copilului cu cabinetul pentru anii următori. De aceea ne luăm timp: îi arătăm instrumentele, îi explicăm pe înțelesul lui ce urmează și lucrăm în ritmul în care se simte în siguranță. Un copil care nu se teme ajunge un adult care vine la control la timp.",
    heroImage: {
      src: "/servicii/pedodontie.webp",
      alt: "Copil la consultație stomatologică la clinica Dantè Art din Baia Mare",
    },
    quickFacts: [
      "Consultație 100 lei",
      "Prima vizită, la apariția primilor dinți",
      "Sigilare și fluorizare pentru prevenție",
    ],
    need: {
      heading: "Momentele în care e bine să vii",
      points: [
        "la prima vizită, recomandată la scurt timp după erupția primilor dinți;",
        "la fiecare șase luni, chiar dacă nu se vede nicio problemă;",
        "când apar pete albe sau maronii pe dinți;",
        "când copilul acuză durere sau evită să mestece pe o parte;",
        "când au erupt primii molari permanenți, pentru sigilare.",
      ],
    },
    processHeading: "Pas cu pas, în ritmul copilului",
    process: [
      "Ne cunoaștem — copilul se așază în scaun, vede instrumentele și înțelege ce urmează. Prima ședință poate fi doar despre asta.",
      "Consultația — verificăm toți dinții, temporari și permanenți, și starea gingiilor.",
      "Prevenția — sigilăm șanțurile molarilor nou-erupți și aplicăm fluor, acolo unde este indicat.",
      "Tratamentul, dacă este nevoie — folosim materiale potrivite dinților temporari și explicăm fiecare pas înainte să îl facem.",
      "Controlul la șase luni — la vârstele mici, o carie evoluează repede, iar un control la timp înseamnă un tratament simplu.",
    ],
    costs: {
      rows: [
        ["Consultație pedodonție", "100"],
        ["Sigilare dentară", "200"],
        ["Fluorizare", "100"],
        ["Detartraj copii (două arcade)", "250"],
        ["Obturație cu glasionomer", "230"],
        ["Obturație cu oxid de zinc", "150"],
        ["Obturație Twinkle (flow color)", "250"],
        ["Pansament calmant", "80"],
        ["Extracție dinte temporar", "150"],
        ["Drenaj", "150"],
      ],
      note: "Consultația include examinarea și discuția cu părintele despre ce are de făcut copilul acasă. Dacă este nevoie de tratament, primești planul complet, cu toate costurile, înainte de a începe.",
    },
    faqs: [
      {
        question: "De la ce vârstă îl aduc?",
        answer:
          "Prima vizită se recomandă la scurt timp după erupția primilor dinți. La început este o vizită de acomodare, în care copilul se obișnuiește cu cabinetul, iar părintele primește indicațiile pentru periajul de acasă.",
      },
      {
        question: "Merită tratat un dinte de lapte, dacă oricum va cădea?",
        answer:
          "Da. Dintele temporar ține locul celui permanent și participă la masticație și la pronunție. O carie netratată poate ajunge la nerv, poate durea și poate afecta dintele permanent care se formează dedesubt.",
      },
      {
        question: "Ce este sigilarea?",
        answer:
          "Șanțurile molarilor nou-erupți sunt adânci și greu de curățat cu periuța. Sigilarea le acoperă cu un material fluid, care împiedică depunerea plăcii bacteriene. Se face fără freză și fără anestezie.",
      },
      {
        question: "Copilul se teme de dentist. Ce facem?",
        answer:
          "Lucrăm în ritmul lui. Prima ședință poate fi doar o cunoaștere, fără niciun tratament. Nu forțăm și nu grăbim, pentru că o experiență neplăcută la început se simte ani buni după aceea.",
      },
      {
        question: "Pot rămâne lângă el în cabinet?",
        answer:
          "Da. Mulți copii se liniștesc dacă părintele este în încăpere. La unii funcționează mai bine invers, iar medicul îți spune ce recomandă în cazul copilului tău.",
      },
    ],
    cta: {
      heading: "Programează prima vizită",
      paragraph:
        "Sună-ne, scrie-ne pe WhatsApp sau completează formularul. Alegem împreună o oră la care copilul este odihnit și bine dispus.",
    },
    pricesHref: "/preturi#pedodontie",
    relatedLinks: [
      { label: "Igienizare și prevenție", href: "/servicii/igienizare-dentara-baia-mare" },
      { label: "Ortodonție", href: "/servicii/ortodontie-baia-mare" },
    ],
    meta: {
      title: "Pedodonție Baia Mare | Stomatologie pentru copii — Dantè Art",
      description:
        "Stomatologie pentru copii în Baia Mare: sigilări, fluorizări și tratamente explicate pe înțelesul lor. Consultație de la 100 lei.",
    },
  },
  {
    slug: "parodontologie-baia-mare",
    procedureName: "Parodontologie",
    eyebrow: "Parodontologie",
    title: "Parodontologie în Baia Mare",
    intro:
      "Gingia care sângerează la periaj nu este normală. Este primul semn al unei inflamații care, lăsată netratată, ajunge la osul din jurul dintelui. Osul pierdut nu se reface de la sine, iar dintele începe să se miște. Tratamentul parodontal oprește procesul și păstrează dinții pe arcadă.",
    heroImage: {
      src: "/servicii/parodontologie.webp",
      alt: "Consultație de parodontologie la clinica Dantè Art din Baia Mare",
    },
    quickFacts: [
      "Consultație de specialitate 300 lei",
      "Fișă parodontală, la prima ședință",
      "Decontaminare cu laser, acolo unde este indicată",
    ],
    need: {
      heading: "Semne care nu trebuie ignorate",
      points: [
        "gingii care sângerează la periaj sau la ața dentară;",
        "gingii umflate, roșii sau sensibile;",
        "gingie retrasă și dinți care par mai lungi decât înainte;",
        "respirație neplăcută care revine, deși igiena este corectă;",
        "dinți cu mobilitate sau care și-au schimbat poziția.",
      ],
    },
    processHeading: "De la evaluare la menținere",
    process: [
      "Evaluarea și fișa parodontală — măsurăm adâncimea pungilor la fiecare dinte și stabilim cât de avansată este boala.",
      "Detartrajul parodontal — îndepărtăm depozitele de sub marginea gingiei, acolo unde periuța nu ajunge.",
      "Chiuretajul — curățăm pungile parodontale, în câmp închis sau deschis, în funcție de situație.",
      "Decontaminarea cu laser — se aplică atunci când este indicată, pentru a reduce încărcătura bacteriană.",
      "Reevaluarea și menținerea — verificăm rezultatul și stabilim intervalul controalelor, pentru ca boala să rămână sub control.",
    ],
    costs: {
      rows: [
        ["Consultație parodontologie", "300"],
        ["Evaluare parodontală și fișă parodontală", "200"],
        ["Reevaluare parodontală", "200"],
        ["Detartraj parodontal — depozite mici", "200"],
        ["Detartraj parodontal — depozite mari", "500"],
        ["Decontaminare cu laser", "400"],
        ["Chiuretaj în câmp închis (per dinte)", "100"],
        ["Chiuretaj în câmp deschis (per dinte)", "120"],
      ],
      note: "Numărul de ședințe depinde de cât de întinsă este boala. După evaluare primești planul complet, cu etapele și costul total.",
    },
    faqs: [
      {
        question: "Parodontoza se vindecă?",
        answer:
          "Boala se oprește din evoluție și se ține sub control, dar osul deja pierdut nu se reface de la sine. Cu cât începi tratamentul mai devreme, cu atât păstrezi mai mult din ce ai.",
      },
      {
        question: "Doare?",
        answer:
          "Ședințele se fac sub anestezie locală acolo unde este nevoie. După tratament, gingia poate fi sensibilă câteva zile.",
      },
      {
        question: "Câte ședințe sunt necesare?",
        answer:
          "De regulă evaluarea, una sau două ședințe de detartraj parodontal și chiuretaj, apoi o reevaluare. La formele avansate pot fi necesare mai multe.",
      },
      {
        question: "Pot pune implant dacă am parodontoză?",
        answer:
          "Nu înainte de a aduce boala sub control. Un implant inserat într-un teren inflamat are un risc mai mare de eșec, așa că tratamentul parodontal este prima etapă.",
      },
      {
        question: "De ce revine tartrul atât de repede?",
        answer:
          "Placa bacteriană se depune zilnic și se transformă în tartru în câteva zile, în zonele pe care periuța le ratează. De aceea igienizarea profesională se repetă la intervale stabilite, iar tehnica periajului de acasă contează la fel de mult.",
      },
    ],
    cta: {
      heading: "Vino la o consultație de specialitate",
      paragraph:
        "Facem evaluarea parodontală, îți arătăm exact în ce stadiu sunt gingiile și stabilim planul de tratament.",
    },
    pricesHref: "/preturi#parodontologie",
    relatedLinks: [
      { label: "Implant dentar", href: "/servicii/implant-dentar-baia-mare" },
      { label: "Igienizare și prevenție", href: "/servicii/igienizare-dentara-baia-mare" },
    ],
    meta: {
      title: "Parodontologie Baia Mare | Tratament parodontal — Dantè Art",
      description:
        "Tratament parodontal în Baia Mare, pentru gingii care sângerează, retracție gingivală și mobilitate dentară. Consultație de specialitate 300 lei.",
    },
  },
  {
    slug: "tratarea-cariilor-baia-mare",
    procedureName: "Tratarea cariilor",
    eyebrow: "Odontoterapie",
    breadcrumb: "Tratarea cariilor",
    title: "Tratarea cariilor în Baia Mare",
    intro:
      "Obturația, cunoscută mai degrabă ca plombă, oprește evoluția cariei și reface forma naturală a dintelui. Momentul în care ajungi la cabinet schimbă tot: o carie mică se rezolvă într-o singură ședință, în timp ce una ajunsă la nerv cere un tratament de canal și costă de câteva ori mai mult.",
    heroImage: {
      src: "/servicii/tratarea-cariilor.webp",
      alt: "Tratarea unei carii la clinica Dantè Art din Baia Mare",
    },
    quickFacts: [
      "Preț de la 300 lei",
      "De regulă, o singură ședință",
      "Materiale în culoarea dintelui",
    ],
    need: {
      heading: "Ce simți și ce se vede",
      points: [
        "sensibilitate la dulce, la rece sau la cald;",
        "o pată albă, maronie sau neagră pe suprafața dintelui;",
        "mâncare care se blochează mereu între aceiași doi dinți;",
        "o adâncitură sau o margine ascuțită pe care o simți cu limba;",
        "niciunul dintre semnele de mai sus, iar caria apare doar la control sau pe radiografie. Este cazul cel mai frecvent.",
      ],
    },
    processHeading: "O ședință, patru etape",
    process: [
      "Consultația — verificăm toți dinții și, unde este nevoie, facem o radiografie pentru cariile ascunse între dinți.",
      "Anestezia — la cariile profunde este necesară. La cele superficiale, de multe ori nu.",
      "Îndepărtarea țesutului afectat — curățăm caria până la structura sănătoasă a dintelui.",
      "Obturația — reconstruim dintele cu material în culoarea lui, verificăm mușcătura și lustruim suprafața.",
    ],
    costs: {
      rows: [
        ["Consultație stomatologică simplă", "100"],
        ["Consultație de specialitate cu cameră intraorală și fotografii", "250"],
        ["Obturație fizionomică — o suprafață", "300"],
        ["Obturație fizionomică — două suprafețe", "350"],
        ["Obturație fizionomică — trei suprafețe", "400"],
        ["Obturație estetică", "350"],
        ["Obturație provizorie", "80"],
        ["Obturație cu glasionomer", "300"],
        ["Obturație cu oxid de zinc", "300"],
        ["Obturație după tratament endodontic", "250"],
        ["Reconstrucție coronară cu pivot", "150"],
        ["Ridicare de perete", "200"],
        ["Drenaj abces", "150"],
      ],
      note: "Prețul depinde de câte suprafețe ale dintelui sunt afectate. Îl stabilim la consultație, după ce vedem cât de întinsă este caria.",
    },
    faqs: [
      {
        question: "Doare?",
        answer:
          "La cariile profunde lucrăm sub anestezie locală, deci nu simți durere. La cele superficiale, de multe ori nu este nevoie de anestezie.",
      },
      {
        question: "Pot să aștept, dacă nu mă doare?",
        answer:
          "Caria nu doare la început. Durerea apare de obicei când a ajuns aproape de nerv, iar atunci nu mai e suficientă o obturație și este nevoie de tratament de canal. Un control la șase luni prinde caria cât este mică.",
      },
      {
        question: "De ce costă diferit de la un dinte la altul?",
        answer:
          "Prețul urmează numărul de suprafețe afectate ale dintelui. O carie pe o singură față se rezolvă mai simplu decât una care a cuprins trei.",
      },
      {
        question: "Cât ține o obturație?",
        answer:
          "Depinde de mărimea ei, de igienă și de felul în care mesteci. La controalele periodice verificăm marginile obturațiilor vechi și le refacem înainte să apară o carie sub ele.",
      },
      {
        question: "Se vede plomba?",
        answer:
          "Materialele fizionomice se aleg în nuanța dintelui tău, așa că la o obturație bine adaptată diferența nu se observă.",
      },
    ],
    cta: {
      heading: "Vino la un control",
      paragraph:
        "O carie descoperită la timp înseamnă o singură ședință și un cost mic. Programează-te telefonic, pe WhatsApp sau prin formular.",
    },
    pricesHref: "/preturi#odontoterapie",
    relatedLinks: [
      { label: "Endodonție (tratament de canal)", href: "/servicii/tratament-de-canal-baia-mare" },
      { label: "Igienizare și prevenție", href: "/servicii/igienizare-dentara-baia-mare" },
    ],
    meta: {
      title: "Tratarea cariilor Baia Mare | Plombă dentară de la 300 lei — Dantè Art",
      description:
        "Tratarea cariilor în Baia Mare, de la 300 lei. Obturații în culoarea dintelui, care opresc evoluția cariei și refac forma naturală.",
    },
  },
  {
    slug: "extractii-dentare-baia-mare",
    procedureName: "Extracții dentare",
    eyebrow: "Chirurgie dento-alveolară",
    breadcrumb: "Extracții și chirurgie orală",
    title: "Extracții dentare în Baia Mare",
    intro:
      "Extracția rămâne ultima soluție, aleasă atunci când dintele nu mai poate fi salvat. Se face sub anestezie locală, iar după vindecare spațiul se poate reface cu un implant sau cu o lucrare protetică, ca dinții vecini să nu se deplaseze spre gol.",
    heroImage: {
      src: "/servicii/extractii.webp",
      alt: "Cabinet de chirurgie dento-alveolară la clinica Dantè Art din Baia Mare",
    },
    quickFacts: [
      "Preț de la 220 lei",
      "Se realizează sub anestezie locală",
      "Primești indicații scrise pentru vindecare",
    ],
    need: {
      heading: "Situațiile în care dintele nu mai poate fi păstrat",
      points: [
        "dintele este distrus de carie și nu mai poate fi reconstruit;",
        "are mobilitate avansată, din cauza bolii parodontale;",
        "un molar de minte împinge dinții vecini sau se infectează repetat;",
        "infecția de la rădăcină persistă și după retratamentul de canal;",
        "tratamentul ortodontic are nevoie de spațiu pe arcadă.",
      ],
    },
    processHeading: "De la radiografie la refacerea spațiului",
    process: [
      "Consultația și radiografia — vedem forma rădăcinilor și poziția dintelui față de structurile din jur.",
      "Anestezia — zona se amorțește complet înainte de a începe.",
      "Extracția — durata depinde de dinte. Un dinte cu o singură rădăcină se scoate mai simplu decât un molar de minte inclus.",
      "Îngrijirea de după — primești indicații clare pentru primele zile și, dacă este cazul, rețeta.",
      "Refacerea spațiului — după vindecare discutăm despre implant sau despre o lucrare protetică, ca dinții vecini să rămână pe poziție.",
    ],
    costs: {
      rows: [
        ["Consultație stomatologică simplă", "100"],
        ["Consultație de specialitate cu cameră intraorală și fotografii", "250"],
        ["Extracție dinte cu afectare parodontală", "220"],
        ["Extracție dinte monoradicular", "280"],
        ["Extracție dinte pluriradicular", "320"],
        ["Extracție molar", "380"],
        ["Extracție molar de minte", "450"],
      ],
      note: "Prețul depinde de dintele care trebuie scos și de dificultatea intervenției. Un dinte cu mobilitate avansată se extrage mai simplu decât un molar cu rădăcini divergente.",
    },
    faqs: [
      {
        question: "Doare?",
        answer:
          "În timpul intervenției nu simți durere, pentru că zona este anesteziată complet. Disconfortul de după se controlează cu medicația recomandată de medic.",
      },
      {
        question: "Cât durează vindecarea?",
        answer:
          "Gingia se închide de regulă în una-două săptămâni, iar osul are nevoie de mai mult. Primești indicații pentru primele zile și un control de verificare.",
      },
      {
        question: "Ce am voie să fac imediat după extracție?",
        answer:
          "Indicațiile complete ți le dă medicul la finalul intervenției, adaptate cazului tău. În general se evită efortul fizic, alimentele fierbinți și fumatul în primele ore.",
      },
      {
        question: "Când pot pune implant în locul dintelui extras?",
        answer:
          "După ce zona se vindecă. Intervalul se stabilește în funcție de starea osului, pe baza investigației CBCT. În unele situații implantul se poate insera mai devreme.",
      },
      {
        question: "Molarul de minte trebuie scos întotdeauna?",
        answer:
          "Nu. Se scoate atunci când creează probleme: dureri repetate, infecții, presiune asupra dinților vecini sau imposibilitatea de a-l curăța corect, pentru că este prea în spate.",
      },
    ],
    cta: {
      heading: "Vino la o consultație",
      paragraph:
        "Verificăm dacă dintele mai poate fi salvat. Dacă nu, îți explicăm cum decurge extracția și ce urmează după ea.",
    },
    pricesHref: "/preturi#extractii",
    relatedLinks: [
      { label: "Implant dentar", href: "/servicii/implant-dentar-baia-mare" },
      { label: "Protetică dentară", href: "/servicii/coroane-si-proteze-dentare-baia-mare" },
    ],
    meta: {
      title: "Extracție dentară Baia Mare | De la 220 lei — Dantè Art",
      description:
        "Extracții dentare și chirurgie dento-alveolară în Baia Mare, de la 220 lei. Intervenția se face sub anestezie locală, cu indicații clare pentru vindecare.",
    },
  },
];

export function getService(slug: string): ServiceContent | undefined {
  return services.find((service) => service.slug === slug);
}

// schema.org payloads: a MedicalProcedure for the treatment plus a FAQPage for
// the "Întrebări frecvente" section, injected as JSON-LD on each service page.
export function buildServiceSchema(service: ServiceContent) {
  const url = `/servicii/${service.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: service.procedureName,
      description: service.intro,
      url,
      provider: {
        "@type": "MedicalClinic",
        "@id": "/#dentist",
        name: "Dantè Art",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "/" },
        { "@type": "ListItem", position: 2, name: "Servicii", item: "/servicii" },
        {
          "@type": "ListItem",
          position: 3,
          name: service.breadcrumb ?? service.eyebrow,
          item: url,
        },
      ],
    },
  ];
}
