import type { Metadata } from "next";
import "./globals.css";
import "./home-site.css";

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
      <body>{children}</body>
    </html>
  );
}
