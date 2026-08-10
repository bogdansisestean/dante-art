"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { buildMailtoLink, clinic } from "./site-config";

type IconName = "arrow" | "calendar" | "check" | "clock" | "mail" | "map" | "phone" | "sparkles" | "whatsapp";

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
  if (name === "check") return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
  if (name === "clock") return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3.5 2" /></svg>;
  if (name === "mail") return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>;
  if (name === "map") return <svg {...common}><path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg>;
  if (name === "phone") return <svg {...common}><path d="M6.4 3.5h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 4.4 5.5a2 2 0 0 1 2-2Z" /></svg>;
  if (name === "sparkles") return <svg {...common}><path d="m12 2 1.4 4.6L18 8l-4.6 1.4L12 14l-1.4-4.6L6 8l4.6-1.4L12 2ZM18.5 14l.8 2.7 2.7.8-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8.8-2.7Z" /></svg>;
  return (
    <svg {...common}>
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.3-4.3a8.5 8.5 0 1 1 15.7-4.4Z" />
      <path d="M8.1 7.6c.2-.4.4-.4.7-.4h.5l.9 2.1c.1.3 0 .5-.2.7l-.7.8a7.3 7.3 0 0 0 3.7 3.2c.3.1.5.1.7-.2l.9-1.1c.2-.3.5-.3.8-.2l2 .9c.3.1.4.3.4.5 0 .4-.2 1.3-.8 1.8-.6.5-1.4.8-2.3.6-1.1-.2-2.6-.8-4.4-2.3-2-1.7-3.3-3.8-3.7-5.1-.3-.7.1-1.2.5-1.3Z" />
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

type FormErrors = Partial<Record<"name" | "phone" | "message" | "consent", string>>;

const REQUIRED_MESSAGE = "Acest câmp este obligatoriu.";
const PHONE_PATTERN = /^(\+40|0)?7\d{8}$/;

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const rawPhone = String(data.get("phone") ?? "").trim();
    const phone = rawPhone.replace(/[\s-]/g, "");
    const email = String(data.get("email") ?? "").trim();
    const reason = String(data.get("reason") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = REQUIRED_MESSAGE;
    if (!phone) {
      nextErrors.phone = REQUIRED_MESSAGE;
    } else if (!PHONE_PATTERN.test(phone)) {
      nextErrors.phone = "Introdu un număr de telefon valid.";
    }
    if (!message) nextErrors.message = REQUIRED_MESSAGE;
    if (!consent) nextErrors.consent = "Bifează acordul pentru a putea trimite mesajul.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    try {
      if (!clinic.email) throw new Error("Missing destination email");
      const mailtoHref = buildMailtoLink(clinic.email, `Mesaj de contact — ${name}`, [
        `Nume și prenume: ${name}`,
        `Telefon: ${rawPhone}`,
        email && `E-mail: ${email}`,
        reason && `Motivul programării: ${reason}`,
        `Mesaj: ${message}`,
      ]);
      window.location.href = mailtoHref;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="dante-form-success" role="status" aria-live="polite">
        <span>
          <Icon name="check" />
        </span>
        <h3>Mesajul a fost trimis.</h3>
        <p>Te contactăm în cel mai scurt timp pentru stabilirea programării.</p>
        <button
          type="button"
          className="dante-button dante-button--outline-dark"
          onClick={() => setStatus("idle")}
        >
          Trimite un alt mesaj
        </button>
      </div>
    );
  }

  return (
    <form className="dante-request-form" onSubmit={submitForm} noValidate>
      {status === "error" && (
        <p className="contact-form__alert" role="alert">
          Mesajul nu a putut fi trimis. Te rugăm să ne suni la{" "}
          {clinic.phoneHref ? <a href={clinic.phoneHref}>{clinic.phoneDisplay ?? "0770 733 891"}</a> : "0770 733 891"}.
        </p>
      )}
      <div className="dante-form-grid">
        <label className={errors.name ? "has-error" : ""}>
          <span>Nume și prenume *</span>
          <input name="name" autoComplete="name" placeholder="Numele tău" />
          {errors.name && <small className="contact-form__error">{errors.name}</small>}
        </label>
        <label className={errors.phone ? "has-error" : ""}>
          <span>Telefon *</span>
          <input name="phone" autoComplete="tel" inputMode="tel" placeholder="07xx xxx xxx" />
          {errors.phone && <small className="contact-form__error">{errors.phone}</small>}
        </label>
        <label>
          <span>E-mail (opțional)</span>
          <input name="email" type="email" autoComplete="email" placeholder="adresa@email.ro" />
        </label>
        <label>
          <span>Motivul programării (opțional)</span>
          <select name="reason" defaultValue="">
            <option value="">Alege un motiv</option>
            <option>Consultație generală</option>
            <option>Implantologie</option>
            <option>Ortodonție</option>
            <option>Estetică dentară</option>
            <option>Altul</option>
          </select>
        </label>
        <label className={`dante-form-wide ${errors.message ? "has-error" : ""}`}>
          <span>Mesaj *</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Descrie pe scurt ce te deranjează sau ce tratament te interesează."
          />
          {errors.message && <small className="contact-form__error">{errors.message}</small>}
        </label>
      </div>
      <label className="dante-consent">
        <input name="consent" type="checkbox" />
        <span>
          Sunt de acord cu prelucrarea datelor personale conform{" "}
          <a href="/politica-de-confidentialitate">Politicii de confidențialitate</a>.
        </span>
      </label>
      {errors.consent && <small className="contact-form__error contact-form__error--consent">{errors.consent}</small>}
      <button type="submit" className="dante-button dante-button--gold dante-form-submit">
        Trimite mesajul
        <Icon name="arrow" />
      </button>
    </form>
  );
}

