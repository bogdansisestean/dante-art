import Image from "next/image";
import type { ReactNode } from "react";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { clinic } from "./site-config";

type PriceRow = [service: string, price: string];
type PriceGroup = { title?: string; rows: PriceRow[]; note?: ReactNode; intro?: ReactNode };
type PriceCategory = {
  id: string;
  label: string;
  title: string;
  intro: ReactNode;
  groups: PriceGroup[];
  links?: { label: string; href: string }[];
};

const consultationRows: PriceRow[] = [
  ["Consultație stomatologică simplă", "100"],
  ["Consultație de specialitate cu cameră intraorală și fotografii", "250"],
];

const categories: PriceCategory[] = [
  {
    id: "igienizare",
    label: "Igienizare",
    title: "Igienizare și prevenție",
    intro:
      "Detartrajul și periajul profesional îndepărtează tartrul și placa bacteriană pe care periajul de acasă nu le poate curăța, iar procedura Air Flow elimină petele lăsate de cafea, ceai sau fumat. Recomandăm o ședință de igienizare la fiecare șase luni. Este cea mai simplă metodă de a preveni problemele complexe și de a evita tratamentele costisitoare pe viitor.",
    groups: [{
      rows: [
        ...consultationRows,
        ["Detartraj, periaj profesional și Air Flow", "400"],
        ["Detartraj și periaj profesional", "300"],
        ["Air Flow", "200"],
        ["Detartraj copii (două arcade)", "250"],
        ["Periaj profesional", "100"],
        ["Fluorizare", "100"],
      ],
    }],
  },
  {
    id: "albire",
    label: "Albire",
    title: "Albire dentară",
    intro: (
      <>
        Albirea profesională îndepărtează petele acumulate în timp și redă strălucirea dinților,
        protejând în totalitate smalțul. Procedura se poate face direct în cabinet, cu lampă,
        într-o singură ședință, sau acasă, cu gutiere realizate special după amprenta ta.
        Recomandăm <a href="#igienizare">o ședință de igienizare</a> înainte de albire, pentru ca
        substanța să acționeze uniform pe fiecare dinte.
      </>
    ),
    groups: [{
      rows: [
        ...consultationRows,
        ["Albire dentară profesională în cabinet, cu lampă", "1.000"],
        ["Albire dentară la domiciliu, cu gutiere personalizate", "850"],
      ],
    }],
  },
  {
    id: "odontoterapie",
    label: "Odontoterapie",
    title: "Odontoterapie — tratarea cariilor",
    intro:
      "Obturația (plomba) oprește evoluția cariei și reface forma naturală a dintelui. Prețul depinde de numărul de suprafețe afectate: cu cât descoperim caria mai devreme, cu atât tratamentul este mai simplu, mai rapid și mai accesibil.",
    groups: [{
      rows: [
        ...consultationRows,
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
    }],
  },
  {
    id: "endodontie",
    label: "Endodonție",
    title: "Endodonție — tratament de canal",
    intro:
      "Tratamentul de canal salvează dintele atunci când caria a ajuns la nerv sau când există o infecție la nivelul rădăcinii. Prețul depinde de numărul de canale ale dintelui: incisivii și caninii au de obicei un canal, iar molarii trei sau patru. Retratamentul se aplică dinților tratați anterior, la care infecția a reapărut.",
    groups: [{
      rows: [
        ...consultationRows,
        ["Tratament și obturație de canal — monoradicular (1 canal)", "500"],
        ["Tratament și obturație de canal — biradicular (2 canale)", "600"],
        ["Tratament și obturație de canal — pluriradicular (3–4 canale)", "750"],
        ["Retratament endodontic — monoradicular (1 canal)", "550"],
        ["Retratament endodontic — biradicular (2 canale)", "650"],
        ["Retratament endodontic — pluriradicular (3–4 canale)", "800"],
        ["Aplicare MTA", "100"],
        ["Obturație coronară după tratamentul de canal", "250"],
      ],
    }],
  },
  {
    id: "parodontologie",
    label: "Parodontologie",
    title: "Parodontologie",
    intro:
      "Sângerarea gingiilor, retracția gingivală și mobilitatea dentară sunt semne de boală parodontală. Tratamentul începe cu o consultație de specialitate și o fișă parodontală, apoi continuă cu detartraj profund, chiuretaj și, acolo unde este necesar, decontaminare cu laser.",
    groups: [{
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
    }],
  },
  {
    id: "pedodontie",
    label: "Pedodonție",
    title: "Pedodonție — stomatologie pentru copii",
    intro: (
      <>
        Tratăm copiii cu răbdare și le explicăm totul pe înțelesul lor, pentru că{" "}
        <a href="/despre">stomatologia pentru copii</a> trebuie să fie o experiență prietenoasă.
        Sigilarea dinților permanenți nou-erupți și fluorizarea sunt cele mai eficiente metode
        de prevenție a cariilor la vârste mici.
      </>
    ),
    groups: [{
      rows: [
        ["Consultație pedodonție", "100"],
        ["Sigilare dentară", "200"],
        ["Extracție dinte temporar", "150"],
        ["Pansament calmant", "80"],
        ["Obturație cu oxid de zinc", "150"],
        ["Obturație cu glasionomer", "230"],
        ["Obturație Twinkle (flow color)", "250"],
        ["Drenaj", "150"],
      ],
    }],
  },
  {
    id: "extractii",
    label: "Extracții",
    title: "Extracții și chirurgie dento-alveolară",
    intro: (
      <>
        Extracția rămâne ultima soluție, atunci când dintele nu mai poate fi salvat. O realizăm
        sub anestezie, iar după vindecare,{" "}
        <a href="#implantologie">se poate înlocui dintele extras</a> printr-un
        implant sau o lucrare protetică. Prețul depinde de dintele care trebuie scos: un dinte
        cu o singură rădăcină se extrage mai simplu decât un molar sau decât un molar de minte inclus.
      </>
    ),
    groups: [{
      rows: [
        ...consultationRows,
        ["Extracție dinte cu afectare parodontală", "220"],
        ["Extracție dinte monoradicular", "280"],
        ["Extracție dinte pluriradicular", "320"],
        ["Extracție molar", "380"],
        ["Extracție molar de minte", "450"],
      ],
    }],
  },
  {
    id: "implantologie",
    label: "Implantologie",
    title: "Implantologie",
    intro:
      "Implantul dentar înlocuiește rădăcina dintelui pierdut și susține coroana definitivă. Lucrăm cu sisteme de implanturi cu documentație clinică pe termen lung, iar planificarea se face digital, pe baza investigației de diagnostic.",
    groups: [
      {
        title: "Implanturi dentare",
        rows: [
          ["Consultație de specialitate implanturi și plan de tratament", "200"],
          ["Implant dentar Neodent", "2.500"],
          ["Implant dentar MegaGen", "2.600"],
          ["Implant dentar Straumann", "2.800"],
          ["Mini-implant cu scop ortodontic", "600"],
          ["Explantare implant", "800"],
        ],
        note: "Prețul implantului acoperă implantul de titan și inserarea chirurgicală. Coroana care se montează pe implant se tarifează separat, în secțiunea Protetică dentară.",
      },
      {
        title: "Lucrări definitive de tip All-on-4 / All-on-6",
        intro:
          "Reabilitarea totală pe implanturi este soluția pentru pacienții care și-au pierdut toți dinții de pe o arcadă. Lucrarea definitivă se sprijină pe patru sau șase implanturi și se fixează pe o bază din titan.",
        rows: [
          ["All-on-4 — lucrare definitivă, standard, bază de titan", "9.500"],
          ["All-on-6 — lucrare definitivă, standard, bază de titan", "La consultație"],
        ],
      },
      {
        title: "Chirurgie pre-implantară",
        rows: [
          ["Sinus lift", "4.500"],
          ["Adiție de os", "5.000"],
        ],
      },
    ],
  },
  {
    id: "protetica",
    label: "Protetică",
    title: "Protetică dentară",
    intro:
      "Lucrările protetice refac forma, funcția și aspectul dinților afectați sau lipsă. Coroanele din zirconiu monolit oferă cea mai bună combinație de rezistență și aspect natural, iar fațetele dentare corectează forma și culoarea dinților frontali.",
    groups: [
      {
        title: "Protetică fixă",
        rows: [
          ...consultationRows,
          ["Coroană zirconiu monolit", "1.420"],
          ["Coroană metalo-ceramică", "800"],
          ["Coroană zirconiu pe implant", "1.600"],
          ["Coroană ceramică cu zirconiu pe implant", "1.800"],
          ["Pivot (per dinte)", "350"],
          ["Fațetă dentară (per bucată)", "2.000"],
          ["Ablație coroană (per dinte)", "100"],
        ],
      },
      {
        title: "Protetică mobilă",
        rows: [
          ["Proteză pe implanturi Fast & Fixed (per arcadă)", "20.000"],
          ["Proteză clasică sau parțială", "2.000 – 2.500"],
        ],
      },
    ],
  },
  {
    id: "ortodontie",
    label: "Ortodonție",
    title: "Ortodonție",
    intro:
      "Aparatul dentar aliniază dinții și corectează mușcătura, la copii și la adulți deopotrivă. Tratamentul ortodontic presupune un cost inițial pentru aparat și activări periodice, de regulă lunare. Prețul aparatului include montarea pe ambele arcade.",
    groups: [{
      rows: [
        ["Consultație ortodonție", "300"],
        ["Fotografii și scanare", "300"],
        ["Aparat ortodontic metalic", "3.000"],
        ["Aparat ortodontic safir", "4.000"],
        ["Aparat ortodontic mobilizabil", "1.500"],
        ["Activare aparat metalic (per arcadă)", "150"],
        ["Activare aparat estetic (per arcadă)", "170"],
        ["Disjunctor", "1.900"],
        ["Menținător de spațiu", "650"],
        ["Contenție fixă", "300"],
        ["Contenție mobilă", "550"],
        ["Mască facială", "900"],
      ],
    }],
  },
];

const faqs = [
  {
    question: "Ce nu este inclus în prețul afișat?",
    answer:
      "Cel mai frecvent, lucrarea care urmează după o intervenție. Prețul implantului, de exemplu, acoperă implantul de titan și inserarea chirurgicală, dar nu și coroana care se montează pe el; aceea se tarifează separat. La fel, tratamentul de canal include curățarea și sigilarea rădăcinii, dar nu include obturația coronară (plomba de la suprafață).",
  },
  {
    question: "Cât costă un implant dentar în Baia Mare?",
    answer:
      "La Dantè Art, un implant dentar costă între 2.500 și 2.800 de lei, în funcție de sistemul ales: Neodent 2.500 lei, MegaGen 2.600 lei și Straumann 2.800 lei. Coroana care se montează pe implant costă între 1.600 și 1.800 de lei, în funcție de material.",
  },
  {
    question: "Cât costă un tratament de canal?",
    answer:
      "Prețul depinde de numărul de canale ale dintelui: 500 de lei pentru un dinte monoradicular, 600 de lei pentru un dinte cu două canale și 750 de lei pentru molarii cu trei sau patru canale. Retratamentul unui dinte tratat anterior costă cu 50 de lei mai mult la fiecare categorie. La final se adaugă obturația coronară, 250 de lei.",
  },
  {
    question: "Cât costă un aparat dentar?",
    answer:
      "Aparatul ortodontic metalic costă 3.000 de lei, iar cel din safir 4.000 de lei, pentru ambele arcade. La acestea se adaugă activările periodice: 150 de lei pe arcadă la aparatul metalic și 170 de lei pe arcadă la cel estetic. Aparatul mobilizabil, folosit mai ales la copii, costă 1.500 de lei.",
  },
  {
    question: "Cât costă o albire dentară?",
    answer:
      "Albirea profesională în cabinet, cu lampă, costă 1.000 de lei și se face într-o singură ședință. Varianta pentru acasă, cu gutiere realizate după amprenta ta, costă 850 de lei. Înainte de albire recomandăm o ședință de igienizare, ca substanța să acționeze uniform pe toată suprafața dintelui.",
  },
  {
    question: "Cât costă o extracție dentară?",
    answer:
      "Prețul depinde de dintele care trebuie scos. Extracția unui dinte cu o singură rădăcină costă 280 de lei, a unui dinte cu mai multe rădăcini 320 de lei, iar a unui molar 380 de lei. Extracția unui molar de minte costă 450 de lei. Un dinte cu afectare parodontală avansată, care are deja mobilitate, se extrage mai simplu: 220 de lei.",
  },
  {
    question: "Cât costă o igienizare dentară?",
    answer:
      "Detartrajul cu periaj profesional costă 300 de lei, iar pachetul complet, care include și Air Flow, costă 400 de lei. Air Flow-ul separat costă 200 de lei, iar detartrajul pentru copii, pe ambele arcade, 250 de lei. Recomandăm o ședință de igienizare la fiecare șase luni.",
  },
];

function Icon({ name }: { name: "arrow" | "calendar" | "card" | "check" | "tooth" | "whatsapp" }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "arrow") return <svg {...common}><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
  if (name === "calendar") return <svg {...common}><rect x="3.5" y="5.5" width="17" height="15" rx="3" /><path d="M8 3v5M16 3v5M3.5 10.5h17" /></svg>;
  if (name === "card") return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 10h18M7 15h3" /></svg>;
  if (name === "check") return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
  if (name === "whatsapp") return <svg {...common}><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.3-4.3a8.5 8.5 0 1 1 15.7-4.4Z" /><path d="M8.1 7.6c.2-.4.4-.4.7-.4h.5l.9 2.1c.1.3 0 .5-.2.7l-.7.8a7.3 7.3 0 0 0 3.7 3.2c.3.1.5.1.7-.2l.9-1.1c.2-.3.5-.3.8-.2l2 .9" /></svg>;
  return <svg {...common}><path d="M7.2 3.5c1.6-.8 3.2.6 4.8.6s3.2-1.4 4.8-.6c3.1 1.6 2.2 6.2 1.2 9.2-1 2.9-1.4 7.8-4 7.8-1.8 0-1.2-5.7-2-5.7s-.2 5.7-2 5.7c-2.6 0-3-4.9-4-7.8-1-3-1.9-7.6 1.2-9.2Z" /></svg>;
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`dante-eyebrow ${light ? "dante-eyebrow--light" : ""}`}><span />{children}</div>;
}

