"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import AppointmentModal from "./appointment-modal";
import BrandLogo from "./brand-logo";
import SiteHeader from "./site-header";

type IconName =
  | "arrow"
  | "calendar"
  | "check"
  | "clock"
  | "implant"
  | "mail"
  | "map"
  | "phone"
  | "scan"
  | "shield"
  | "smile"
  | "sparkles"
  | "tooth"
  | "whatsapp";

type ClinicDetails = {
  city: string;
  streetAddress?: string;
  phoneDisplay?: string;
  phoneHref?: string;
  whatsappHref?: string;
  email?: string;
  weekdayHours?: string;
  saturdayHours?: string;
  mapsUrl?: string;
  mapsEmbedUrl?: string;
};

// Complete only with information confirmed by the clinic owner.
const clinic: ClinicDetails = {
  city: "Baia Mare",
  streetAddress: "Str. Uranus, Nr. 1, Etaj Parter, Apartament 2, Județ Maramureș",
  phoneDisplay: "0770 733 891",
  phoneHref: "tel:+40770733891",
  whatsappHref: "https://wa.me/40770733891",
};

const navigation = [
  { href: "/", label: "Acasă" },
  { href: "/despre", label: "Despre noi" },
  { href: "/servicii", label: "Servicii", hasMenu: true },
  { href: "/echipa", label: "Echipa" },
  { href: "/tehnologie", label: "Tehnologie" },
  { href: "/preturi", label: "Prețuri" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const trustItems: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "scan",
    title: "Tehnologie digitală",
    text: "Diagnostic precis, cu ajutorul tehnologiei digitale și al investigațiilor moderne.",
  },
  {
    icon: "calendar",
    title: "Plan de tratament transparent",
    text: "Primești un plan personalizat, cu etapele și costurile explicate de la început.",
  },
  {
    icon: "shield",
    title: "Tratamente fără durere",
    text: "Folosim anestezie modernă și o abordare atentă pentru vizite cât mai confortabile.",
  },
  {
    icon: "smile",
    title: "Echipă de specialiști",
    text: "Medici cu specializări diferite colaborează pentru a găsi soluția potrivită.",
  },
];

const services: {
  href: string;
  icon: IconName;
  number: string;
  title: string;
  text: string;
}[] = [
  {
    href: "/servicii/implant-dentar-baia-mare",
    icon: "implant",
    number: "01",
    title: "Implant dentar",
    text: "Înlocuim dinții lipsă cu implanturi stabile și naturale, planificate digital.",
  },
  {
    href: "/servicii/fatete-dentare-baia-mare",
    icon: "sparkles",
    number: "02",
    title: "Fațete dentare",
    text: "Corectăm forma și culoarea dinților pentru un zâmbet armonios, cu aspect natural.",
  },
  {
    href: "/servicii/albire-dentara-baia-mare",
    icon: "smile",
    number: "03",
    title: "Albire dentară",
    text: "Albire profesională, sigură pentru smalț, cu rezultate vizibile de la prima ședință.",
  },
  {
    href: "/servicii/estetica-dentara-baia-mare",
    icon: "scan",
    number: "04",
    title: "Estetică dentară & Smile Design",
    text: "Îți arătăm cum va arăta zâmbetul tău înainte să începem tratamentul.",
  },
  {
    href: "/servicii/ortodontie-baia-mare",
    icon: "tooth",
    number: "05",
    title: "Ortodonție",
    text: "Aparate dentare și alignere pentru copii și adulți. Dinți drepți la orice vârstă.",
  },
  {
    href: "/servicii/coroane-si-proteze-dentare-baia-mare",
    icon: "shield",
    number: "06",
    title: "Coroane și proteze",
    text: "Lucrări protetice personalizate, pentru masticație confortabilă și aspect natural.",
  },
  {
    href: "/servicii/tratament-de-canal-baia-mare",
    icon: "tooth",
    number: "07",
    title: "Tratament de canal",
    text: "Salvăm dinții afectați de carii profunde sau infecții, fără durere.",
  },
  {
    href: "/servicii/igienizare-dentara-baia-mare",
    icon: "sparkles",
    number: "08",
    title: "Igienizare și prevenție",
    text: "Detartraj, periaj profesional și controale regulate. Cel mai ieftin tratament e prevenția.",
  },
];

