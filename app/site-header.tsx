"use client";

import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import BrandLogo from "./brand-logo";
import AppointmentModal from "./appointment-modal";
import { servicesMenu } from "./site-config";

type ClinicHeaderDetails = {
  city: string;
  streetAddress?: string;
  phoneDisplay?: string;
  phoneHref?: string;
  weekdayHours?: string;
};

const navigation = [
  { href: "/", label: "Acasă" },
  { href: "/despre", label: "Despre noi" },
  { href: "/servicii", label: "Servicii", hasMenu: true },
  { href: "/echipa", label: "Echipa" },
  { href: "/tehnologie", label: "Tehnologie" },
  { href: "/preturi", label: "Prețuri" },
  { href: "/contact", label: "Contact" },
];

function HeaderIcon({ name }: { name: "arrow" | "calendar" | "clock" | "map" | "phone" }) {
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
    return <svg {...common}><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
  }
  if (name === "calendar") {
    return <svg {...common}><rect x="3.5" y="5.5" width="17" height="15" rx="3" /><path d="M8 3v5M16 3v5M3.5 10.5h17" /></svg>;
  }
  if (name === "clock") {
    return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3.5 2" /></svg>;
  }
  if (name === "map") {
    return <svg {...common}><path d="M12 21s6-5.6 6-11a6 6 0 1 0-12 0c0 5.4 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg>;
  }
  return <svg {...common}><path d="M6.4 3.5h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14.5 14.5 0 0 1 4.4 5.5a2 2 0 0 1 2-2Z" /></svg>;
}

export default function SiteHeader({
  clinic,
  onAppointment,
}: {
  clinic: ClinicHeaderDetails;
  onAppointment?: () => void;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const publishedPhone = Boolean(clinic.phoneDisplay && clinic.phoneHref);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [servicesOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const requestAppointment = () => {
    setMenuOpen(false);
    if (onAppointment) {
      onAppointment();
    } else {
      setAppointmentOpen(true);
    }
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* <div className="dante-topbar">
        <div className="dante-shell dante-topbar__inner">
          <span><HeaderIcon name="map" />{clinic.streetAddress ?? clinic.city}</span>
          {publishedPhone && (
            <a href={clinic.phoneHref}><HeaderIcon name="phone" />{clinic.phoneDisplay}</a>
          )}
          <span className="dante-topbar__spacer" />
          <span>
            <HeaderIcon name="clock" />
            Luni–Vineri: {clinic.weekdayHours ?? "program în curs de confirmare"}
          </span>
        </div>
      </div> */}

      <header className={`dante-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="dante-shell dante-nav">
          <a href="/" className="dante-nav__brand" aria-label="Dantè Art — Acasă">
            <BrandLogo compact />
          </a>
          <nav className="dante-nav__links" aria-label="Navigare principală">
            {navigation.map((item) =>
              item.hasMenu ? (
                <div
                  key={item.href}
                  className={`dante-nav__has-menu ${servicesOpen ? "is-open" : ""}`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onFocus={() => setServicesOpen(true)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                      setServicesOpen(false);
                    }
                  }}
                >
                  <a
                    href={item.href}
                    className={isActive(item.href) ? "is-active" : ""}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    {item.label}
                    <span aria-hidden="true">⌄</span>
                  </a>
                  <div className="dante-nav__dropdown">
                    {servicesMenu.map((service) => (
                      <a
                        href={service.href}
                        key={service.href}
                        className={pathname === service.href ? "is-current" : ""}
                      >
                        {service.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a href={item.href} className={isActive(item.href) ? "is-active" : ""} key={item.href}>
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <div className="dante-nav__actions">
            {publishedPhone && (
              <a href={clinic.phoneHref} className="dante-phone-button" aria-label={`Sună la ${clinic.phoneDisplay}`}>
                <HeaderIcon name="phone" />
              </a>
            )}
            <button type="button" className="dante-button dante-button--gold dante-nav__cta" onClick={requestAppointment}>
              Programează-te
              <HeaderIcon name="arrow" />
            </button>
            <button
              type="button"
              className={`dante-menu-button ${menuOpen ? "is-open" : ""}`}
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
            >
              <span className="dante-menu-button__icon" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className={`dante-mobile-menu ${menuOpen ? "is-open" : ""}`} id="mobile-navigation" aria-hidden={!menuOpen}>
        <div className="dante-mobile-menu__glow" />
        <div className="dante-mobile-menu__inner">
          <button type="button" className="dante-mobile-menu__appointment" onClick={requestAppointment}>
            <HeaderIcon name="calendar" />
            Programează-te
            <HeaderIcon name="arrow" />
          </button>
          {navigation.map((item, index) => (
            <Fragment key={item.href}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
              {item.hasMenu && (
                <div className="dante-mobile-menu__sub">
                  {servicesMenu.map((service) => (
                    <a href={service.href} onClick={() => setMenuOpen(false)} key={service.href}>
                      {service.label}
                    </a>
                  ))}
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </>
  );
}
