import type { Metadata } from "next";
import "./globals.css";
import "./home-site.css";
import "./prices-site.css";
import "./about-site.css";
import "./team-site.css";
import "./services-site.css";
import "./service-detail.css";
import "./contact-site.css";
import "./technology-site.css";
import "./legal.css";
import CookieBanner from "./cookie-banner";
import FloatingWhatsApp from "./floating-whatsapp";

export const metadata: Metadata = {
  title: "Dantè Art | Clinică stomatologică în Baia Mare",
  description:
    "Tratamente stomatologice moderne, planuri transparente și tehnologie digitală la Dantè Art, în Baia Mare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>
        {children}
        <FloatingWhatsApp />
        <CookieBanner />
      </body>
    </html>
  );
}
