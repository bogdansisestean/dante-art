"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import BrandLogo from "./brand-logo";
import HomeSite from "./home-site";
import SiteHeader from "./site-header";

type IconName =
  | "arrow"
  | "calendar"
  | "check"
  | "clock"
  | "implant"
  | "map"
  | "phone"
  | "scan"
  | "shield"
  | "smile"
  | "sparkles"
  | "tooth"
  | "whatsapp";

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
  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.3-4.3a8.5 8.5 0 1 1 15.7-4.4Z" />
        <path d="M8.1 7.6c.2-.4.4-.4.7-.4h.5l.9 2.1c.1.3 0 .5-.2.7l-.7.8a7.3 7.3 0 0 0 3.7 3.2c.3.1.5.1.7-.2l.9-1.1c.2-.3.5-.3.8-.2l2 .9c.3.1.4.3.4.5 0 .4-.2 1.3-.8 1.8-.6.5-1.4.8-2.3.6-1.1-.2-2.6-.8-4.4-2.3-2-1.7-3.3-3.8-3.7-5.1-.3-.7.1-1.2.5-1.3Z" />
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
  return (
    <svg {...common}>
      <path d="M7.2 3.5c1.6-.8 3.2.6 4.8.6s3.2-1.4 4.8-.6c3.1 1.6 2.2 6.2 1.2 9.2-1 2.9-1.4 7.8-4 7.8-1.8 0-1.2-5.7-2-5.7s-.2 5.7-2 5.7c-2.6 0-3-4.9-4-7.8-1-3-1.9-7.6 1.2-9.2Z" />
    </svg>
  );
}

const services: { icon: IconName; number: string; title: string; text: string }[] = [
  {
    icon: "sparkles",
    number: "01",
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: "implant",
    number: "02",
    title: "Dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: "scan",
    number: "03",
    title: "Consectetur elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: "smile",
    number: "04",
    title: "Adipiscing elit",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: "tooth",
    number: "05",
    title: "Eiusmod tempor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: "shield",
    number: "06",
    title: "Incididunt labore",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem Ipsum",
    meta: "Dolor sit · 01",
  },
  {
    quote:
      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Dolor Amet",
    meta: "Lorem ipsum · 02",
  },
  {
    quote:
      "Consectetur adipiscing elit. Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    name: "Amet Elit",
    meta: "Adipiscing · 03",
  },
];

const faqs = [
  "Lorem ipsum dolor sit amet?",
  "Consectetur adipiscing elit?",
  "Sed do eiusmod tempor incididunt?",
  "Ut labore et dolore magna aliqua?",
];

export type PageName =
  | "home"
  | "about"
  | "services"
  | "technology"
  | "team"
  | "prices"
  | "contact";

const headerClinic = {
  city: "Baia Mare",
  streetAddress: "Str. Uranus, Nr. 1, Etaj Parter, Apartament 2, Județ Maramureș",
};

const pageHeadings: Record<Exclude<PageName, "home">, [string, string, string]> = {
  about: ["01", "Lorem ipsum", "dolor sit amet."],
  services: ["02", "Dolor sit", "amet consectetur."],
  technology: ["03", "Consectetur", "adipiscing elit."],
  team: ["04", "Adipiscing", "elit sed do."],
  prices: ["05", "Prețuri", "clare și transparente."],
  contact: ["06", "Eiusmod tempor", "incididunt labore."],
};

function InnerHero({ page }: { page: Exclude<PageName, "home"> }) {
  const [number, firstLine, secondLine] = pageHeadings[page];

  return (
    <section className="inner-hero">
      <div className="inner-hero__grid" />
      <div className="inner-hero__glow" />
      <div className="shell inner-hero__content" data-reveal>
        <span className="inner-hero__number">{number}</span>
        <div className="eyebrow eyebrow--dark">
          <span />
          Lorem ipsum · 2026
        </div>
        <h1>
          {firstLine}
          <em>{secondLine}</em>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="inner-hero__crumbs">
          <a href="/">Lorem</a>
          <span>✦</span>
          <strong>{firstLine}</strong>
        </div>
      </div>
    </section>
  );
}

