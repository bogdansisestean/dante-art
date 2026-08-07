"use client";

import { useEffect, useState } from "react";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { clinic } from "./site-config";

type IconName =
  | "arrow"
  | "calendar"
  | "card"
  | "scan"
  | "whatsapp"
  | "implant"
  | "braces"
  | "tooth"
  | "sparkles"
  | "crown"
  | "shield"
  | "cavity"
  | "canal"
  | "drop"
  | "smile"
  | "eject";

const toothPath =
  "M7.2 3.5c1.6-.8 3.2.6 4.8.6s3.2-1.4 4.8-.6c3.1 1.6 2.2 6.2 1.2 9.2-1 2.9-1.4 7.8-4 7.8-1.8 0-1.2-5.7-2-5.7s-.2 5.7-2 5.7c-2.6 0-3-4.9-4-7.8-1-3-1.9-7.6 1.2-9.2Z";

function Icon({ name }: { name: IconName }) {
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
  if (name === "scan") return <svg {...common}><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" /><circle cx="12" cy="12" r="4" /><path d="M9 12h6" /></svg>;
  if (name === "whatsapp") return <svg {...common}><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.3-4.3a8.5 8.5 0 1 1 15.7-4.4Z" /><path d="M8.1 7.6c.2-.4.4-.4.7-.4h.5l.9 2.1c.1.3 0 .5-.2.7l-.7.8a7.3 7.3 0 0 0 3.7 3.2c.3.1.5.1.7-.2l.9-1.1c.2-.3.5-.3.8-.2l2 .9" /></svg>;
  if (name === "implant") return <svg {...common}><path d="M8 4h8l-1 4H9L8 4ZM10 8v3l-2 2 4 2-4 2 4 2-1 2M14 8v3l2 2-4 2 4 2-4 2 1 2" /></svg>;
  if (name === "braces") return <svg {...common}><path d="M5 9c2 5 4.5 7.5 7 7.5s5-2.5 7-7.5" /><circle cx="8.4" cy="9.6" r="1" fill="currentColor" stroke="none" /><circle cx="15.6" cy="9.6" r="1" fill="currentColor" stroke="none" /></svg>;
  if (name === "tooth") return <svg {...common}><path d={toothPath} /></svg>;
  if (name === "sparkles") return <svg {...common}><path d="m12 2 1.4 4.6L18 8l-4.6 1.4L12 14l-1.4-4.6L6 8l4.6-1.4L12 2ZM18.5 14l.8 2.7 2.7.8-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8.8-2.7Z" /></svg>;
  if (name === "crown") return <svg {...common}><path d="M4 18h16M4.5 18l-1-8 4 3L12 6l4.5 7 4-3-1 8" /></svg>;
  if (name === "shield") return <svg {...common}><path d="M12 3 19 6v5.5c0 4.5-2.8 7.4-7 9.5-4.2-2.1-7-5-7-9.5V6l7-3Z" /><path d="m9 12 2 2 4-5" /></svg>;
  if (name === "cavity") return <svg {...common}><path d={toothPath} /><circle cx="12" cy="9.6" r="1.4" fill="currentColor" stroke="none" /></svg>;
  if (name === "canal") return <svg {...common}><path d={toothPath} /><path d="M12 8v10" strokeDasharray="1.6 2.2" /></svg>;
  if (name === "drop") return <svg {...common}><path d="M12 3c3.4 4.2 6 7.9 6 11.3a6 6 0 1 1-12 0C6 10.9 8.6 7.2 12 3Z" /></svg>;
  if (name === "smile") return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M8.5 10h.01M15.5 10h.01M8 14c1.1 1.4 2.4 2 4 2s2.9-.6 4-2" /></svg>;
  return <svg {...common}><path d="M12 4v10m-4-4 4-4 4 4" /><path d="M6 18h12" /></svg>;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`services-eyebrow ${light ? "services-eyebrow--light" : ""}`}><span />{children}</div>;
}

const trustPoints: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "calendar",
    title: "Plan de tratament scris",
    text: "Etapele, durata și costul total, stabilite înainte de prima intervenție.",
  },
  {
    icon: "card",
    title: "Plată în rate",
    text: "Prin Banca Transilvania.",
  },
  {
    icon: "scan",
    title: "Consultație de la 100 lei",
    text: "Sau 250 lei, cu cameră intraorală și fotografii.",
  },
];

type ServiceCard = { icon: IconName; title: string; text: string; price: string };

