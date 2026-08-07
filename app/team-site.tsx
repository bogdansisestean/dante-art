"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { clinic } from "./site-config";
import { team, type TeamMember } from "./team-data";

type IconName = "arrow";

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
  return null;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`team-eyebrow ${light ? "team-eyebrow--light" : ""}`}><span />{children}</div>;
}

function TeamProfile({ member, index }: { member: TeamMember; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <section className={`team-profile ${reversed ? "team-profile--reverse" : ""}`}>
      <div className="dante-shell team-profile__grid">
        <div className="team-profile__media" data-team-reveal>
          <Image
            src={member.image}
            alt={member.imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 44vw"
          />
          <blockquote>
            <p>„{member.quote}”</p>
            <cite>{member.name}</cite>
          </blockquote>
        </div>
        <div className="team-profile__content" data-team-reveal>
          <Eyebrow>{member.eyebrow}</Eyebrow>
          <h2>{member.name}</h2>
          <p className="team-profile__role">{member.role}</p>
          <div className="team-profile__copy">
            <p>{member.bio}</p>
          </div>
          <ul className="team-profile__tags">
            {member.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function TeamSite() {
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
    document.querySelectorAll("[data-team-reveal]").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="team-page">
      <div className="dante-progress" style={{ width: `${progress}%` }} />
      <SiteHeader clinic={clinic} />

      <main>
        <section className="team-hero">
          <div className="team-hero__pattern" />
          <div className="team-hero__glow" />
          <div className="dante-shell team-hero__inner" data-team-reveal>
            <Eyebrow light>Echipa</Eyebrow>
            <h1>Oamenii din spatele <em>fiecărui detaliu.</em></h1>
            <p>
              La Dantè Art, nu ești un simplu pacient, ci prioritatea unei echipe dedicate. Cazul
              tău este preluat direct de medicul potrivit nevoilor tale, care te va ghida pas cu
              pas pe tot parcursul tratamentului.
            </p>
            <p>
              Construim planuri terapeutice personalizate, transparente și asistate de cea mai
              performantă tehnologie. Obiectivul nostru nu este doar o intervenție reușită, ci
              sănătatea și estetica zâmbetului tău, menținute de-a lungul anilor.
            </p>
            <nav className="team-breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Acasă</a><span aria-hidden="true">›</span><strong>Echipa</strong>
            </nav>
            <div className="team-hero__actions">
              <a href="/contact" className="dante-button dante-button--gold dante-button--large">
                Programează o consultație <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        {team.map((member, index) => (
          <TeamProfile member={member} index={index} key={member.slug} />
        ))}

        <section className="team-cta">
          <div className="team-cta__pattern" />
          <div className="dante-shell team-cta__inner" data-team-reveal>
            <Eyebrow light>Următorul pas</Eyebrow>
            <h2>Experiența stomatologică pe care o meriți. Fără compromisuri.</h2>
            <p>
              Zâmbetul pe care ți-l dorești începe cu o simplă discuție. Sună-ne, scrie-ne pe
              WhatsApp sau trimite-ne un mesaj prin formular, iar noi ne asigurăm ca fiecare vizită
              să fie una relaxantă și lipsită de griji.
            </p>
            <div className="team-cta__actions">
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

      <SiteFooter />
    </div>
  );
}
