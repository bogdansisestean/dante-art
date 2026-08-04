"use client";

import BrandLogo from "./brand-logo";
import {
  anpc,
  clinic,
  company,
  footerNavigation,
  footerServices,
  socialLinks,
  type SocialName,
} from "./site-config";

function FooterIcon({
  name,
}: {
  name: "arrow" | "clock" | "map" | "mail" | "phone" | SocialName;
}) {
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
  if (name === "clock")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3.5 2" />
      </svg>
    );
  if (name === "map")
    return (
      <svg {...common}>
        <path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    );
  if (name === "mail")
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  if (name === "phone")
    return (
      <svg {...common}>
        <path d="M6.4 3.5h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 4.4 5.5a2 2 0 0 1 2-2Z" />
      </svg>
    );
  // Social glyphs use fill for a solid, recognizable brand mark.
  const solid = { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true };
  if (name === "facebook")
    return (
      <svg {...solid}>
        <path d="M14 8.5V7c0-.7.3-1 1-1h1.5V3H14c-2.2 0-3.5 1.3-3.5 3.6V8.5H8.5v3h2v9h3.5v-9h2.3l.4-3H14Z" />
      </svg>
    );
  if (name === "instagram")
    return (
      <svg {...solid}>
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.2.8-.4.3-.6.7-.8 1.2-.2.4-.3 1-.4 2.1C2.7 9.8 2.7 10.2 2.7 12s0 2.2.1 3.4c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.3.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.3.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-3.4s0-2.2-.1-3.4c-.1-1.1-.2-1.7-.4-2.1a3.3 3.3 0 0 0-.8-1.2 3.3 3.3 0 0 0-1.2-.8c-.4-.2-1-.3-2.1-.4C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.1-3.2a1.1 1.1 0 1 1 0 2.3 1.1 1.1 0 0 1 0-2.3Z" />
      </svg>
    );
  // tiktok
  return (
    <svg {...solid}>
      <path d="M16.5 3c.3 1.9 1.4 3.3 3.5 3.6v2.4c-1.3 0-2.5-.4-3.5-1.1v6.1c0 3.1-2.4 5.5-5.5 5.5S5.5 17.1 5.5 14s2.4-5.5 5.5-5.5c.3 0 .6 0 .9.1v2.6c-.3-.1-.6-.2-.9-.2-1.6 0-2.9 1.3-2.9 2.9S9.4 16.9 11 16.9s2.9-1.3 2.9-2.9V3h2.6Z" />
    </svg>
  );
}

function openCookieSettings() {
  window.dispatchEvent(new Event("dante:open-cookie-settings"));
}

export default function SiteFooter({
  onAppointment,
}: {
  onAppointment?: () => void;
}) {
  return (
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
            <div className="dante-footer__social" aria-label="Rețele sociale">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <FooterIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          <div className="dante-footer__column">
            <small>Navigare</small>
            {footerNavigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="dante-footer__column">
            <small>Servicii</small>
            {footerServices.map((service) => (
              <a href={service.href} key={service.href}>
                {service.label}
              </a>
            ))}
          </div>

          <div className="dante-footer__column dante-footer__contact">
            <small>Contact</small>
            {clinic.phoneDisplay && clinic.phoneHref && (
              <a href={clinic.phoneHref}>
                <FooterIcon name="phone" />
                {clinic.phoneDisplay}
              </a>
            )}
            {clinic.email && (
              <a href={`mailto:${clinic.email}`}>
                <FooterIcon name="mail" />
                {clinic.email}
              </a>
            )}
            <a href={clinic.mapsUrl} target="_blank" rel="noreferrer">
              <FooterIcon name="map" />
              {clinic.streetAddress}
            </a>
            <div className="dante-footer__hours">
              <FooterIcon name="clock" />
              <span>
                Luni–Vineri: {clinic.weekdayHours}
                <br />
                Sâmbătă și Duminică: Închis
              </span>
            </div>
            {onAppointment ? (
              <button
                type="button"
                className="dante-button dante-button--gold"
                onClick={onAppointment}
              >
                Programează-te
                <FooterIcon name="arrow" />
              </button>
            ) : (
              <a href="/contact" className="dante-button dante-button--gold">
                Programează-te
                <FooterIcon name="arrow" />
              </a>
            )}
          </div>
        </div>

        <div className="dante-footer__legal-row">
          <p className="dante-footer__company">
            {company.legalName} · CUI {company.cui} · {company.regCom}
            <br />
            {company.address}
          </p>
          <a
            className="dante-footer__anpc"
            href={anpc.href}
            target="_blank"
            rel="noreferrer"
            aria-label={anpc.label}
          >
            {/* Official ANPC SAL badge, self-hosted. Plain img keeps static export simple. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={anpc.banner} alt={anpc.label} width={220} height={55} loading="lazy" />
          </a>
        </div>

        <div className="dante-footer__bottom">
          <span>© 2026 Dantè Art. Toate drepturile rezervate.</span>
          <nav aria-label="Linkuri legale">
            <a href="/politica-de-confidentialitate">Confidențialitate</a>
            <a href="/termeni-si-conditii">Termeni și condiții</a>
            <a href="/politica-cookies">Cookies</a>
            <button type="button" onClick={openCookieSettings}>
              Setări cookie-uri
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