export default function ContactSite() {
  const [progress, setProgress] = useState(0);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-contact-reveal]").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const publishedPhone = Boolean(clinic.phoneDisplay && clinic.phoneHref);
  const publishedWhatsApp = Boolean(clinic.whatsappHref);

  // Contact cards — each is an interactive CTA (icon + info + action button),
  // ordered by the action hierarchy from the content spec:
  // Telefon → WhatsApp → E-mail → Adresă.
  const contactMethods: {
    key: string;
    icon: IconName;
    label: string;
    value: string;
    href: string;
    cta: string;
    external?: boolean;
    whatsapp?: boolean;
  }[] = [
    // ...(publishedPhone
    //   ? [
    //       {
    //         key: "phone",
    //         icon: "phone" as const,
    //         label: "Sună-ne",
    //         value: clinic.phoneDisplay!,
    //         href: clinic.phoneHref!,
    //         cta: "Apelează",
    //       },
    //     ]
    //   : []),
    // ...(publishedWhatsApp
    //   ? [
    //       {
    //         key: "whatsapp",
    //         icon: "whatsapp" as const,
    //         label: "Scrie-ne pe WhatsApp",
    //         value: clinic.phoneDisplay ?? "WhatsApp",
    //         href: clinic.whatsappHref!,
    //         cta: "Deschide WhatsApp",
    //         external: true,
    //         whatsapp: true,
    //       },
    //     ]
    //   : []),
    ...(clinic.email
      ? [
          {
            key: "email",
            icon: "mail" as const,
            label: "Trimite-ne un e-mail",
            value: clinic.email,
            href: `mailto:${clinic.email}`,
            cta: "Scrie-ne",
          },
        ]
      : []),
    ...(clinic.streetAddress
      ? [
          {
            key: "address",
            icon: "map" as const,
            label: "Ne găsești aici",
            value: clinic.streetAddress,
            href: clinic.mapsUrl ?? "#",
            cta: "Deschide în Google Maps",
            external: true,
          },
        ]
      : []),
  ];

  return (
    <div className="contact-page">
      <div className="dante-progress" style={{ width: `${progress}%` }} />
      <SiteHeader clinic={clinic} />

      <main>
        <section className="contact-hero">
          <div className="contact-hero__media">
            <Image
              src="/contact-hero.jpg"
              alt="Cabinetul clinicii stomatologice Dantè Art din Baia Mare"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              priority
            />
            <div className="contact-hero__media-fade" />
          </div>
          <div className="contact-hero__glow" />
          <div className="dante-shell contact-hero__inner">
            <div className="contact-hero__content" data-contact-reveal>
              <nav className="legal-hero__crumbs" aria-label="Breadcrumb">
                <a href="/">Acasă</a>
                <span aria-hidden="true">›</span>
                <strong>Contact</strong>
              </nav>
              <Eyebrow light>Contact</Eyebrow>
              <h1>Programează o consultație.</h1>
              <p className="contact-hero__intro">
                Ai întrebări sau dorești o programare? Ne poți suna, scrie pe WhatsApp sau trimite un
                mesaj prin formularul de mai jos. Îți răspundem în aceeași zi lucrătoare și stabilim
                împreună intervalul potrivit pentru tine.
              </p>

              <div className="contact-hero__actions">
                {publishedWhatsApp && (
                  <a
                    href={clinic.whatsappHref}
                    className="dante-button dante-button--whatsapp dante-button--large"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="whatsapp" />
                    Scrie-ne pe WhatsApp
                  </a>
                )}
                {publishedPhone && (
                  <a
                    href={clinic.phoneHref}
                    className="dante-button dante-button--gold dante-button--large"
                  >
                    <Icon name="phone" />
                    Sună acum
                  </a>
                )}
              </div>

              <div className="contact-hero__program">
                <Icon name="clock" />
                <span>
                  {clinic.weekdayHours && <>Program: Luni – Vineri: {clinic.weekdayHours} · </>}
                  Răspundem în aceeași zi lucrătoare
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-info-section">
          <div className="dante-shell">
            <div className="contact-info__grid">
              {contactMethods.map((method) => (
                <div
                  key={method.key}
                  className={`contact-card ${method.whatsapp ? "contact-card--whatsapp" : ""}`}
                  data-contact-reveal
                >
                  <span className="contact-card__icon">
                    <Icon name={method.icon} />
                  </span>
                  <div className="contact-card__body">
                    <small>{method.label}</small>
                    <strong>{method.value}</strong>
                  </div>
                  <a
                    href={method.href}
                    className="contact-card__cta"
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noreferrer" : undefined}
                  >
                    {method.cta}
                    <Icon name="arrow" />
                  </a>
                </div>
              ))}
            </div>

            {(clinic.weekdayHours || clinic.saturdayHours) && (
              <div className="contact-info__hours" data-contact-reveal>
                <Icon name="clock" />
                <div>
                  <small>Program</small>
                  <strong>
                    Luni – Vineri: {clinic.weekdayHours ?? "în curs de confirmare"} · Sâmbătă și
                    duminică: {clinic.saturdayHours ?? "Închis"}
                  </strong>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="contact-map-section">
          <div className="dante-shell">
            <header className="contact-map__head" data-contact-reveal>
              <Eyebrow>Hartă și acces</Eyebrow>
              <h2>Cum ajungi la noi</h2>
            </header>

            <div className="contact-map" data-contact-reveal>
              {mapLoaded && clinic.mapsEmbedUrl ? (
                <div className="contact-map__embed">
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
                      Deschide în Google Maps
                      <Icon name="arrow" />
                    </a>
                  )}
                </div>
              ) : (
                <button
                  type="button"
                  className="contact-map__trigger"
                  onClick={() => setMapLoaded(true)}
                >
                  <span>
                    <Icon name="map" />
                  </span>
                  <h3>{clinic.streetAddress ?? "Locația clinicii"}</h3>
                  <p>Apasă pentru a încărca harta Google Maps.</p>
                  <span className="contact-map__trigger-cta">
                    Vezi harta
                    <Icon name="arrow" />
                  </span>
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="dante-shell">
            <div className="dante-contact__form-card contact-form-card--solo" data-contact-reveal>
              <div className="dante-contact__form-heading">
                <span>
                  <Icon name="calendar" />
                </span>
                <div>
                  <h3>Lasă-ne un mesaj</h3>
                  <p>Completează datele de mai jos și te contactăm pentru stabilirea programării.</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="contact-note">
          <div className="dante-shell">
            <p>
              Pentru situații urgente, îți recomandăm să ne{" "}
              {publishedPhone ? <a href={clinic.phoneHref}>suni direct</a> : "suni direct"}.
              Formularul și mesajele scrise sunt verificate în timpul programului de lucru.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
