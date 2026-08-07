import type { Metadata } from "next";
import LegalLayout from "../legal-layout";
import { clinic } from "../site-config";

export const metadata: Metadata = {
  title: "Termeni și condiții | Dantè Art Baia Mare",
  description:
    "Termenii și condițiile de utilizare a site-ului dante-art.ro, administrat de DOCTORTIM S.R.L. (Dantè Art).",
  alternates: { canonical: "/termeni-si-conditii" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Termeni și condiții" updated="2 august 2026">
      <p className="legal-prose__lead">
        Te rugăm să citești cu atenție acest document înainte de a folosi site-ul dante-art.ro.
        Accesarea și utilizarea site-ului înseamnă că ești de acord cu termenii de mai jos. Dacă nu
        ești de acord cu ei, te rugăm să nu folosești site-ul.
      </p>

      <h2>1. Cine administrează site-ul</h2>
      <ul>
        <li>Denumire: DOCTORTIM S.R.L.</li>
        <li>Denumire comercială: Dantè Art</li>
        <li>Sediu social: Sat Ruscova, Comuna Ruscova, nr. 1016, județul Maramureș</li>
        <li>
          Punct de lucru (clinica): Municipiul Baia Mare, Str. Uranus nr. 1, etaj parter, apartament
          2, județul Maramureș
        </li>
        <li>CUI: 50303647</li>
        <li>Nr. de ordine în Registrul Comerțului: J2024001014244</li>
        <li>EUID: ROONRC.J2024001014244</li>
        <li>Capital social: 500 lei</li>
        <li>
          Telefon: <a href={clinic.phoneHref}>{clinic.phoneDisplay}</a>
        </li>
        <li>
          E-mail: <a href="mailto:contact.danteart@gmail.com">contact.danteart@gmail.com</a>
        </li>
      </ul>
      <p>
        Activitatea principală a societății este cea de asistență stomatologică (cod CAEN 8623), iar
        activitatea secundară constă în servicii de diagnostic imagistic și activități ale
        laboratoarelor medicale (cod CAEN 8691).
      </p>
      <p>Clinica funcționează în baza:</p>
      <ul>
        <li>
          Autorizației sanitare de funcționare nr. ______ din ______, emisă de Direcția de Sănătate
          Publică Maramureș;
        </li>
        <li>
          Certificatului de înregistrare în Registrul unic al cabinetelor medicale nr. ______ din
          ______;
        </li>
        <li>
          Certificatului de avizare emis de Colegiul Medicilor Stomatologi din România – Filiala
          Maramureș nr. ______ din ______.
        </li>
      </ul>
      <p>(spații de completat după primirea documentelor)</p>

      <h2>2. Definiții</h2>
      <ul>
        <li>Site – ansamblul paginilor și subpaginilor disponibile la adresa dante-art.ro.</li>
        <li>Clinica – DOCTORTIM S.R.L., care își desfășoară activitatea sub marca Dantè Art.</li>
        <li>Utilizator – orice persoană care accesează site-ul, indiferent de motiv.</li>
        <li>Pacient – persoana care beneficiază de serviciile medicale ale clinicii.</li>
        <li>
          Conținut – texte, imagini, materiale video, grafică, articole de blog, structura și
          designul site-ului.
        </li>
      </ul>

      <h2>3. Scopul site-ului. Informațiile medicale nu înlocuiesc consultul</h2>
      <p>
        Site-ul are caracter informativ și de prezentare. Prin intermediul lui îți facem cunoscute
        serviciile clinicii, echipa, dotarea și modul în care lucrăm.
      </p>
      <p>
        Informațiile publicate pe site, inclusiv articolele de blog și descrierile de servicii, nu
        constituie consultanță medicală, diagnostic sau recomandare de tratament. Ele nu înlocuiesc
        consultul stomatologic realizat de un medic, la cabinet. Orice decizie privind sănătatea ta
        trebuie luată împreună cu un medic, după o examinare clinică și, dacă este cazul, după
        investigații suplimentare.
      </p>
      <p>
        Rezultatele tratamentelor diferă de la un pacient la altul. Materialele care prezintă cazuri
        sau rezultate au rol ilustrativ și nu reprezintă o promisiune sau o garanție a unui rezultat
        similar în cazul tău.
      </p>
      <p>Dacă te confrunți cu o urgență medicală, sună la 112.</p>

      <h2>4. Cererile de programare</h2>
      <p>
        Formularul de programare de pe site și mesajele transmise pe WhatsApp reprezintă cereri de
        programare, nu programări confirmate.
      </p>
      <ul>
        <li>
          Programarea devine fermă doar după ce un reprezentant al clinicii te contactează și
          stabilim împreună data și ora.
        </li>
        <li>
          Te rugăm să completezi date de contact reale și corecte. Nu putem confirma o programare
          dacă nu te putem contacta.
        </li>
        <li>
          Ne rezervăm dreptul de a nu da curs cererilor care conțin date vădit false, injurii sau
          conținut abuziv.
        </li>
        <li>
          Dacă nu mai poți ajunge la o programare stabilită, te rugăm să ne anunți telefonic din
          timp, ideal cu cel puțin 24 de ore înainte, pentru a putea oferi intervalul altui pacient.
        </li>
      </ul>
      <p>
        Transmiterea unei cereri prin site nu creează, prin ea însăși, o relație medic–pacient.
        Aceasta se naște în momentul consultației la cabinet și al semnării documentelor specifice,
        inclusiv a consimțământului informat.
      </p>

      <h2>5. Prețuri și plată</h2>
      <p>
        Prețurile afișate pe site sunt exprimate în lei și au caracter orientativ. Ele reprezintă,
        de regulă, un preț de pornire pentru serviciul respectiv.
      </p>
      <p>
        Costul final al tratamentului se stabilește după consultație și după întocmirea planului
        personalizat de tratament, care îți este prezentat și explicat înainte de începerea oricărei
        manopere. Prețul depinde de complexitatea cazului, de materialele alese și de numărul de
        etape necesare.
      </p>
      <p>
        Clinica își rezervă dreptul de a modifica prețurile afișate pe site, fără notificare
        prealabilă. Prețul aplicabil este cel comunicat în planul de tratament acceptat de tine.
      </p>
      <p>
        Plata în rate se realizează prin intermediul unei instituții financiare partenere (Banca
        Transilvania) și este supusă condițiilor de creditare și aprobării acesteia. Clinica nu este
        furnizor de servicii financiare și nu răspunde de deciziile de aprobare sau respingere ale
        băncii.
      </p>

      <h2>6. Proprietate intelectuală</h2>
      <p>
        Întregul conținut al site-ului — texte, articole, fotografii, materiale video, elemente
        grafice, logo, denumirea „Dantè Art”, structura și designul paginilor — aparține clinicii
        sau este folosit în baza unei licențe valabile și este protejat de legislația privind
        dreptul de autor și drepturile de proprietate industrială.
      </p>
      <p>Poți consulta, descărca și tipări conținutul exclusiv pentru uz personal, necomercial.</p>
      <p>
        Este interzisă, fără acordul nostru scris prealabil: copierea, reproducerea, republicarea,
        distribuirea, modificarea, vânzarea sau folosirea în orice mod comercial a conținutului,
        precum și extragerea automată de date (scraping) sau folosirea conținutului pentru
        antrenarea unor sisteme automate.
      </p>
      <p>
        Citarea unor fragmente scurte din articolele de blog este permisă cu indicarea sursei și cu
        link activ către pagina originală.
      </p>
      <p>
        Unele imagini de pe site sunt fotografii de stoc cu caracter ilustrativ și nu reprezintă
        pacienți sau cazuri tratate în clinică.
      </p>

      <h2>7. Obligațiile utilizatorului</h2>
      <p>Te obligi să folosești site-ul cu bună-credință și să nu:</p>
      <ul>
        <li>
          transmiți conținut ilegal, defăimător, obscen sau care încalcă drepturile altor persoane;
        </li>
        <li>încerci să obții acces neautorizat la site, la serverele sau la bazele de date asociate;</li>
        <li>
          afectezi funcționarea site-ului prin atacuri informatice, roboți, scripturi automate sau
          supraîncărcarea infrastructurii;
        </li>
        <li>folosești datele de contact publicate pe site pentru comunicări comerciale nesolicitate.</li>
      </ul>
      <p>
        Ne rezervăm dreptul de a restricționa accesul utilizatorilor care încalcă aceste reguli și
        de a sesiza autoritățile competente.
      </p>

      <h2>8. Linkuri către alte site-uri</h2>
      <p>
        Site-ul poate conține linkuri către site-uri sau platforme administrate de terți (rețele
        sociale, hărți, materiale video). Nu controlăm și nu ne asumăm răspunderea pentru conținutul,
        politicile sau practicile acestora. Îți recomandăm să consulți termenii și politicile de
        confidențialitate ale fiecărui site pe care îl accesezi.
      </p>

      <h2>9. Limitarea răspunderii</h2>
      <p>
        Depunem eforturi rezonabile pentru ca informațiile publicate să fie corecte și actuale, însă
        nu garantăm că site-ul este permanent disponibil, lipsit de erori sau de întreruperi.
        Accesul poate fi suspendat temporar pentru mentenanță, actualizări sau din cauze independente
        de voința noastră.
      </p>
      <p>
        În limitele permise de lege, nu răspundem pentru prejudicii rezultate din: utilizarea sau
        imposibilitatea utilizării site-ului, deciziile luate exclusiv pe baza informațiilor
        publicate aici fără consultarea unui medic, ori funcționarea serviciilor administrate de
        terți.
      </p>
      <p>
        Nicio prevedere din acest document nu limitează răspunderea clinicii pentru actul medical
        propriu-zis, care este guvernată de legislația specifică din domeniul sănătății.
      </p>

      <h2>10. Prelucrarea datelor cu caracter personal</h2>
      <p>
        Modul în care colectăm și folosim datele tale este descris în{" "}
        <a href="/politica-de-confidentialitate">Politica de confidențialitate</a> și în{" "}
        <a href="/politica-cookies">Politica de cookie-uri</a>, care fac parte integrantă din
        prezentul document.
      </p>

      <h2>11. Reclamații și soluționarea litigiilor</h2>
      <p>
        Dacă ești nemulțumit de serviciile noastre, te rugăm să ne contactezi mai întâi direct,
        telefonic la <a href={clinic.phoneHref}>{clinic.phoneDisplay}</a> sau pe e-mail la{" "}
        <a href="mailto:contact.danteart@gmail.com">contact.danteart@gmail.com</a>. Îți răspundem în
        cel mult 30 de zile de la primirea sesizării. Majoritatea situațiilor se rezolvă prin dialog.
      </p>
      <p>Dacă nu ajungem la o soluție, te poți adresa:</p>
      <ul>
        <li>
          Autorității Naționale pentru Protecția Consumatorilor (ANPC) – Comisariatul Județean pentru
          Protecția Consumatorilor Maramureș; informații și formulare pe{" "}
          <a href="https://www.anpc.ro">www.anpc.ro</a>;
        </li>
        <li>
          entităților de soluționare alternativă a litigiilor (SAL) din cadrul ANPC, conform O.G.
          nr. 38/2015;
        </li>
        <li>
          Colegiului Medicilor Stomatologi din România – Filiala Maramureș, pentru aspecte legate de
          conduita profesională a medicilor;
        </li>
        <li>
          Direcției de Sănătate Publică Maramureș, pentru aspecte privind condițiile de funcționare a
          cabinetului;
        </li>
        <li>instanțelor de judecată competente.</li>
      </ul>
      <p>
        Notă: Platforma europeană de soluționare online a litigiilor (SOL/ODR) a fost desființată la
        20 iulie 2025, prin Regulamentul (UE) 2024/3228. Din acest motiv, site-ul nu mai afișează un
        link către aceasta.
      </p>

      <h2>12. Legea aplicabilă</h2>
      <p>
        Acești termeni sunt guvernați de legislația română. Orice litigiu care nu poate fi
        soluționat pe cale amiabilă va fi supus instanțelor competente de la sediul clinicii.
      </p>

      <h2>13. Modificarea termenilor</h2>
      <p>
        Putem modifica acest document oricând, iar versiunea actualizată produce efecte din momentul
        publicării pe site. Te încurajăm să îl consulți periodic. Utilizarea site-ului după
        publicarea modificărilor înseamnă acceptarea acestora.
      </p>

      <h2>14. Contact</h2>
      <div className="legal-prose__contact">
        <strong>DOCTORTIM S.R.L. — Clinica Dantè Art</strong>
        Str. Uranus nr. 1, parter, ap. 2, Baia Mare, județul Maramureș
        <br />
        Telefon: <a href={clinic.phoneHref}>{clinic.phoneDisplay}</a> · E-mail:{" "}
        <a href="mailto:contact.danteart@gmail.com">contact.danteart@gmail.com</a>
      </div>
    </LegalLayout>
  );
}
