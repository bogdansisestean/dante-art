"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { clinic } from "./site-config";
import { equipmentBlocks } from "./technology-data";

function Icon({ name }: { name: "arrow" | "check" }) {
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
  return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`dante-eyebrow ${light ? "dante-eyebrow--light" : ""}`}><span />{children}</div>;
}

const patientPoints = [
  {
    number: "01",
    text: "Mai puțin timp pe scaun — investigația digitală și scanarea reduc numărul de vizite necesare.",
  },
  {
    number: "02",
    text: "Doză redusă de radiații — tehnologia imagistică de ultimă generație utilizează un nivel de radiații semnificativ redus față de radiologia convențională, garantând siguranță deplină.",
  },
  {
    number: "03",
    text: "Fără amprente clasice — scanarea tridimensională de înaltă rezoluție înlocuiește complet materialele clasice de amprentare, oferind o experiență rapidă și fără neplăceri.",
  },
  {
    number: "04",
    text: "Echipamente certificate — întregul nostru ecosistem tehnologic este acreditat la cele mai înalte standarde de siguranță și calitate din Uniunea Europeană.",
  },
];

export default function TechnologySite() {
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
    document.querySelectorAll("[data-tech-reveal]").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="tech-page">
      <div className="dante-progress" style={{ width: `${progress}%` }} />
      <SiteHeader clinic={clinic} />

      <main>
        <section className="tech-hero">
          <div className="tech-hero__pattern" />
          <div className="tech-hero__glow" />
          <div className="dante-shell tech-hero__grid">
            <div className="tech-hero__content" data-tech-reveal>
              <Eyebrow light>Tehnologie</Eyebrow>
              <h1>Tehnologie care se vede în rezultat.</h1>
              <p>
                Tehnologia nu este un accesoriu, ci motivul pentru care un tratament durează mai
                puțin și rezistă mai mult. La Dantè Art, diagnosticul, planificarea și execuția se
                sprijină pe echipamente digitale certificate conform normelor europene, alese pentru
                precizia lor și pentru confortul pacientului.
              </p>
              <a href="/contact" className="dante-button dante-button--gold dante-button--large">
                Programează o consultație <Icon name="arrow" />
              </a>
            </div>
            <div className="tech-hero__media" data-tech-reveal>
              <Image
                src="/technology-hero.jpg"
                alt="Aparat de radiologie digitală din cabinetul Dantè Art Baia Mare"
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                priority
              />
              <div className="tech-hero__media-wash" />
            </div>
          </div>
        </section>

        <section className="tech-equipment">
          <div className="dante-shell">
            {equipmentBlocks.map((block, index) => (
              <article className={`tech-block ${block.reverse ? "tech-block--reverse" : ""}`} key={block.title}>
                <div className={`tech-block__media ${block.contain ? "tech-block__media--contain" : ""}`} data-tech-reveal>
                  <Image src={block.image} alt={block.alt} fill sizes="(max-width: 900px) 100vw, 46vw" />
                </div>
                <div className="tech-block__content" data-tech-reveal>
                  <span className="tech-block__number">{String(index + 1).padStart(2, "0")}</span>
                  <Eyebrow>{block.eyebrow}</Eyebrow>
                  <h3>{block.title}</h3>
                  <p>{block.paragraph}</p>
                  <ul className="tech-block__points">
                    {block.points.map((point) => (
                      <li key={point}>
                        <Icon name="check" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="tech-band">
          <div className="dante-shell">
            <h2 data-tech-reveal>Ce înseamnă asta pentru pacient</h2>
            <div className="tech-band__grid">
              {patientPoints.map((point) => (
                <article key={point.number} data-tech-reveal>
                  <span>{point.number}</span>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tech-cta">
          <div className="tech-cta__pattern" />
          <div className="dante-shell tech-cta__inner" data-tech-reveal>
            <Eyebrow light>Următorul pas</Eyebrow>
            <h2>Simți diferența încă de la prima consultație.</h2>
            <p>
              Programează o vizită și construim planul tău de tratament pe baza imagisticii de
              înaltă precizie, eliminând orice presupunere.
            </p>
            <div className="tech-cta__actions">
              <a href="/contact" className="dante-button dante-button--gold dante-button--large">
                Programează-te <Icon name="arrow" />
              </a>
              <a href="/servicii" className="dante-button dante-button--ghost dante-button--large">
                Vezi serviciile <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
