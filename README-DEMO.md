# Demo: Fairplay Business Consulting SRL, Florești (Cluj)

Site de prezentare (5 pagini) pentru o firmă de consultanță: finanțare pentru idei de afaceri
și valorificarea proprietăților și bunurilor. Construit ca material de pitch.
Model ales de Mario: activ-advisor.ro (navy + alamă, titluri serif, FAQ închis la culoare),
refăcut mai curat și cu formularul de dialog cerut în brief.

Stack: **Astro 7 + Tailwind 4**, output static, fără framework JS.

```
npm run dev      # server local: http://localhost:4321/fairplay-consulting/
npm run build    # build static în dist/
npm run preview  # verificare build
```

## Structura

| Pagină | Rol |
|---|---|
| `/` | prezentarea firmei: hero, cele două trasee (idee / proprietate), despre + cifre, istoric, ce facem, proiecte de succes (registru), pașii de lucru, FAQ, date de contact cu hartă |
| `/dialog` | **dialogul cu potențialii clienți** (pagina 2 din brief): formular în 4 pași, cu fișa de solicitare la final, pe care clientul o confirmă sau cere rectificare |
| `/servicii` | cele două direcții pe larg: pași, ce primești, durată orientativă; cum se plătește; cu cine lucrăm |
| `/surse-de-finantare` | 12 surse și căi de valorificare, filtrabile după situația clientului și tipul sursei |
| `/proiecte` | două proiecte povestite pe larg + registrul tuturor proiectelor, filtrabil |
| `/404` | pagină de eroare cu harta site-ului |

Brief-ul clientului descrie doar paginile 1 și 2. **Paginile 3–5 (Servicii, Surse de finanțare,
Proiecte) sunt propunerea noastră**, după structura site-urilor din nișă. De confirmat cu clientul.

## Funcționalități care merg în demo

- **Dialog în pași** (`src/pages/dialog.astro`): trei trasee (idee / proprietate / ambele), câmpuri
  diferite pe fiecare traseu, validare cu mesaje în română, telefon RO verificat, acord de contact.
  La final, fișa de solicitare cu număr și dată; butoane „Modifică” pe fiecare secțiune, care te
  întorc la pas și apoi înapoi la fișă; „Confirm, asta doresc” sau „Cer rectificare” (cu text);
  ecran de confirmare cu buton „Trimite fișa și pe WhatsApp”, care deschide WhatsApp cu fișa completă.
  Linkurile `?traseu=idee` / `?traseu=proprietate` preselectează traseul (folosite pe homepage și Servicii).
- filtre pe `/surse-de-finantare` (două axe + stare goală) și pe `/proiecte`;
- meniu mobil, bară fixă jos pe mobil (Începe dialogul + Sună), FAQ pe `<details>` fără JS;
- hartă OpenStreetMap, fără cookie-uri terțe;
- previzualizare de link (Open Graph + `public/images/og.jpg` 1200x630) pentru trimis pe WhatsApp.

## Logo și animația din hero (Higgsfield)

- **Logo**: 4 concepte generate cu Higgsfield (`gpt_image_2_5`), salvate în `brand/`. Ales: **conceptul 1**,
  litera F desenată ca parcelele unui plan cadastral, cu pătratul de alamă ca „parcela marcată”
  (proprietate + plan financiar). Semnul e redesenat de mână ca SVG curat (`public/logo-mark.svg`,
  inline în `src/components/Logo.astro`), iar „Fairplay” rămâne text live în Newsreader, deci e clar la
  orice mărime. Pe prima pagină, semnul se desenează o dată la încărcare (CSS, sub o secundă).
  `brand/concept-2-stampila.png` (ștampila rotundă cu „Florești · Cluj”) poate fi folosit ca sigiliu secundar.
