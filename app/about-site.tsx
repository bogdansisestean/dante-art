"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import BrandLogo from "./brand-logo";
import SiteHeader from "./site-header";

const clinic = {
  city: "Baia Mare",
  streetAddress: "Str. Uranus, Nr. 1, Etaj Parter, Apartament 2, Județ Maramureș",
  phoneDisplay: "0770 733 891",
  phoneHref: "tel:+40770733891",
};

type IconName = "arrow" | "clock" | "heart" | "shield" | "sparkles" | "tooth";

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
  if (name === "clock") return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3.5 2" /></svg>;
  if (name === "heart") return <svg {...common}><path d="M20.8 8.7c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10a4.7 4.7 0 0 1 8.8-2.3 4.7 4.7 0 0 1 8.8 2.3Z" /></svg>;
  if (name === "shield") return <svg {...common}><path d="M12 3 19 6v5.5c0 4.5-2.8 7.4-7 9.5-4.2-2.1-7-5-7-9.5V6l7-3Z" /><path d="m9 12 2 2 4-5" /></svg>;
  if (name === "sparkles") return <svg {...common}><path d="m12 2 1.4 4.6L18 8l-4.6 1.4L12 14l-1.4-4.6L6 8l4.6-1.4L12 2ZM18.5 14l.8 2.7 2.7.8-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8.8-2.7Z" /></svg>;
  return <svg {...common}><path d="M7.2 3.5c1.6-.8 3.2.6 4.8.6s3.2-1.4 4.8-.6c3.1 1.6 2.2 6.2 1.2 9.2-1 2.9-1.4 7.8-4 7.8-1.8 0-1.2-5.7-2-5.7s-.2 5.7-2 5.7c-2.6 0-3-4.9-4-7.8-1-3-1.9-7.6 1.2-9.2Z" /></svg>;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`about-eyebrow ${light ? "about-eyebrow--light" : ""}`}><span />{children}</div>;
}

const principles: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "tooth",
    title: "Diagnostic de precizie și timp dedicat",
    text: "Fără tratamente grăbite. Fiecare programare include o evaluare riguroasă și timp alocat explicării opțiunilor de tratament.",
  },
  {
    icon: "heart",
    title: "Pedodonție blândă și adaptativă",
    text: "Copiii beneficiază de sesiuni dedicate de acomodare. Intervențiile încep doar atunci când micul pacient se simte pe deplin în siguranță.",
  },
  {
    icon: "shield",
    title: "Profilaxie și prevenție proactivă",
    text: "Zâmbetul impecabil se menține prin controale periodice. Prevenția riguroasă previne intervențiile invazive și protejează sănătatea pe termen lung.",
  },
];

