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
  title: string;
  intro: string;
  // Three short facts shown in the quick band. "label — value" is split on the
  // em dash so the label renders emphasised; plain strings render as-is.
  quickFacts: string[];
  need: { heading: string; paragraph: string; points?: string[] };
  process: string[];
  costs: { rows: ServiceCost[]; note?: string };
  faqs: ServiceFaq[];
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
    procedureName: "Coroane și proteze dentare",
    eyebrow: "Protetică dentară",
    title: "Coroane și proteze dentare în Baia Mare",
    intro:
      "Când dintele este prea distrus pentru o plombă sau lipsește complet, lucrările protetice îi refac forma, funcția și aspectul. Coroanele din zirconiu monolit oferă cea mai bună combinație între rezistență și aspect natural, iar protezele acoperă situațiile în care lipsesc mai mulți dinți.",
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
      title: "Coroane și proteze dentare Baia Mare | Zirconiu — Dantè Art",
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
  ];
}