export default function DentalSite({ page = "home" }: { page?: PageName }) {
  if (page === "home") {
    return <HomeSite />;
  }

  return <LegacyDentalSite page={page} />;
}

function LegacyDentalSite({ page }: { page: PageName }) {
  const [progress, setProgress] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveTestimonial((current) => (current + 1) % testimonials.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, []);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <SiteHeader clinic={headerClinic} />

      <main className={`page page--${page}`}>
        {page !== "home" && <InnerHero page={page} />}
        <section className="hero" id="lorem">
          <div className="hero__noise" />
          <div className="hero__aurora hero__aurora--one" />
          <div className="hero__aurora hero__aurora--two" />
          <div className="shell hero__grid">
            <div className="hero__content" data-reveal>
              <div className="eyebrow eyebrow--dark">
                <span />
                Lorem ipsum · 2026
              </div>
              <h1>
                Lorem ipsum
                <span>dolor sit amet.</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="hero__actions">
                <a href="/contact" className="button button--gold button--large">
                  Lorem ipsum
                  <Icon name="arrow" />
                </a>
                <a href="/servicii" className="button button--glass button--large">
                  Dolor sit
                </a>
              </div>
              <div className="hero__proof">
                <div className="avatar-stack">
                  <span>LI</span>
                  <span>DS</span>
                  <span>AE</span>
                  <span>+99</span>
                </div>
                <div>
                  <div className="stars">★★★★★</div>
                  <small>Lorem ipsum · 4.9/5</small>
                </div>
              </div>
            </div>

            <div className="hero__visual" data-reveal>
              <div className="hero__orbit hero__orbit--one" />
              <div className="hero__orbit hero__orbit--two" />
              <div className="hero-image">
                <Image
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=90"
                  alt="Lorem ipsum"
                  fill
                  sizes="(max-width: 900px) 90vw, 45vw"
                  priority
                />
                <div className="hero-image__wash" />
                <div className="hero-image__badge">
                  <span>4.9</span>
                  <small>Lorem ipsum</small>
                </div>
              </div>
              <div className="floating-card floating-card--top">
                <span className="floating-card__icon">
                  <Icon name="sparkles" />
                </span>
                <span>
                  <strong>Lorem ipsum</strong>
                  <small>99.9%</small>
                </span>
              </div>
              <div className="floating-card floating-card--bottom">
                <span className="floating-card__icon">
                  <Icon name="shield" />
                </span>
                <span>
                  <strong>Dolor sit amet</strong>
                  <small>24 / 7</small>
                </span>
              </div>
            </div>
          </div>

          <div className="hero__footer shell">
            <div>
              <Icon name="map" />
              <span>{headerClinic.streetAddress}</span>
            </div>
            <div>
              <Icon name="clock" />
              <span>00:00 — 00:00</span>
            </div>
            <a href="/despre">
              <span>Dolor sit</span>
              <span className="scroll-indicator" />
            </a>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[0, 1].map((copy) => (
              <div className="marquee__content" key={copy}>
                <span>LOREM IPSUM</span>
                <b>✦</b>
                <span>DOLOR SIT AMET</span>
                <b>✦</b>
                <span>CONSECTETUR ELIT</span>
                <b>✦</b>
                <span>EIUSMOD TEMPOR</span>
                <b>✦</b>
              </div>
            ))}
          </div>
        </div>

        <section className="section intro" id="ipsum">
          <div className="shell intro__grid">
            <div className="intro__media" data-reveal>
              <div className="intro__image intro__image--large">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=90"
                  alt="Lorem ipsum"
                  fill
                  sizes="(max-width: 800px) 90vw, 45vw"
                />
              </div>
              <div className="intro__image intro__image--small">
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=90"
                  alt="Lorem ipsum"
                  fill
                  sizes="260px"
                />
              </div>
              <div className="experience-card">
                <strong>15+</strong>
                <span>Lorem ipsum<br />dolor sit amet</span>
              </div>
              <div className="gold-ring" />
            </div>

            <div className="intro__content" data-reveal>
              <div className="eyebrow">
                <span />
                Lorem ipsum
              </div>
              <h2>
                Lorem ipsum dolor sit amet, <em>consectetur.</em>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="feature-list">
                {[
                  ["shield", "Lorem ipsum dolor"],
                  ["sparkles", "Sit amet consectetur"],
                  ["scan", "Adipiscing elit sed"],
                ].map(([icon, text]) => (
                  <div className="feature-list__item" key={text}>
                    <span>
                      <Icon name={icon as IconName} />
                    </span>
                    <strong>{text}</strong>
                    <Icon name="arrow" />
                  </div>
                ))}
              </div>
              <a href="/servicii" className="text-link">
                Lorem ipsum dolor
                <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="stats-band">
          <div className="stats-band__glow" />
          <div className="shell stats">
            {[
              ["12K+", "Lorem ipsum"],
              ["4.9", "Dolor sit amet"],
              ["15+", "Consectetur"],
              ["99%", "Adipiscing elit"],
            ].map(([value, label], index) => (
              <div className="stat" key={label} data-reveal>
                <span>0{index + 1}</span>
                <strong>{value}</strong>
                <small>{label}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="section services" id="dolor">
          <div className="shell">
            <div className="section-head" data-reveal>
              <div>
                <div className="eyebrow">
                  <span />
                  Dolor sit amet
                </div>
                <h2>
                  Lorem ipsum <em>dolor</em> sit amet.
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore.
              </p>
            </div>

            <div className="services__grid">
              {services.map((service, index) => (
                <article
                  className={`service-card ${index === 1 ? "service-card--featured" : ""}`}
                  key={service.number}
                  data-reveal
                >
                  <span className="service-card__number">{service.number}</span>
                  <div className="service-card__icon">
                    <Icon name={service.icon} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="/contact" aria-label="Lorem ipsum">
                    <Icon name="arrow" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="technology" id="amet">
          <div className="technology__glow technology__glow--one" />
          <div className="technology__glow technology__glow--two" />
          <div className="shell technology__grid">
            <div className="technology__content" data-reveal>
              <div className="eyebrow eyebrow--dark">
                <span />
                Consectetur elit
              </div>
              <h2>
                Lorem ipsum dolor <em>sit amet.</em>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="technology__list">
                {[
                  ["01", "Lorem ipsum dolor", "Consectetur adipiscing elit sed do eiusmod."],
                  ["02", "Sit amet elit", "Lorem ipsum dolor sit amet tempor incididunt."],
                  ["03", "Eiusmod tempor", "Adipiscing elit sed do labore magna aliqua."],
                ].map(([number, title, text]) => (
                  <div className="technology__item" key={number}>
                    <span>{number}</span>
                    <div>
                      <strong>{title}</strong>
                      <small>{text}</small>
                    </div>
                    <Icon name="check" />
                  </div>
                ))}
              </div>
              <a href="/contact" className="button button--gold button--large">
                Lorem ipsum
                <Icon name="arrow" />
              </a>
            </div>

            <div className="technology__media" data-reveal>
              <div className="technology__image">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=90"
                  alt="Lorem ipsum"
                  fill
                  sizes="(max-width: 900px) 90vw, 45vw"
                />
                <div className="scan-line" />
                <span className="scan-corner scan-corner--one" />
                <span className="scan-corner scan-corner--two" />
                <span className="scan-corner scan-corner--three" />
                <span className="scan-corner scan-corner--four" />
              </div>
              <div className="scan-panel">
                <div className="scan-panel__top">
                  <span>
                    <Icon name="scan" />
                  </span>
                  <div>
                    <strong>Lorem ipsum</strong>
                    <small>99.98%</small>
                  </div>
                </div>
                <div className="scan-panel__bars">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section results" id="elit">
          <div className="shell">
            <div className="section-head section-head--center" data-reveal>
              <div className="eyebrow">
                <span />
                Lorem ipsum
              </div>
              <h2>
                Dolor sit amet <em>consectetur.</em>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt.
              </p>
            </div>

            <div className="results__stage" data-reveal>
              <div className="results__image results__image--before">
                <Image
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=90"
                  alt="Lorem ipsum"
                  fill
                  sizes="90vw"
                />
              </div>
              <div className="results__image results__image--after">
                <Image
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=90"
                  alt="Lorem ipsum"
                  fill
                  sizes="90vw"
                />
              </div>
              <div className="results__divider">
                <span>↔</span>
              </div>
              <div className="results__label results__label--left">01</div>
              <div className="results__label results__label--right">02</div>
              <div className="results__float-card">
                <div className="stars">★★★★★</div>
                <strong>Lorem ipsum dolor sit amet.</strong>
                <small>Dolor sit · 4.9/5</small>
              </div>
            </div>

            <div className="process">
              {[
                ["01", "Lorem ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
                ["02", "Dolor sit amet", "Sed do eiusmod tempor incididunt ut labore et dolore."],
                ["03", "Consectetur elit", "Lorem ipsum dolor sit amet, sed do eiusmod tempor."],
              ].map(([number, title, text]) => (
                <article className="process__item" key={number} data-reveal>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section team">
          <div className="shell">
            <div className="section-head" data-reveal>
              <div>
                <div className="eyebrow">
                  <span />
                  Adipiscing elit
                </div>
                <h2>
                  Lorem ipsum <em>dolor sit.</em>
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt.
              </p>
            </div>
            <div className="team__grid">
              {[
                [
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=90",
                  "Lorem Ipsum",
                  "Dolor sit amet",
                  "01",
                ],
                [
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=90",
                  "Dolor Amet",
                  "Consectetur elit",
                  "02",
                ],
                [
                  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=90",
                  "Amet Elit",
                  "Lorem ipsum",
                  "03",
                ],
              ].map(([image, name, role, number]) => (
                <article className="team-card" key={number} data-reveal>
                  <div className="team-card__image">
                    <Image src={image} alt="Lorem ipsum" fill sizes="(max-width: 700px) 90vw, 30vw" />
                    <span>{number}</span>
                  </div>
                  <div className="team-card__body">
                    <div>
                      <h3>{name}</h3>
                      <p>{role}</p>
                    </div>
                    <a href="/contact" aria-label="Lorem ipsum">
                      <Icon name="arrow" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="testimonials__grain" />
          <div className="shell testimonials__inner">
            <div className="testimonials__side" data-reveal>
              <div className="eyebrow eyebrow--dark">
                <span />
                Lorem ipsum
              </div>
              <strong className="rating-number">4.9</strong>
              <div className="stars stars--large">★★★★★</div>
              <p>Lorem ipsum dolor sit amet · 500+</p>
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={activeTestimonial === index ? "is-active" : ""}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`0${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="testimonial-card" data-reveal>
              <span className="quote-mark">“</span>
              <blockquote>{testimonials[activeTestimonial].quote}</blockquote>
              <div className="testimonial-card__author">
                <span>{testimonials[activeTestimonial].name.slice(0, 2).toUpperCase()}</span>
                <div>
                  <strong>{testimonials[activeTestimonial].name}</strong>
                  <small>{testimonials[activeTestimonial].meta}</small>
                </div>
              </div>
              <div className="testimonial-card__controls">
                <button
                  onClick={() =>
                    setActiveTestimonial(
                      (activeTestimonial - 1 + testimonials.length) % testimonials.length,
                    )
                  }
                  aria-label="Lorem"
                >
                  ←
                </button>
                <span>
                  0{activeTestimonial + 1} / 0{testimonials.length}
                </span>
                <button
                  onClick={() =>
                    setActiveTestimonial((activeTestimonial + 1) % testimonials.length)
                  }
                  aria-label="Ipsum"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq">
          <div className="shell faq__grid">
            <div className="faq__intro" data-reveal>
              <div className="eyebrow">
                <span />
                Dolor sit amet
              </div>
              <h2>
                Lorem ipsum <em>dolor?</em>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor.
              </p>
              <a href="/contact" className="text-link">
                Lorem ipsum
                <Icon name="arrow" />
              </a>
            </div>
            <div className="faq__list" data-reveal>
              {faqs.map((question, index) => (
                <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={question}>
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                    <span>0{index + 1}</span>
                    <strong>{question}</strong>
                    <i>+</i>
                  </button>
                  <div className="faq-item__answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact__aurora" />
          <div className="shell contact__grid">
            <div className="contact__content" data-reveal>
              <div className="eyebrow eyebrow--dark">
                <span />
                Lorem ipsum
              </div>
              <h2>
                Dolor sit amet,
                <em> consectetur elit.</em>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore.
              </p>
              <div className="contact__details">
                <a href="tel:+40000000000">
                  <span>
                    <Icon name="phone" />
                  </span>
                  <div>
                    <small>Lorem ipsum</small>
                    <strong>+40 000 000 000</strong>
                  </div>
                </a>
                <div>
                  <span>
                    <Icon name="map" />
                  </span>
                  <div>
                    <small>Dolor sit amet</small>
                    <strong>{headerClinic.streetAddress}</strong>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={submitForm} data-reveal>
              {submitted ? (
                <div className="contact-form__success">
                  <span>
                    <Icon name="check" />
                  </span>
                  <h3>Lorem ipsum!</h3>
                  <p>Dolor sit amet, consectetur adipiscing elit.</p>
                  <button type="button" className="button button--navy" onClick={() => setSubmitted(false)}>
                    Lorem ipsum
                  </button>
                </div>
              ) : (
                <>
                  <div className="contact-form__heading">
                    <span>
                      <Icon name="calendar" />
                    </span>
                    <div>
                      <h3>Lorem ipsum dolor</h3>
                      <p>Sit amet consectetur elit.</p>
                    </div>
                    <b>01</b>
                  </div>
                  <div className="form-grid">
                    <label>
                      <span>Lorem ipsum</span>
                      <input required placeholder="Lorem ipsum" />
                    </label>
                    <label>
                      <span>Dolor sit</span>
                      <input required inputMode="tel" placeholder="+40 000 000 000" />
                    </label>
                    <label>
                      <span>Amet consectetur</span>
                      <select defaultValue="">
                        <option value="" disabled>Lorem ipsum</option>
                        <option>Dolor sit amet</option>
                        <option>Consectetur elit</option>
                        <option>Eiusmod tempor</option>
                      </select>
                    </label>
                    <label>
                      <span>Adipiscing elit</span>
                      <input type="date" />
                    </label>
                    <label className="form-grid__wide">
                      <span>Lorem ipsum dolor</span>
                      <textarea placeholder="Lorem ipsum dolor sit amet..." />
                    </label>
                  </div>
                  <button type="submit" className="button button--navy button--large form-submit">
                    Lorem ipsum
                    <Icon name="arrow" />
                  </button>
                  <small className="form-disclaimer">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </small>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footer__top">
            <a href="/">
              <BrandLogo />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt.
            </p>
            <a href="/contact" className="button button--gold">
              Lorem ipsum
              <Icon name="arrow" />
            </a>
          </div>
          <div className="footer__grid">
            <div>
              <small>Lorem ipsum</small>
              <a href="/despre">Dolor sit amet</a>
              <a href="/servicii">Consectetur elit</a>
              <a href="/tehnologie">Adipiscing elit</a>
            </div>
            <div>
              <small>Dolor sit</small>
              <a href="/echipa">Lorem ipsum</a>
              <a href="/contact">Eiusmod tempor</a>
              <a href="/contact">Incididunt labore</a>
            </div>
            <div>
              <small>Amet elit</small>
              <a href="tel:+40000000000">+40 000 000 000</a>
              <span>00:00 — 00:00</span>
              <span>{headerClinic.streetAddress}</span>
            </div>
            <div className="footer__newsletter">
              <small>Consectetur</small>
              <form onSubmit={(event) => event.preventDefault()}>
                <input placeholder="Lorem ipsum" aria-label="Lorem ipsum" />
                <button aria-label="Lorem ipsum">
                  <Icon name="arrow" />
                </button>
              </form>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© 2026 · LOREM IPSUM</span>
            <span>Lorem ipsum · Dolor sit amet</span>
            <a href="/">↑</a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/40000000000"
        className="floating-cta"
        aria-label="Contactează-ne pe WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="whatsapp" />
      </a>
    </>
  );
}