export default function AboutSite() {
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
    document.querySelectorAll("[data-about-reveal]").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="about-page">
      <div className="dante-progress" style={{ width: `${progress}%` }} />
      <SiteHeader clinic={clinic} />

      <main>
        <section className="about-hero">
          <div className="about-hero__pattern" />
          <div className="about-hero__glow" />
          <div className="dante-shell about-hero__grid">
            <div className="about-hero__content" data-about-reveal>
              <Eyebrow light>Despre noi</Eyebrow>
              <h1>Excelență medicală definită de timp, rigoare și atenție la detalii.</h1>
              <p>
                Dantè Art este o clinică stomatologică din Baia Mare fondată de Dr. Ileana Zaharie,
                din dorința de a oferi un standard ridicat de îngrijire dentară. Alocăm timp generos
                fiecărei vizite pentru o diagnosticare de precizie, planuri de tratament personalizate
                și o comunicare transparentă. Aici, sănătatea și estetica zâmbetului tău primesc
                întreaga noastră atenție.
              </p>
              <nav className="about-breadcrumbs" aria-label="Breadcrumb">
                <a href="/">Acasă</a><span aria-hidden="true">›</span><strong>Despre noi</strong>
              </nav>
            </div>
            <div className="about-hero__media" data-about-reveal>
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=90"
                alt="Dr. Ileana Zaharie, clinica stomatologică Dantè Art din Baia Mare"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                priority
              />
              <div className="about-hero__media-wash" />
              <div className="about-hero__seal"><Icon name="sparkles" /><span>Dantè Art</span></div>
            </div>
          </div>
        </section>

        <section className="about-founder">
          <div className="dante-shell about-founder__grid">
            <div className="about-founder__media" data-about-reveal>
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=90"
                alt="Dr. Ileana Zaharie, medic stomatolog specializat în pedodonție, Baia Mare"
                fill
                sizes="(max-width: 900px) 100vw, 44vw"
              />
              <blockquote>
                <p>„Grija pentru zâmbet începe din primii ani de viață. Când prima vizită devine o amintire prietenoasă, te asiguri că cel mic va avea grijă de zâmbetul său întreaga viață.”</p>
                <cite>Dr. Ileana Zaharie</cite>
              </blockquote>
            </div>
            <div className="about-founder__content" data-about-reveal>
              <Eyebrow>Medic fondator</Eyebrow>
              <h2>Dr. Ileana Zaharie</h2>
              <p className="about-founder__role">Medic stomatolog · Stomatologie generală și pedodonție</p>
              <div className="about-founder__copy">
                <p>
                  Alegerea Dr. Ileana Zaharie de a fonda Dantè Art a pornit dintr-o viziune clară:
                  stomatologia modernă presupune mai mult decât tratamente de calitate. Presupune
                  empatie, tehnologie avansată și o abordare minuțioasă. Dr. Zaharie pune accent pe
                  o diagnosticare completă bazată pe imagistică digitală și pe explicarea detaliată
                  a fiecărui pas, transformând fiecare tratament într-o experiență sigură,
                  predictibilă și lipsită de anxietate.
                </p>
                <p>
                  Sub îndrumarea sa, componenta de pedodonție beneficiază de un protocol dedicat.
                  Considerăm că primele experiențe stomatologice ale copiilor modelează sănătatea lor
                  orală pe viață. De aceea, abordarea celor mici se bazează pe tehnici blânde de
                  adaptare ghidată, într-un mediu primitor și un ritm adaptat fiecărui copil.
                </p>
              </div>
              <p className="about-founder__team-link">
                Pentru tratamentele care cer altă specializare, lucrăm cu medici colaboratori.
                Îi cunoști pe pagina <a href="/echipa">Echipa</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="about-process">
          <div className="dante-shell">
            <header className="about-process__head" data-about-reveal>
              <Eyebrow>Cum lucrăm</Eyebrow>
              <h2>Cum lucrăm la Dantè Art</h2>
            </header>
            <div className="about-process__grid">
              {principles.map((principle, index) => (
                <article key={principle.title} data-about-reveal>
                  <span className="about-process__number">0{index + 1}</span>
                  <div className="about-process__icon"><Icon name={principle.icon} /></div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="about-cta__pattern" />
          <div className="dante-shell about-cta__inner" data-about-reveal>
            <Eyebrow light>Următorul pas</Eyebrow>
            <h2>Experiența stomatologică pe care o meriți. Fără compromisuri.</h2>
            <p>
              Zâmbetul pe care ți-l dorești începe cu o simplă discuție. Sună-ne, scrie-ne pe
              WhatsApp sau trimite-ne un mesaj prin formular, iar noi ne asigurăm ca fiecare vizită
              să fie una relaxantă și lipsită de griji.
            </p>
            <div className="about-cta__actions">
              <a href="/contact" className="dante-button dante-button--gold dante-button--large">
                Programează o consultație <Icon name="arrow" />
              </a>
              <a href="/servicii" className="dante-button dante-button--ghost dante-button--large">
                Descoperă serviciile noastre <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="dante-footer">
        <div className="dante-shell">
          <div className="dante-footer__grid">
            <div className="dante-footer__brand">
              <a href="/" aria-label="Dantè Art — Acasă"><BrandLogo /></a>
              <p>Îngrijire stomatologică atentă, transparentă și adaptată fiecărui pacient.</p>
            </div>
            <div className="dante-footer__column">
              <small>Navigare</small>
              <a href="/">Acasă</a><a href="/despre">Despre noi</a><a href="/echipa">Echipa</a>
            </div>
            <div className="dante-footer__column">
              <small>Descoperă</small>
              <a href="/servicii">Servicii</a><a href="/tehnologie">Tehnologie</a><a href="/preturi">Prețuri</a>
            </div>
            <div className="dante-footer__column dante-footer__contact">
              <small>Contact</small>
              <a href={clinic.phoneHref}>{clinic.phoneDisplay}</a>
              <span>{clinic.streetAddress}</span>
              <a href="/contact" className="dante-button dante-button--gold">Programează-te <Icon name="arrow" /></a>
            </div>
          </div>
          <div className="dante-footer__bottom">
            <span>© 2026 Dantè Art. Toate drepturile rezervate.</span>
            <nav aria-label="Linkuri legale"><a href="/politica-de-confidentialitate">Confidențialitate</a><a href="/termeni-si-conditii">Termeni și condiții</a></nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