- **Video hero**: panorama Clujului animată cu Higgsfield (`seedance_2_0_mini`, 720p, 4 s, fără sunet),
  apoi transformată în buclă de 8 s (înainte + înapoi) și comprimată: `public/video/hero-cluj.webm` (1,2 MB)
  și `hero-cluj.mp4` (1,7 MB). Pornește doar dacă vizitatorul nu are „mișcare redusă” activată și nu e pe
  conexiune lentă; până atunci și în lipsa lui se vede fotografia. Are buton de oprire (accesibilitate).
- TODO(real): la proiectul final, logo-ul trebuie aprobat de client și, ideal, finisat de un designer
  (variante pe fundal închis, monocrom, favicon la 16 px). Video-ul poate fi regenerat la 1080p.

## Ce este placeholder: `TODO(real)` în cod

- **`src/data/site.ts`**: adresa (strada din registrul comerțului pentru FAIR PLAY BUSINESS SRL, Florești,
  neconfirmată ca sediu al firmei de consultanță), e-mailul și programul sunt inventate.
  **Telefonul e cel real** (+40 741 051 752, numărul de pe care ne-a scris clientul). Cifrele
  „140+ dosare” și „38 mil. €” sunt inventate și sunt afișate pe homepage: se confirmă sau se scot.
- **`src/pages/index.astro`**: istoricul (2010, 2013, 2017, 2021, 2026) e scris ca exemplu de ton.
  Doar 2010 are o bază: e anul înregistrării FAIR PLAY BUSINESS SRL.
- **`src/data/proiecte.ts`**: toate proiectele sunt exemple scrise de noi. Se înlocuiesc cu proiectele reale.
- **`src/data/surse.ts`**: programele există, dar sunt descrise general, fără sume și termene.
  De verificat cu clientul ce promovează și calendarul apelurilor.
- **`src/data/faq.ts`** și blocul „Cum se plătește” din `servicii.astro`: modelul de onorariu (gratuit +
  fix + procent de succes) e cel uzual în nișă, nu al clientului.
- **`src/pages/dialog.astro`**: fișa nu se trimite nicăieri, rămâne în browser (apare în consolă).
- **`public/images/`**: fotografii Unsplash (licență gratuită), fără oameni: Cluj, machete, hale, sate din
  Transilvania, săli de ședință. Se înlocuiesc cu poze reale unde clientul are (birou, proiecte, proprietăți).
- **footer**: CUI, nr. Registrul Comerțului, linkurile legale și creditul RTR lipsesc intenționat (le punem la dezvoltare).
- **`astro.config.mjs`**: `site` și `base` sunt pentru GitHub Pages (`/fairplay-consulting`). La mutarea pe
  domeniul clientului se pune domeniul în `site` și se șterge `base`; linkurile trec toate prin `u()`.

## Ce urmează dacă clientul acceptă

1. **Conținut real**: paginile 3–5 confirmate, istoric, proiecte cu cifre reale, echipă, CUI, poze.
2. **Dialogul funcțional**: la confirmare, fișa pleacă pe e-mail la consultant (Resend) și, opțional,
   se salvează într-un istoric (Supabase sau PocketBase pe VPS, dacă vrea să vadă cererile într-un panou).
   Numărul fișei se generează pe server, nu în browser.
3. **SEO local**, pe rezultate: research RO pe „consultanță fonduri europene Cluj”, „finanțare afaceri Cluj”,
   „valorificare teren Florești”, „Start-Up Nation Cluj”; un keyword principal per pagină; `ProfessionalService`
   + `FAQPage` JSON-LD; sitemap, robots; Google Business Profile. Pagini de program (câte una pe sursă) aduc trafic.
4. **Pachet legal**: banner cookie, Termeni, Confidențialitate, Cookies (formularul colectează date personale), credit RTR.
5. **Editare de către client**: Keystatic pentru surse, proiecte și FAQ, cu build prin GitHub Actions și deploy static pe Hostinger.
6. **Performanță**: imaginile prin `astro:assets` (AVIF + srcset), fonturile self-hosted.

Estimare grosieră după acceptare: 2 zile conținut + SEO on-page, 1 zi formular funcțional + legal + deploy,
plus 1 zi dacă vrea Keystatic.