const firstVisitSteps = [
  {
    title: "Programezi consultația",
    text: "Ne poți contacta telefonic, pe WhatsApp sau prin formularul online. Îți confirmăm programarea în cel mai scurt timp.",
  },
  {
    title: "Ne cunoaștem",
    text: "Discutăm despre nevoile tale, realizăm consultația și, dacă este necesar, investigațiile pentru un diagnostic complet.",
  },
  {
    title: "Primești planul de tratament",
    text: "Îți explicăm opțiunile, etapele și costurile, astfel încât să poți lua o decizie informată, fără surprize.",
  },
  {
    title: "Începem tratamentul",
    text: "Stabilim împreună pașii și programările, astfel încât tratamentul să se potrivească programului și ritmului tău.",
  },
];

const faqs = [
  {
    question: "Cât costă o consultație la Dantè Art?",
    answer:
      "Costul consultației este comunicat înainte de programare. Consultația include examinarea clinică, discuția cu medicul și recomandările de tratament. La final, primești un plan personalizat, cu etapele și costurile explicate clar.",
  },
  {
    question: "Mi-e teamă de dentist. Cum mă puteți ajuta?",
    answer:
      "Știm că mulți pacienți ajung la noi cu emoții. Ne luăm timp să explicăm fiecare etapă, folosim anestezie modernă și adaptăm ritmul tratamentului astfel încât să te simți cât mai confortabil.",
  },
  {
    question: "Cât durează să obțin o programare?",
    answer:
      "Încercăm să oferim o programare cât mai repede, în funcție de disponibilitate. Pentru o urgență stomatologică, contactează-ne telefonic și vom face tot posibilul să găsim o soluție rapidă.",
  },
  {
    question: "Pot plăti tratamentul în rate?",
    answer: "Da, oferim posibilitatea plății în rate prin Banca Transilvania.",
  },
  {
    question: "Tratați și copii?",
    answer:
      "Da. Avem răbdare, explicăm totul pe înțelesul celor mici și adaptăm consultația astfel încât copilul să se simtă în siguranță și să capete încredere.",
  },
];

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

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5.5" width="17" height="15" rx="3" />
        <path d="M8 3v5M16 3v5M3.5 10.5h17" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3.5 2" />
      </svg>
    );
  }

  if (name === "implant") {
    return (
      <svg {...common}>
        <path d="M8 4h8l-1 4H9L8 4ZM10 8v3l-2 2 4 2-4 2 4 2-1 2M14 8v3l2 2-4 2 4 2-4 2 1 2" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "map") {
    return (
      <svg {...common}>
        <path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M6.4 3.5h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 4.4 5.5a2 2 0 0 1 2-2Z" />
      </svg>
    );
  }

  if (name === "scan") {
    return (
      <svg {...common}>
        <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
        <circle cx="12" cy="12" r="4" />
        <path d="M9 12h6" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3 19 6v5.5c0 4.5-2.8 7.4-7 9.5-4.2-2.1-7-5-7-9.5V6l7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }

  if (name === "smile") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M8.5 10h.01M15.5 10h.01M8 14c1.1 1.4 2.4 2 4 2s2.9-.6 4-2" />
      </svg>
    );
  }

  if (name === "sparkles") {
    return (
      <svg {...common}>
        <path d="m12 2 1.4 4.6L18 8l-4.6 1.4L12 14l-1.4-4.6L6 8l4.6-1.4L12 2ZM18.5 14l.8 2.7 2.7.8-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8.8-2.7Z" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.3-4.3a8.5 8.5 0 1 1 15.7-4.4Z" />
        <path d="M8.1 7.6c.2-.4.4-.4.7-.4h.5l.9 2.1c.1.3 0 .5-.2.7l-.7.8a7.3 7.3 0 0 0 3.7 3.2c.3.1.5.1.7-.2l.9-1.1c.2-.3.5-.3.8-.2l2 .9c.3.1.4.3.4.5 0 .4-.2 1.3-.8 1.8-.6.5-1.4.8-2.3.6-1.1-.2-2.6-.8-4.4-2.3-2-1.7-3.3-3.8-3.7-5.1-.3-.7.1-1.2.5-1.3Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M7.2 3.5c1.6-.8 3.2.6 4.8.6s3.2-1.4 4.8-.6c3.1 1.6 2.2 6.2 1.2 9.2-1 2.9-1.4 7.8-4 7.8-1.8 0-1.2-5.7-2-5.7s-.2 5.7-2 5.7c-2.6 0-3-4.9-4-7.8-1-3-1.9-7.6 1.2-9.2Z" />
    </svg>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`dante-eyebrow ${light ? "dante-eyebrow--light" : ""}`}>
      <span />
      {children}
    </div>
  );
}

function RequestForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="dante-form-success" role="status" aria-live="polite">
        <span>
          <Icon name="check" />
        </span>
        <h3>Mulțumim pentru încredere!</h3>
        <p>
          Formularul a fost validat în interfață. Trimiterea efectivă va deveni disponibilă
          după conectarea formularului la sistemul clinicii.
        </p>
        <button
          type="button"
          className="dante-button dante-button--outline-dark"
          onClick={() => setSubmitted(false)}
        >
          Trimite o altă cerere
        </button>
      </div>
    );
  }

  return (
    <form
      className={`dante-request-form ${compact ? "dante-request-form--compact" : ""}`}
      onSubmit={submitForm}
    >
      <div className="dante-form-grid">
        <label>
          <span>Nume și prenume *</span>
          <input name="name" autoComplete="name" required placeholder="Numele tău" />
        </label>
        <label>
          <span>Telefon *</span>
          <input
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            required
            placeholder="Numărul tău de telefon"
          />
        </label>
        <label className="dante-form-wide">
          <span>Ce te interesează? (opțional)</span>
          <select name="interest" defaultValue="">
            <option value="">Alege un serviciu</option>
            <option>Consultație</option>
            <option>Implant dentar</option>
            <option>Fațete dentare</option>
            <option>Albire</option>
            <option>Ortodonție</option>
            <option>Igienizare</option>
            <option>Altceva</option>
          </select>
        </label>
        <label className="dante-form-wide">
          <span>Mesaj (opțional)</span>
          <textarea name="message" rows={compact ? 3 : 5} placeholder="Cum te putem ajuta?" />
        </label>
      </div>
      <label className="dante-consent">
        <input name="privacy" type="checkbox" required />
        <span>
          Sunt de acord cu prelucrarea datelor conform{" "}
          <a href="/politica-de-confidentialitate">Politicii de confidențialitate</a>.
        </span>
      </label>
      <button type="submit" className="dante-button dante-button--gold dante-form-submit">
        Trimite cererea de programare
        <Icon name="arrow" />
      </button>
    </form>
  );
}

