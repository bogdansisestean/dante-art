import type { Metadata } from "next";
import LegalLayout from "../legal-layout";
import { clinic } from "../site-config";

export const metadata: Metadata = {
  title: "Politica de cookie-uri | Dantè Art Baia Mare",
  description:
    "Ce sunt cookie-urile, ce tipuri folosește site-ul Dantè Art, în ce scop și cum îți poți gestiona preferințele.",
  alternates: { canonical: "/politica-cookies" },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Politica de cookie-uri" updated="2 august 2026">
      <p className="legal-prose__lead">
        Această politică explică ce sunt cookie-urile, ce tipuri folosim pe site-ul dante-art.ro,
        în ce scop și cum îți poți controla preferințele.
      </p>
      <p>
        Site-ul este administrat de DOCTORTIM S.R.L. (Dantè Art), CUI 50303647, J2024001014244, cu
        punct de lucru în Baia Mare, Str. Uranus nr. 1, parter, ap. 2, județul Maramureș.
      </p>

      <h2>1. Ce sunt cookie-urile</h2>
      <p>
        Cookie-urile sunt fișiere text de mici dimensiuni, salvate pe dispozitivul tău (calculator,
        telefon, tabletă) atunci când vizitezi un site. Ele permit site-ului să rețină informații
        despre vizita ta: preferințele de afișare, paginile parcurse sau faptul că ai închis deja un
        anumit mesaj.
      </p>
      <p>
        Alături de cookie-uri, site-urile pot folosi tehnologii similare: local storage, session
        storage, pixeli de urmărire sau SDK-uri. În această politică, ne referim la toate acestea
        prin termenul generic „cookie-uri”.
      </p>
      <p>
        Cookie-urile nu conțin programe și nu pot infecta dispozitivul tău cu viruși. Nu ne oferă
        acces la fișierele tale personale.
      </p>
      <p>
        După durata de viață, cookie-urile pot fi: de sesiune – se șterg automat când închizi
        browserul; persistente – rămân pe dispozitiv o perioadă determinată sau până când le ștergi
        manual.
      </p>
      <p>
        După proveniență, ele pot fi: proprii (first-party) – plasate de dante-art.ro; ale terților
        (third-party) – plasate de alte servicii pe care le folosim, cum ar fi instrumentele de
        analiză a traficului sau conținutul încorporat.
      </p>

      <h2>2. Cadrul legal</h2>
      <p>
        Folosirea cookie-urilor este reglementată de Legea nr. 506/2004 privind prelucrarea datelor
        cu caracter personal și protecția vieții private în sectorul comunicațiilor electronice și de
        Regulamentul (UE) 2016/679 (GDPR).
      </p>
      <p>
        Cookie-urile strict necesare se instalează fără consimțământ, pentru că fără ele site-ul nu
        poate funcționa. Toate celelalte categorii se instalează numai după ce îți exprimi acordul
        prin bannerul de cookie-uri. Refuzul sau retragerea consimțământului nu îți afectează
        accesul la conținutul informativ al site-ului.
      </p>

      <h2>3. Ce cookie-uri folosim</h2>
      <h3>3.1. Cookie-uri strict necesare</h3>
      <p>
        Asigură funcționarea de bază a site-ului: securitatea, echilibrarea traficului, funcționarea
        formularului de programare și memorarea opțiunilor tale privind cookie-urile.
      </p>
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Furnizor</th>
              <th>Scop</th>
              <th>Durată</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dante_cookie_consent</td>
              <td>dante-art.ro</td>
              <td>Reține opțiunile tale privind cookie-urile</td>
              <td>6 luni</td>
            </tr>
            <tr>
              <td>Cookie-uri de securitate și de rutare a traficului</td>
              <td>Vercel Inc. (găzduirea site-ului)</td>
              <td>Livrarea corectă și securizată a paginilor</td>
              <td>sesiune</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Temei juridic: interesul legitim de a furniza un site funcțional și sigur. Aceste cookie-uri
        nu pot fi dezactivate din banner, dar le poți bloca din setările browserului, cu riscul ca
        unele funcții să nu mai fie disponibile.
      </p>
      <h3>3.2. Cookie-uri de analiză (statistică)</h3>
      <p>
        Ne ajută să înțelegem cum este folosit site-ul: ce pagini sunt vizitate, cât timp petrec
        vizitatorii pe ele, ce dispozitive folosesc. Datele sunt utilizate în formă agregată, pentru
        a îmbunătăți conținutul și structura site-ului.
      </p>
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Furnizor</th>
              <th>Scop</th>
              <th>Durată</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>Google Analytics (Google Ireland Ltd. / Google LLC)</td>
              <td>Distinge vizitatorii unici</td>
              <td>2 ani</td>
            </tr>
            <tr>
              <td>_ga_&lt;ID&gt;</td>
              <td>Google Analytics</td>
              <td>Menține starea sesiunii de măsurare</td>
              <td>2 ani</td>
            </tr>
            <tr>
              <td>_gid</td>
              <td>Google Analytics</td>
              <td>Distinge vizitatorii, la nivel de zi</td>
              <td>24 de ore</td>
            </tr>
            <tr>
              <td>_gat</td>
              <td>Google Analytics</td>
              <td>Limitează rata de trimitere a cererilor către server</td>
              <td>1 minut</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Temei juridic: consimțământul tău.</p>
      <h3>3.3. Cookie-uri de marketing</h3>
      <p>
        Permit afișarea de reclame relevante pe alte platforme și măsurarea eficienței campaniilor
        noastre.
      </p>
      <div className="legal-table-wrap">
        <table className="legal-table">
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Furnizor</th>
              <th>Scop</th>
              <th>Durată</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_fbp</td>
              <td>Meta Pixel (Meta Platforms Ireland Ltd.)</td>
              <td>Identifică browserul pentru afișarea de reclame și măsurarea conversiilor</td>
              <td>3 luni</td>
            </tr>
            <tr>
              <td>fr</td>
              <td>Meta</td>
              <td>Livrarea de reclame relevante pe Facebook și Instagram</td>
              <td>3 luni</td>
            </tr>
            <tr>
              <td>_gcl_au</td>
              <td>Google Ads</td>
              <td>Măsurarea conversiilor generate de campaniile publicitare</td>
              <td>3 luni</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aceste servicii sunt operate de Google și Meta, care acționează ca operatori independenți
        sau operatori asociați pentru datele colectate prin instrumentele lor. Informații
        suplimentare găsești în politicile de confidențialitate ale acestora
        (policies.google.com/privacy, respectiv facebook.com/privacy/policy).
      </p>
      <p>Temei juridic: consimțământul tău.</p>
      <p>
        <strong>Important:</strong> nu folosim informații despre starea ta de sănătate sau despre
        tratamentele care te interesează pentru a-ți afișa reclame personalizate.
      </p>
      <h3>3.4. Conținut încorporat de la terți</h3>
      <p>
        Anumite pagini pot include conținut de pe alte platforme: hărți (Google Maps), materiale
        video (YouTube), butoane sau fluxuri de pe rețele sociale (Facebook, Instagram, TikTok,
        LinkedIn). Aceste servicii pot plasa propriile cookie-uri și pot colecta date despre tine
        conform politicilor lor de confidențialitate, asupra cărora nu avem control.
      </p>
      <p>
        Butonul de WhatsApp de pe site este un simplu link către aplicație. El nu plasează
        cookie-uri, dar, în momentul în care îl folosești, comunicarea are loc în aplicația WhatsApp,
        guvernată de politica de confidențialitate a Meta.
      </p>

      <h2>4. Cum îți gestionezi preferințele</h2>
      <h3>Pe site</h3>
      <p>
        La prima vizită, îți afișăm un banner prin care poți accepta sau respinge cookie-urile
        neesențiale ori poți alege categoriile dorite. Îți poți schimba opțiunile oricând, accesând
        linkul „Setări cookie-uri” din subsolul site-ului.
      </p>
      <h3>Din browser</h3>
      <p>
        Poți bloca sau șterge cookie-urile din setările browserului. Instrucțiuni pentru cele mai
        folosite browsere găsești în secțiunile de asistență ale acestora:
      </p>
      <ul>
        <li>Google Chrome – Setări → Confidențialitate și securitate → Cookie-uri</li>
        <li>Mozilla Firefox – Setări → Confidențialitate și securitate</li>
        <li>Safari – Preferințe → Confidențialitate</li>
        <li>Microsoft Edge – Setări → Cookie-uri și permisiuni pentru site</li>
      </ul>
      <p>
        Ștergerea cookie-urilor din browser înseamnă și ștergerea opțiunilor tale salvate, așa că
        bannerul îți va fi afișat din nou la următoarea vizită.
      </p>

      <h2>5. Ce se întâmplă dacă refuzi cookie-urile</h2>
      <p>
        Site-ul rămâne funcțional. Vei putea citi toate informațiile și vei putea trimite cereri de
        programare. Singura diferență este că nu vom colecta statistici despre vizita ta și nu vei
        vedea comunicări publicitare personalizate din partea noastră.
      </p>

      <h2>6. Modificări</h2>
      <p>
        Actualizăm această politică ori de câte ori adăugăm sau eliminăm instrumente care folosesc
        cookie-uri. Versiunea în vigoare este cea publicată pe această pagină, cu data ultimei
        actualizări menționată la început.
      </p>

      <h2>7. Contact</h2>
      <div className="legal-prose__contact">
        <strong>DOCTORTIM S.R.L. — Clinica Dantè Art</strong>
        Str. Uranus nr. 1, parter, ap. 2, Baia Mare
        <br />
        Telefon: <a href={clinic.phoneHref}>{clinic.phoneDisplay}</a> · E-mail:{" "}
        <a href="mailto:contact.danteart@gmail.com">contact.danteart@gmail.com</a>
      </div>
      <p>
        Vezi și <a href="/politica-de-confidentialitate">Politica de confidențialitate</a>.
      </p>
    </LegalLayout>
  );
}