function PriceTable({ rows, title }: { rows: PriceRow[]; title: string }) {
  return (
    <div className="prices-table-wrap">
      <table>
        <caption className="sr-only">Tarife pentru {title}</caption>
        <thead>
          <tr><th scope="col">Serviciu</th><th scope="col">Preț (lei)</th></tr>
        </thead>
        <tbody>
          {rows.map(([service, price]) => (
            <tr key={service}>
              <th scope="row">{service}</th>
              <td>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PricesSite() {
  return (
    <div className="prices-page">
      <SiteHeader clinic={clinic} />
      <main>
        <section className="prices-hero">
          <div className="prices-hero__pattern" />
          <div className="prices-hero__glow" />
          <div className="dante-shell prices-hero__grid">
            <div className="prices-hero__content">
              <Eyebrow light>Prețuri · Actualizat 08.2026</Eyebrow>
              <h1>Costuri transparente pentru sănătatea și estetica <em>zâmbetului tău.</em></h1>
              <p>
                Descoperă mai jos tarifele transparente pentru fiecare tratament Dantè Art.
                De la consultații și igienizare, până la implantologie și reabilitări protetice.
                Toate prețurile sunt accesibile direct în pagină, pentru a-ți oferi o imagine
                clară asupra investiției în sănătatea zâmbetului tău.
              </p>
              <div className="prices-hero__actions">
                <a href="/contact" className="dante-button dante-button--gold dante-button--large">Programează o consultație<Icon name="arrow" /></a>
                <a href="/servicii" className="dante-button dante-button--ghost dante-button--large">Vezi serviciile</a>
              </div>
              <div className="prices-hero__proof">
                <article><Icon name="calendar" /><span><strong>Plan de tratament</strong><small>Costul total, stabilit înainte de începerea lucrărilor.</small></span></article>
                <article><Icon name="card" /><span><strong>Plată în rate</strong><small>Prin Banca Transilvania.</small></span></article>
                <article><Icon name="tooth" /><span><strong>Consultație</strong><small>De la 100 lei.</small></span></article>
              </div>
            </div>
            <div className="prices-hero__media">
              <div className="prices-hero__image">
                <Image
                  src="/prices-hero.jpg"
                  alt="Cabinet stomatologic la clinica Dantè Art din Baia Mare"
                  fill
                  sizes="(max-width: 980px) 92vw, 42vw"
                  priority
                />
                <span />
              </div>
              <div className="prices-hero__badge"><strong>100%</strong><small>costuri explicate</small></div>
            </div>
          </div>
        </section>

        <nav className="prices-jump-nav" aria-label="Navigare rapidă prin tarife">
          <div className="dante-shell">
            {categories.map((category) => <a href={`#${category.id}`} key={category.id}>{category.label}</a>)}
          </div>
        </nav>

        <section className="prices-list" aria-labelledby="prices-list-title">
          <div className="dante-shell">
            <p className="prices-list__intro" id="prices-list-title">
              Sumele sunt exprimate în lei și includ manopera medicului și materialele folosite.
            </p>
            {categories.map((category, index) => (
              <article className="price-category" id={category.id} key={category.id}>
                <div className="price-category__head">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2>{category.title}</h2>
                    <p>{category.intro}</p>
                  </div>
                </div>
                <div className="price-category__content">
                  {category.groups.map((group, groupIndex) => (
                    <section className="price-group" key={group.title ?? groupIndex}>
                      {group.title && <h3>{group.title}</h3>}
                      {group.intro && <p className="price-group__intro">{group.intro}</p>}
                      <PriceTable rows={group.rows} title={group.title ?? category.title} />
                      {group.note && <p className="price-group__note">{group.note}</p>}
                    </section>
                  ))}
                  {category.links && (
                    <div className="price-category__links">
                      {category.links.map((link) => <a href={link.href} className="dante-text-link" key={link.href}>{link.label}<Icon name="arrow" /></a>)}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="prices-plan">
          <div className="dante-shell prices-plan__grid">
            <div>
              <Eyebrow light>Transparență</Eyebrow>
              <h2>De la listă la planul tău de tratament</h2>
            </div>
            <div>
              <p>
                Tarifele de mai sus reprezintă costul individual al fiecărei proceduri. Valoarea
                finală a tratamentului tău depinde de intervențiile specifice stabilite în cadrul
                consultației. În urma evaluării, primești un plan de tratament scris și complet
                detaliat: etapele necesare, durata estimată și costul total garantat, stabilit
                înainte de prima intervenție.
              </p>
              <ul>
                <li><Icon name="check" />Cunoști valoarea exactă a investiției înainte de prima intervenție</li>
                <li><Icon name="check" />Etapizăm lucrările complexe, ca să îți poți planifica bugetul</li>
                <li><Icon name="check" />Posibilitate de plată în rate prin Banca Transilvania</li>
              </ul>
              <a href="/contact" className="dante-button dante-button--gold dante-button--large">Programează o consultație<Icon name="arrow" /></a>
            </div>
          </div>
        </section>

        <section className="dante-section prices-faq">
          <div className="dante-shell prices-faq__grid">
            <div className="prices-faq__intro">
              <Eyebrow>Întrebări frecvente</Eyebrow>
              <h2>Întrebări despre costuri</h2>
            </div>
            <div className="prices-faq__list">
              {faqs.map((faq, index) => (
                <details key={faq.question}>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{faq.question}</strong><i aria-hidden="true">+</i></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="prices-cta">
          <div className="dante-shell prices-cta__inner">
            <Eyebrow light>Următorul pas</Eyebrow>
            <h2>Discutăm despre ce ai nevoie</h2>
            <p>Programează o consultație și stabilim împreună planul de tratament potrivit pentru tine, cu toate costurile explicate de la început. Ne poți suna, ne poți scrie pe WhatsApp sau poți completa formularul de contact.</p>
            <div>
              <a href="/contact" className="dante-button dante-button--gold dante-button--large">Programează o consultație<Icon name="arrow" /></a>
              <a href="/servicii" className="dante-button dante-button--ghost dante-button--large">Vezi serviciile</a>
            </div>
          </div>
        </section>

        <aside className="prices-legal" aria-label="Mențiune legală privind tarifele">
          <div className="dante-shell">
            <p>Tarifele afișate sunt exprimate în RON, au caracter estimativ și reflectă cele mai frecvente servicii oferite în clinică. Lista completă și detaliată a tarifelor este permanent disponibilă la recepția cabinetului.</p>
            <p>Costul final se stabilește în urma consultației de specialitate, în funcție de diagnosticul individual, și este garantat prin planul de tratament personalizat oferit înainte de orice intervenție. Lista de tarife este valabilă începând cu 01.08.2026 și poate suferi modificări periodice.</p>
            <p>Informațiile din această pagină au rol informativ și nu înlocuiesc evaluarea medicală din cabinet.</p>
          </div>
        </aside>
      </main>

      <SiteFooter />
    </div>
  );
}
