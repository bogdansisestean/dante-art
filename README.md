# Dantè Art

## Export static pentru cPanel

Rulează:

```bash
npm install
npm run export
```

Site-ul static este generat în directorul `out/`. În cPanel, încarcă **conținutul**
directorului `out/` în `public_html/` (sau în document root-ul domeniului).

Nu este necesar un server Node.js pe hosting. Pentru actualizări, generează din nou
exportul și înlocuiește fișierele din document root.
