import type { Metadata } from "next";
import PricesSite from "../prices-site";

export const metadata: Metadata = {
  title: "Prețuri tratamente stomatologice | Dantè Art Baia Mare",
  description:
    "Vezi tarifele Dantè Art pentru consultații, igienizare, implanturi, ortodonție, protetică și alte tratamente stomatologice în Baia Mare.",
};

export default function PricesPage() {
  return <PricesSite />;
}
