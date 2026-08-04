"use client";

import { useEffect, useState } from "react";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { clinic } from "./site-config";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="legal-page">
      <div className="dante-progress" style={{ width: `${progress}%` }} />
      <SiteHeader clinic={clinic} />

      <main>
        <section className="legal-hero">
          <div className="legal-hero__glow" />
          <div className="dante-shell">
            <nav className="legal-hero__crumbs" aria-label="Breadcrumb">
              <a href="/">Acasă</a>
              <span aria-hidden="true">›</span>
              <strong>{title}</strong>
            </nav>
            <h1>{title}</h1>
            <p className="legal-hero__updated">Ultima actualizare: {updated}</p>
          </div>
        </section>

        <section className="legal-body">
          <article className="dante-shell legal-prose">{children}</article>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