const services: ServiceCard[] = [
  {
    icon: "implant",
    title: "Implant dentar",
    text: "Înlocuiește rădăcina dintelui pierdut și oprește retragerea osului din zona respectivă. Poziția fiecărui implant este planificată digital, pe imaginea 3D obținută prin CBCT.",
    price: "de la 2.500 lei",
  },
  {
    icon: "braces",
    title: "Ortodonție",
    text: "Aparat dentar pentru copii și adulți, metalic sau din safir. Corectăm nu doar alinierea dinților, ci și felul în care se închide mușcătura.",
    price: "de la 1.500 lei",
  },
  {
    icon: "tooth",
    title: "Fațete dentare",
    text: "Corectează forma, culoarea și micile neregularități ale dinților din față, cu un rezultat gândit pentru trăsăturile tale.",
    price: "2.000 lei / bucată",
  },
  {
    icon: "sparkles",
    title: "Albire dentară",
    text: "În cabinet, cu lampă profesională, într-o singură ședință, sau acasă, cu gutiere realizate după amprenta ta.",
    price: "de la 850 lei",
  },
  {
    icon: "crown",
    title: "Coroane și proteze",
    text: "Refac forma și funcția dinților distruși sau lipsă. Coroanele din zirconiu monolit combină rezistența cu un aspect natural.",
    price: "de la 800 lei",
  },
  {
    icon: "shield",
    title: "Igienizare și prevenție",
    text: "Detartraj, periaj profesional și Air Flow, la fiecare șase luni. Cea mai ieftină metodă de a evita tratamentele scumpe.",
    price: "de la 300 lei",
  },
  {
    icon: "cavity",
    title: "Tratarea cariilor",
    text: "Obturația oprește evoluția cariei și reface forma dintelui. Cu cât o descoperim mai devreme, cu atât tratamentul este mai simplu.",
    price: "de la 300 lei",
  },
  {
    icon: "canal",
    title: "Tratament de canal",
    text: "Salvează dintele atunci când caria a ajuns la nerv sau când infecția a atins rădăcina.",
    price: "de la 500 lei",
  },
  {
    icon: "drop",
    title: "Parodontologie",
    text: "Gingii care sângerează, se retrag sau dinți care au căpătat mobilitate. Tratăm cauza, nu doar simptomul.",
    price: "de la 200 lei",
  },
  {
    icon: "smile",
    title: "Stomatologie pentru copii",
    text: "Sigilări, fluorizări și tratamente explicate pe înțelesul lor. Cu răbdare, ca vizita la dentist să nu devină o frică de adult.",
    price: "de la 100 lei",
  },
  {
    icon: "eject",
    title: "Extracții și chirurgie orală",
    text: "Ultima soluție, atunci când dintele nu mai poate fi salvat. Se face sub anestezie, iar locul poate fi refăcut ulterior cu un implant.",
    price: "de la 220 lei",
  },
];

export default function ServicesSite() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-services-reveal]").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="services-page">
      <div className="dante-progress" style={{ width: `${progress}%` }} />
      <SiteHeader clinic={clinic} />

      <main>
        <section className="services-hero">
          <div className="services-hero__pattern" />
          <div className="services-hero__glow" />
          <div className="dante-shell services-hero__inner" data-services-reveal>
            <Eyebrow light>Servicii</Eyebrow>
            <h1>De la o carie, până la o <em>reabilitare completă.</em></h1>
            <p>
              Acoperim tot ce ține de sănătatea și estetica dinților: igienizare, tratarea
              cariilor, ortodonție, implanturi și lucrări protetice complexe. Indiferent de
              tratament, pornim de la un diagnostic clar și de la un plan scris, cu toate
              costurile stabilite înainte de prima intervenție.
            </p>
            <nav className="services-breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Acasă</a><span aria-hidden="true">›</span><strong>Servicii</strong>
            </nav>
            <div className="services-hero__actions">
              <a href="/contact" className="dante-button dante-button--gold dante-button--large">
                Programează o consultație <Icon name="arrow" />
              </a>
              <a href="/preturi" className="dante-button dante-button--ghost dante-button--large">
                Vezi prețurile
              </a>
            </div>
          </div>
        </section>

        <section className="services-trust" aria-label="De ce Dantè Art">
          <div className="dante-shell services-trust__grid">
            {trustPoints.map((point) => (
              <article className="services-trust__item" key={point.title} data-services-reveal>
                <span className="services-trust__icon"><Icon name={point.icon} /></span>
                <span>
                  <strong>{point.title}</strong>
                  <small>{point.text}</small>
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="services-grid-section">
          <div className="dante-shell">
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-tile" key={service.title} data-services-reveal>
                  <span className="service-tile__icon"><Icon name={service.icon} /></span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-tile__price">{service.price}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-cta">
          <div className="services-cta__pattern" />
          <div className="dante-shell services-cta__inner" data-services-reveal>
            <Eyebrow light>Următorul pas</Eyebrow>
            <h2>Nu știi de unde să începi?</h2>
            <p>
              Vino la o consultație. Verificăm tot, îți explicăm ce ai de făcut și în ce ordine,
              iar la final primești planul de tratament scris, cu costurile complete.
            </p>
            <div className="services-cta__actions">
              <a href="/contact" className="dante-button dante-button--gold dante-button--large">
                Programează o consultație <Icon name="arrow" />
              </a>
              <a href="/preturi" className="dante-button dante-button--ghost dante-button--large">
                Vezi prețurile
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
