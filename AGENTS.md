# Reguli de design pentru Dantè Art

Toate feature-urile, paginile și componentele noi trebuie realizate în stilul vizual existent al aplicației.

## Reguli obligatorii

- Refolosește token-urile CSS definite în `app/globals.css`; nu introduce culori arbitrare.
- Paleta principală este navy (`--navy-*`), gold (`--gold-*`), cream și paper.
- Folosește `--serif` pentru titluri și `--sans` pentru text, formulare și controale.
- Refolosește clasele și tiparele existente pentru butoane, formulare, carduri, modale, umbre și animații.
- Păstrează aspectul premium: fundaluri navy, accente aurii, suprafețe cream/paper, colțuri rotunjite și umbre discrete.
- Respectă spațierea, dimensiunile, tranzițiile și breakpoint-urile deja folosite în aplicație.
- Orice interfață nouă trebuie să fie responsive și accesibilă prin tastatură.
- Înainte de a crea un stil nou, verifică dacă există deja un component sau un token reutilizabil.
- Evită stiluri izolate care nu se potrivesc cu restul site-ului, inclusiv alte palete, fonturi sau tipuri de butoane.

## Sursa de adevăr

Design token-urile din `app/globals.css` și componentele existente din `app/home-site.css` reprezintă sursa de adevăr pentru implementările vizuale.
