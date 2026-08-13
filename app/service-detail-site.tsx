"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { clinic } from "./site-config";
import type { ServiceContent } from "./service-data";

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

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`dante-eyebrow ${light ? "dante-eyebrow--light" : ""}`}><span />{children}</div>;
}

// "Preț — de la 300 lei" → emphasised label + rest. Plain strings render as-is.
function QuickFact({ text }: { text: string }) {
  const [label, ...rest] = text.split(" — ");
  if (rest.length === 0) return <p>{text}</p>;
  return (
    <p>
      <strong>{label}</strong> {rest.join(" — ")}
    </p>
  );
}

export default function ServiceDetailSite({ service }: { service: ServiceContent }) {
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
    document.querySelectorAll("[data-service-reveal]").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const pricesHref = service.pricesHref ?? "/preturi";

  return (
    <div className="service-detail">
      <div className="dante-progress" style={{ width: `${progress}%` }} />
      <SiteHeader clinic={clinic} />

      <main>
        <section className={`sd-hero ${service.heroImage ? "sd-hero--media" : ""}`}>
          <div className="sd-hero__pattern" />
          <div className="sd-hero__glow" />
          <div className="dante-shell sd-hero__inner" data-service-reveal>
            <div className="sd-hero__content">
              <Eyebrow light>{service.eyebrow}</Eyebrow>
              <h1>{service.title}</h1>
              <p>{service.intro}</p>
              <nav className="sd-breadcrumbs" aria-label="Breadcrumb">
                <a href="/">Acasă</a>
                <span aria-hidden="true">›</span>
                <a href="/servicii">Servicii</a>
                <span aria-hidden="true">›</span>
                <strong>{service.breadcrumb ?? service.eyebrow}</strong>
              </nav>
              <div className="sd-hero__actions">
                <a href="/contact" className="dante-button dante-button--gold dante-button--large">
                  Programează o consultație <Icon name="arrow" />
                </a>
              </div>
            </div>
            {service.heroImage && (
              <div className="sd-hero__media">
                <Image
                  src={service.heroImage.src}
                  alt={service.heroImage.alt}
                  fill
                  sizes="(max-width: 900px) 90vw, 44vw"
                  priority
                />
                <div className="sd-hero__media-wash" />
              </div>
            )}
          </div>
        </section>

        <section className="sd-band" aria-label="Pe scurt">
          <div className="dante-shell sd-band__grid">
            {service.quickFacts.map((fact, index) => (
              <article key={fact} data-service-reveal>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <QuickFact text={fact} />
              </article>
            ))}
          </div>
        </section>

        <section className="sd-need">
          <div className={`dante-shell sd-need__grid ${service.need.points ? "" : "sd-need__grid--full"}`}>
            <div className="sd-need__intro" data-service-reveal>
              <Eyebrow>Când ai nevoie</Eyebrow>
              <h2>{service.need.heading}</h2>
              {service.need.paragraph && <p>{service.need.paragraph}</p>}
            </div>
            {service.need.points && (
              <ul className="sd-need__points" data-service-reveal>
                {service.need.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" />
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {service.variantBlock && (
          <section className="sd-variants">
            <div className="dante-shell">
              <div className="sd-variants__head" data-service-reveal>
                <Eyebrow>{service.variantBlock.eyebrow}</Eyebrow>
                <h2>{service.variantBlock.heading}</h2>
                <p>{service.variantBlock.intro}</p>
              </div>
              <div className="sd-variants__cards">
                {service.variantBlock.cards.map((card) => (
                  <article key={card.title} data-service-reveal>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
              {service.variantBlock.footnote && (
                <p className="sd-variants__note" data-service-reveal>{service.variantBlock.footnote}</p>
              )}
            </div>
          </section>
        )}

        <section className="sd-process">
          <div className="dante-shell">
            <div className="sd-process__head" data-service-reveal>
              <Eyebrow>Cum decurge</Eyebrow>
              <h2>{service.processHeading ?? "Pas cu pas, fără surprize"}</h2>
            </div>
            <ol className="sd-process__steps">
              {service.process.map((step, index) => (
                <li key={step} data-service-reveal>
                  <span className="sd-process__num">{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {service.extraBlock && (
          <section className="sd-extra">
            <div className="dante-shell sd-extra__inner" data-service-reveal>
              <Eyebrow>{service.extraBlock.eyebrow}</Eyebrow>
              <h2>{service.extraBlock.heading}</h2>
              <p>{service.extraBlock.paragraph}</p>
              {service.extraBlock.link && (
                <a href={service.extraBlock.link.href} className="dante-text-link">
                  {service.extraBlock.link.label}
                  <Icon name="arrow" />
                </a>
              )}
            </div>
          </section>
        )}

        <section className="sd-costs">
          <div className="dante-shell">
            <div className="sd-costs__head" data-service-reveal>
              <Eyebrow>Costuri</Eyebrow>
              <h2>Prețuri, la vedere</h2>
            </div>
            <div className="prices-table-wrap" data-service-reveal>
              <table>
                <caption className="sr-only">Tarife pentru {service.procedureName}</caption>
                <thead>
                  <tr><th scope="col">Serviciu</th><th scope="col">Preț (lei)</th></tr>
                </thead>
                <tbody>
                  {service.costs.rows.map(([label, price]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {service.costs.note && <p className="price-group__note" data-service-reveal>{service.costs.note}</p>}
          </div>
        </section>

        <section className="dante-section sd-faq">
          <div className="dante-shell sd-faq__grid">
            <div className="sd-faq__intro" data-service-reveal>
              <Eyebrow>Întrebări frecvente</Eyebrow>
              <h2>Ce ne întreabă pacienții</h2>
            </div>
            <div className="sd-faq__list" data-service-reveal>
              {service.faqs.map((faq, index) => (
                <details key={faq.question}>
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{faq.question}</strong>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {service.relatedLinks && service.relatedLinks.length > 0 && (
          <section className="sd-related" aria-label="Vezi și">
            <div className="dante-shell sd-related__inner" data-service-reveal>
              <span className="sd-related__label">Vezi și</span>
              <div className="sd-related__links">
                {service.relatedLinks.map((link) => (
                  <a href={link.href} key={link.href} className="dante-text-link">
                    {link.label}
                    <Icon name="arrow" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="sd-cta">
          <div className="sd-cta__pattern" />
          <div className="dante-shell sd-cta__inner" data-service-reveal>
            <Eyebrow light>Următorul pas</Eyebrow>
            <h2>{service.cta?.heading ?? "Vino la o consultație"}</h2>
            <p>
              {service.cta?.paragraph ??
                "Ne poți suna, ne poți scrie pe WhatsApp sau poți completa formularul de contact. Stabilim împreună o oră care ți se potrivește."}
            </p>
            <div className="sd-cta__actions">
              <a href="/contact" className="dante-button dante-button--gold dante-button--large">
                Programează o consultație <Icon name="arrow" />
              </a>
              <a href={pricesHref} className="dante-button dante-button--ghost dante-button--large">
                Vezi prețurile
              </a>
            </div>
          </div>
        </section>

        <aside className="prices-legal" aria-label="Mențiune legală">
          <div className="dante-shell">
            <p>Informațiile din această pagină au rol informativ și nu înlocuiesc evaluarea medicală din cabinet.</p>
          </div>
        </aside>
      </main>

      <SiteFooter />
    </div>
  );
}
