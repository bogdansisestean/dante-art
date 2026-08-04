"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "dante_cookie_consent";
// Policy states a 6-month lifetime for the consent record.
const CONSENT_MAX_AGE = 60 * 60 * 24 * 182;

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

function persist(consent: Consent) {
  try {
    const value = JSON.stringify({ ...consent, ts: Date.now() });
    localStorage.setItem(CONSENT_KEY, value);
    document.cookie = `${CONSENT_KEY}=${encodeURIComponent(value)}; path=/; max-age=${CONSENT_MAX_AGE}; SameSite=Lax`;
  } catch {
    // Storage may be unavailable (private mode); banner will simply reappear.
  }
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_KEY);
    } catch {
      stored = null;
    }
    if (!stored) {
      setOpen(true);
    } else {
      try {
        const parsed = JSON.parse(stored);
        setAnalytics(Boolean(parsed.analytics));
        setMarketing(Boolean(parsed.marketing));
      } catch {
        setOpen(true);
      }
    }

    const reopen = () => {
      setShowDetails(true);
      setOpen(true);
    };
    window.addEventListener("dante:open-cookie-settings", reopen);
    return () => window.removeEventListener("dante:open-cookie-settings", reopen);
  }, []);

  if (!open) return null;

  const decide = (consent: Consent) => {
    persist(consent);
    setAnalytics(consent.analytics);
    setMarketing(consent.marketing);
    setShowDetails(false);
    setOpen(false);
  };

  const acceptAll = () => decide({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => decide({ necessary: true, analytics: false, marketing: false });
  const saveChoices = () => decide({ necessary: true, analytics, marketing });

  return (
    <div className="dante-cookie" role="dialog" aria-modal="false" aria-label="Setări cookie-uri">
      <div className="dante-cookie__inner">
        <div className="dante-cookie__intro">
          <strong>Îți respectăm confidențialitatea</strong>
          <p>
            Folosim cookie-uri strict necesare pentru funcționarea site-ului și, cu acordul tău,
            cookie-uri de analiză și de marketing. Poți accepta toate cookie-urile, le poți
            respinge pe cele neesențiale sau îți poți alege preferințele. Detalii în{" "}
            <a href="/politica-cookies">Politica de cookie-uri</a>.
          </p>
        </div>

        {showDetails && (
          <div className="dante-cookie__options">
            <label className="dante-cookie__option is-locked">
              <input type="checkbox" checked disabled />
              <span>
                <strong>Strict necesare</strong>
                <small>Esențiale pentru funcționarea site-ului. Nu pot fi dezactivate.</small>
              </span>
            </label>
            <label className="dante-cookie__option">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
              />
              <span>
                <strong>Analiză</strong>
                <small>Ne ajută să înțelegem, în mod agregat, cum este folosit site-ul.</small>
              </span>
            </label>
            <label className="dante-cookie__option">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(event) => setMarketing(event.target.checked)}
              />
              <span>
                <strong>Marketing</strong>
                <small>Permit afișarea de reclame relevante și măsurarea campaniilor.</small>
              </span>
            </label>
          </div>
        )}

        <div className="dante-cookie__actions">
          {showDetails ? (
            <button type="button" className="dante-cookie__btn is-primary" onClick={saveChoices}>
              Salvează preferințele
            </button>
          ) : (
            <button
              type="button"
              className="dante-cookie__btn"
              onClick={() => setShowDetails(true)}
            >
              Setări
            </button>
          )}
          <button type="button" className="dante-cookie__btn" onClick={rejectAll}>
            Respinge
          </button>
          <button type="button" className="dante-cookie__btn is-primary" onClick={acceptAll}>
            Accept toate
          </button>
        </div>
      </div>
    </div>
  );
}