export default function HomeSite() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShowBackToTop(window.scrollY > window.innerHeight * 2);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document
      .querySelectorAll("[data-dante-reveal]")
      .forEach((element) => observer.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const openAppointment = () => {
    setAppointmentOpen(true);
  };

  const publishedPhone = Boolean(clinic.phoneDisplay && clinic.phoneHref);
  const publishedWhatsApp = Boolean(clinic.whatsappHref);

  return (
    <div className="home-v2">
      <div className="dante-progress" style={{ width: `${progress}%` }} />
      <SiteHeader clinic={clinic} onAppointment={openAppointment} />

      <main>
        <section className="dante-hero">
          <div className="dante-hero__grid-pattern" />
          <div className="dante-hero__glow dante-hero__glow--one" />
          <div className="dante-hero__glow dante-hero__glow--two" />
          <div className="dante-shell dante-hero__grid">
            <div className="dante-hero__content" data-dante-reveal>
              <Eyebrow light>Clinică stomatologică · Baia Mare</Eyebrow>
              <h1>
                Zâmbetul tău,
                <em>lucrat cu artă și precizie.</em>
              </h1>
              <p>
                La Dantè Art, fiecare pacient beneficiază de un plan de tratament adaptat
                nevoilor sale. Folosim tehnologie modernă pentru un diagnostic precis, iar
                medicii noștri îți explică fiecare etapă, astfel încât să iei decizii informate
                și să te simți încrezător pe tot parcursul tratamentului.
              </p>
              <div className="dante-hero__actions">
                <a href="/contact" className="dante-button dante-button--gold dante-button--large">
                  Programează o consultație
                  <Icon name="arrow" />
                </a>
                <a
                  href="/servicii"
                  className="dante-button dante-button--ghost dante-button--large"
                >
                  Vezi serviciile
                </a>
              </div>
              <div className="dante-hero__meta">
                <span>
                  <Icon name="map" />
                  {clinic.streetAddress ?? clinic.city}
                </span>
                <span>
                  <Icon name="phone" />
                  {clinic.phoneDisplay ?? "Telefon în curs de confirmare"}
                </span>
                <span>
                  <Icon name="clock" />
                  {clinic.weekdayHours ?? "Program în curs de confirmare"}
                </span>
              </div>
            </div>

            <div className="dante-hero__visual" data-dante-reveal>
              <div className="dante-hero__orbit dante-hero__orbit--one" />
              <div className="dante-hero__orbit dante-hero__orbit--two" />
              <div className="dante-hero__image">
                <Image
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=90"
                  alt="Medic alături de un pacient într-o clinică stomatologică — imagine ilustrativă"
                  fill
                  sizes="(max-width: 920px) 92vw, 46vw"
                  priority
                />
                <div className="dante-hero__image-wash" />
              </div>
              <div className="dante-floating-card dante-floating-card--top">
                <span>
                  <Icon name="calendar" />
                </span>
                <div>
                  <strong>Plan personalizat</strong>
                  <small>Etape explicate clar</small>
                </div>
              </div>
              <div className="dante-floating-card dante-floating-card--bottom">
                <span>
                  <Icon name="scan" />
                </span>
                <div>
                  <strong>Tehnologie digitală</strong>
                  <small>Diagnostic precis</small>
                </div>
              </div>
            </div>
          </div>
          <a href="#despre" className="dante-scroll-cue" aria-label="Mergi la secțiunea Despre noi">
            <span />
            Descoperă Dantè Art
          </a>
        </section>

        <section className="dante-trust" aria-label="Avantajele clinicii">
          <div className="dante-shell dante-trust__grid">
            {trustItems.map((item) => (
              <article key={item.title} data-dante-reveal>
                <span className="dante-trust__icon">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dante-section dante-about" id="despre">
          <div className="dante-shell dante-about__grid">
            <div className="dante-about__media" data-dante-reveal>
              <div className="dante-about__image dante-about__image--large">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=90"
                  alt="Interior de cabinet stomatologic modern — imagine ilustrativă"
                  fill
                  sizes="(max-width: 900px) 90vw, 44vw"
                />
              </div>
              <div className="dante-about__image dante-about__image--small">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=90"
                  alt="Detaliu de echipament stomatologic — imagine ilustrativă"
                  fill
                  sizes="260px"
                />
              </div>
              <span className="dante-about__seal">
                <Icon name="sparkles" />
                Dantè Art
              </span>
            </div>

            <div className="dante-about__content" data-dante-reveal>
              <Eyebrow>Despre noi</Eyebrow>
              <h2>
                Stomatologie făcută cu precizie și <em>atenție la detalii.</em>
              </h2>
              <p>
                La Dantè Art ne dorim ca fiecare vizită la dentist să fie cât mai confortabilă.
                Punem accent pe comunicare, explicăm fiecare etapă a tratamentului și ne
                asigurăm că ai toate informațiile de care ai nevoie înainte de a lua o decizie.
              </p>
              <p>
                Credem că un tratament reușit înseamnă mai mult decât rezolvarea unei probleme
                dentare. Înseamnă precizie, atenție la detalii și un rezultat care se potrivește
                zâmbetului și fizionomiei tale.
              </p>
              <a href="/despre" className="dante-text-link">
                Află povestea noastră
                <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="dante-section dante-services" id="servicii">
          <div className="dante-shell">
            <div className="dante-section-head" data-dante-reveal>
              <div>
                <Eyebrow>Serviciile noastre</Eyebrow>
                <h2>
                  Servicii stomatologice complete <em>în Baia Mare</em>
                </h2>
              </div>
              <p>
                Fiecare pacient are nevoi diferite. De aceea, oferim o gamă completă de servicii
                stomatologice, planificate cu atenție și adaptate fiecărui caz.
              </p>
            </div>

            <div className="dante-services__grid">
              {services.map((service, index) => (
                <a
                  className={`dante-service-card ${index === 3 ? "is-featured" : ""}`}
                  href={service.href}
                  key={service.href}
                  data-dante-reveal
                >
                  <span className="dante-service-card__number">{service.number}</span>
                  <span className="dante-service-card__icon">
                    <Icon name={service.icon} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="dante-service-card__arrow">
                    <Icon name="arrow" />
                  </span>
                </a>
              ))}
            </div>

            <div className="dante-center-action">
              <a href="/servicii" className="dante-button dante-button--outline-dark">
                Vezi toate serviciile
                <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="dante-smile-design">
          <div className="dante-smile-design__glow" />
          <div className="dante-shell dante-smile-design__grid">
            <div className="dante-smile-design__media" data-dante-reveal>
              <div className="dante-smile-design__image">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=90"
                  alt="Medic care explică un plan digital de tratament — imagine ilustrativă"
                  fill
                  sizes="(max-width: 900px) 90vw, 48vw"
                />
                <div className="dante-scan-frame">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="dante-smile-design__badge">
                <Icon name="scan" />
                <span>
                  <strong>Previzualizare digitală</strong>
                  <small>Înainte de tratament</small>
                </span>
              </div>
            </div>

            <div className="dante-smile-design__content" data-dante-reveal>
              <Eyebrow light>Smile Design</Eyebrow>
              <h2>
                Vezi cum va arăta noul tău zâmbet <em>înainte de tratament.</em>
              </h2>
              <p>
                Înainte de a începe tratamentul, realizăm o simulare digitală a viitorului tău
                zâmbet. Astfel, poți vedea cum ar putea arăta rezultatul și putem discuta
                împreună forma, culoarea și proporțiile.
              </p>
              <p>
                Abia după ce stabilim varianta potrivită, trecem la tratament. Etapa este
                recomandată în special pentru fațete, albiri și reabilitări estetice.
              </p>
              <ul>
                <li>
                  <Icon name="check" />
                  Previzualizezi rezultatul înainte de tratament
                </li>
                <li>
                  <Icon name="check" />
                  Primești un plan complet și transparent
                </li>
                <li>
                  <Icon name="check" />
                  Obții un zâmbet adaptat trăsăturilor tale
                </li>
              </ul>
              <a
                href="/servicii/estetica-dentara-baia-mare"
                className="dante-button dante-button--gold dante-button--large"
              >
                Programează o simulare a zâmbetului
                <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="dante-section dante-technology" id="tehnologie">
          <div className="dante-shell">
            <div className="dante-section-head" data-dante-reveal>
              <div>
                <Eyebrow>Tehnologie</Eyebrow>
                <h2>
                  Mai multă precizie. O experiență <em>mai confortabilă.</em>
                </h2>
              </div>
              <p>
                Tehnologia modernă ne ajută să obținem informații clare, să planificăm atent și
                să reducem disconfortul fiecărei etape.
              </p>
            </div>
            <div className="dante-technology__grid">
              <article data-dante-reveal>
                <div className="dante-technology-card__image">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=88"
                    alt="Aparatură stomatologică digitală — imagine ilustrativă"
                    fill
                    sizes="(max-width: 800px) 90vw, 32vw"
                  />
                </div>
                <span>01</span>
                <h3>Radiologie digitală</h3>
                <p>
                  Obținem imagini clare pentru un diagnostic rapid și precis, cu o doză redusă
                  de radiații.
                </p>
              </article>
              <article data-dante-reveal>
                <div className="dante-technology-card__image">
                  <Image
                    src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=88"
                    alt="Consultație stomatologică asistată digital — imagine ilustrativă"
                    fill
                    sizes="(max-width: 800px) 90vw, 32vw"
                  />
                </div>
                <span>02</span>
                <h3>Scanner intraoral</h3>
                <p>
                  Realizăm amprente digitale rapide și confortabile, fără materialele clasice
                  de amprentare.
                </p>
              </article>
              <article className="dante-technology-card--pending" data-dante-reveal>
                <div className="dante-technology-card__placeholder">
                  <Icon name="scan" />
                </div>
                <span>03</span>
                <h3>Dotare în curs de confirmare</h3>
                <p>
                  Echipamentul și beneficiile sale vor fi publicate după confirmarea informației
                  de către clinică.
                </p>
              </article>
            </div>
            <div className="dante-center-action">
              <a href="/tehnologie" className="dante-button dante-button--outline-dark">
                Descoperă tehnologia noastră
                <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="dante-team" id="echipa">
          <div className="dante-team__glow" />
          <div className="dante-shell">
            <div className="dante-section-head dante-section-head--light" data-dante-reveal>
              <div>
                <Eyebrow light>Echipa</Eyebrow>
                <h2>
                  Oamenii din spatele <em>fiecărui zâmbet.</em>
                </h2>
              </div>
              <p>
                Fiecare medic vine cu experiența și specializarea sa, iar împreună alegem
                soluția potrivită pentru sănătatea și estetica zâmbetului tău.
              </p>
            </div>
            <div className="dante-team__grid">
              {[1, 2, 3].map((item) => (
                <article key={item} data-dante-reveal>
                  <div className="dante-team-card__portrait">
                    <span>DA</span>
                    <small>Fotografie în curs de actualizare</small>
                  </div>
                  <div className="dante-team-card__body">
                    <span>0{item}</span>
                    <div>
                      <h3>Profil medical</h3>
                      <p>Numele și specializarea vor fi publicate după confirmare.</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="dante-center-action">
              <a href="/echipa" className="dante-button dante-button--ghost">
                Cunoaște toată echipa
                <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="dante-section dante-first-visit">
          <div className="dante-shell">
            <div className="dante-section-head dante-section-head--center" data-dante-reveal>
              <Eyebrow>Prima vizită</Eyebrow>
              <h2>
                Știm că prima vizită poate ridica întrebări. <em>Totul este simplu și clar.</em>
              </h2>
              <p>Ce se întâmplă la prima vizită?</p>
            </div>
            <div className="dante-first-visit__steps">
              {firstVisitSteps.map((step, index) => (
                <article key={step.title} data-dante-reveal>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <div className="dante-center-action">
              <a href="/contact" className="dante-button dante-button--gold dante-button--large">
                Programează prima vizită
                <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="dante-section dante-faq">
          <div className="dante-shell dante-faq__grid">
            <div className="dante-faq__intro" data-dante-reveal>
              <Eyebrow>Întrebări frecvente</Eyebrow>
              <h2>
                Răspunsuri la întrebările pe care le primim <em>cel mai des</em>
              </h2>
              <p>
                Nu ai găsit răspunsul de care ai nevoie? Scrie-ne și revenim cu toate
                informațiile.
              </p>
              <a href="/contact" className="dante-text-link">
                Contactează-ne
                <Icon name="arrow" />
              </a>
            </div>
            <div className="dante-faq__list" data-dante-reveal>
              {faqs.map((faq, index) => (
                <article className={openFaq === index ? "is-open" : ""} key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{faq.question}</strong>
                    <i aria-hidden="true">+</i>
                  </button>
                  <div className="dante-faq__answer">
                    <p>{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dante-contact" id="programare">
          <div className="dante-contact__grid-pattern" />
          <div className="dante-shell">
            <div className="dante-contact__head" data-dante-reveal>
              <Eyebrow light>Programare</Eyebrow>
              <h2>Programează-ți consultația la Dantè Art</h2>
              <p>
                Completează formularul și te sunăm în timpul programului. Sau, dacă preferi,
                sună-ne direct ori scrie-ne pe WhatsApp după publicarea datelor de contact.
              </p>
            </div>
            <div className="dante-contact__grid">
              <div className="dante-contact__form-card" data-dante-reveal>
                <div className="dante-contact__form-heading">
                  <span>
                    <Icon name="calendar" />
                  </span>
                  <div>
                    <h3>Cerere de programare</h3>
                    <p>Completează datele de mai jos.</p>
                  </div>
                </div>
                <RequestForm />
              </div>

              <aside className="dante-contact__details" data-dante-reveal>
                <div className="dante-contact__details-head">
                  <span>Contact</span>
                  <h3>Suntem aici pentru zâmbetul tău.</h3>
                </div>
                {publishedPhone ? (
                  <a href={clinic.phoneHref} className="dante-contact-method">
                    <span>
                      <Icon name="phone" />
                    </span>
                    <div>
                      <small>Apel direct la recepție</small>
                      <strong>{clinic.phoneDisplay}</strong>
                    </div>
                    <Icon name="arrow" />
                  </a>
                ) : (
                  <div className="dante-contact-method is-pending">
                    <span>
                      <Icon name="phone" />
                    </span>
                    <div>
                      <small>Telefon</small>
                      <strong>În curs de confirmare</strong>
                    </div>
                  </div>
                )}
                {publishedWhatsApp && (
                  <a
                    href={clinic.whatsappHref}
                    className="dante-contact-method dante-contact-method--whatsapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <Icon name="whatsapp" />
                    </span>
                    <div>
                      <small>Mesaj rapid</small>
                      <strong>WhatsApp</strong>
                    </div>
                    <Icon name="arrow" />
                  </a>
                )}
                {clinic.email ? (
                  <a href={`mailto:${clinic.email}`} className="dante-contact-method">
                    <span>
                      <Icon name="mail" />
                    </span>
                    <div>
                      <small>E-mail</small>
                      <strong>{clinic.email}</strong>
                    </div>
                    <Icon name="arrow" />
                  </a>
                ) : (
                  <div className="dante-contact-method is-pending">
                    <span>
                      <Icon name="mail" />
                    </span>
                    <div>
                      <small>E-mail</small>
                      <strong>În curs de confirmare</strong>
                    </div>
                  </div>
                )}
                <div className="dante-contact-method is-pending">
                  <span>
                    <Icon name="map" />
                  </span>
                  <div>
                    <small>Adresă</small>
                    <strong>{clinic.streetAddress ?? `${clinic.city} · adresa exactă în curs de confirmare`}</strong>
                  </div>
                </div>
                <div className="dante-contact-method is-pending">
                  <span>
                    <Icon name="clock" />
                  </span>
                  <div>
                    <small>Program</small>
                    <strong>
                      Luni–Vineri: {clinic.weekdayHours ?? "în curs de confirmare"}
                    </strong>
                    <em>
                      Sâmbătă: {clinic.saturdayHours ?? "în curs de confirmare"} · Duminică:
                      Închis
                    </em>
                  </div>
                </div>
              </aside>
            </div>
            {clinic.mapsEmbedUrl ? (
              <div className="dante-map-embed" data-dante-reveal>
                <iframe
                  src={clinic.mapsEmbedUrl}
                  title="Locația clinicii Dantè Art"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                {clinic.mapsUrl && (
                  <a
                    href={clinic.mapsUrl}
                    className="dante-button dante-button--gold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Obține direcții
                    <Icon name="arrow" />
                  </a>
                )}
              </div>
            ) : (
              <div className="dante-map-placeholder" data-dante-reveal>
                <span>
                  <Icon name="map" />
                </span>
                <div>
                  <small>Locație</small>
                  <h3>Harta va fi disponibilă după confirmarea adresei exacte.</h3>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="dante-footer">
        <div className="dante-shell">
          <div className="dante-footer__grid">
            <div className="dante-footer__brand">
              <a href="/" aria-label="Dantè Art — Acasă">
                <BrandLogo />
              </a>
              <p>
                Oferim tratamente stomatologice moderne, adaptate nevoilor fiecărui pacient.
                Punem accent pe comunicare, transparență și rezultate care inspiră încredere.
              </p>
              <div className="dante-social-placeholder" aria-label="Rețele sociale">
                <span>Facebook</span>
                <span>Instagram</span>
                <span>TikTok</span>
                <span>LinkedIn</span>
              </div>
            </div>
            <div className="dante-footer__column">
              <small>Navigare</small>
              {navigation.slice(0, 2).map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
              {navigation.slice(3).map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="dante-footer__column">
              <small>Servicii</small>
              {services.map((service) => (
                <a href={service.href} key={service.href}>
                  {service.title}
                </a>
              ))}
            </div>
            <div className="dante-footer__column dante-footer__contact">
              <small>Contact</small>
              <span>{clinic.phoneDisplay ?? "Telefon în curs de confirmare"}</span>
              <span>{clinic.email ?? "E-mail în curs de confirmare"}</span>
              <span>
                {clinic.streetAddress ?? `${clinic.city} · adresă în curs de confirmare`}
              </span>
              <span>
                Luni–Vineri: {clinic.weekdayHours ?? "program în curs de confirmare"}
              </span>
              <button
                type="button"
                className="dante-button dante-button--gold"
                onClick={openAppointment}
              >
                Programează-te
                <Icon name="arrow" />
              </button>
            </div>
          </div>
          <div className="dante-footer__bottom">
            <span>© 2026 Dantè Art. Toate drepturile rezervate.</span>
            <nav aria-label="Linkuri legale">
              <a href="/politica-de-confidentialitate">Confidențialitate</a>
              <a href="/termeni-si-conditii">Termeni și condiții</a>
              <a href="/politica-cookies">Cookies</a>
            </nav>
          </div>
        </div>
      </footer>

      {publishedWhatsApp && (
        <a
          href={clinic.whatsappHref}
          className="dante-floating-whatsapp"
          aria-label="Contactează-ne pe WhatsApp"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="whatsapp" />
        </a>
      )}

      <button
        type="button"
        className={`dante-back-to-top ${showBackToTop ? "is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Înapoi sus"
      >
        ↑
      </button>

      {publishedPhone && publishedWhatsApp && (
        <div className="dante-mobile-actions">
          <a href={clinic.phoneHref}>
            <Icon name="phone" />
            Sună acum
          </a>
          <a href={clinic.whatsappHref} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" />
            WhatsApp
          </a>
        </div>
      )}

      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
      />
    </div>
  );
}
