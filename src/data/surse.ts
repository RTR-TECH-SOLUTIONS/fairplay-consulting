// Surse de finanțare și căi de valorificare afișate pe /surse-de-finantare.
// TODO(real): de verificat cu clientul calendarul apelurilor și ce programe
// vrea să promoveze. Textele descriu programele la nivel general, fără sume
// sau termene, pentru că acestea se schimbă la fiecare apel.

export type Tip = "nerambursabil" | "credit" | "investitori" | "valorificare";
export type Profil = "idee" | "firma" | "rural" | "proprietate";

export const tipuri: Record<Tip, string> = {
  nerambursabil: "Nerambursabil",
  credit: "Credit și garanții",
  investitori: "Investitori",
  valorificare: "Valorificare",
};

export const profiluri: Record<Profil, string> = {
  idee: "Am doar ideea",
  firma: "Am o firmă",
  rural: "Agricultură și rural",
  proprietate: "Am o proprietate",
};

export interface Sursa {
  nume: string;
  tip: Tip;
  profil: Profil[];
  pentruCine: string;
  ceFinanteaza: string;
  cumAjutam: string;
}

export const surse: Sursa[] = [
  {
    nume: "Programul Regional Nord-Vest 2021–2027",
    tip: "nerambursabil",
    profil: ["firma"],
    pentruCine: "IMM-uri din Bihor, Bistrița-Năsăud, Cluj, Maramureș, Satu Mare și Sălaj.",
    ceFinanteaza: "Investiții productive: echipamente, extinderea spațiului, digitalizare.",
    cumAjutam: "Calculăm punctajul înainte de depunere și scriem cererea pe grila apelului.",
  },
  {
    nume: "Start-Up Nation",
    tip: "nerambursabil",
    profil: ["idee"],
    pentruCine: "Antreprenori la început, cu firmă nou înființată.",
    ceFinanteaza: "Pornirea afacerii: echipamente, amenajarea spațiului, primele cheltuieli.",
    cumAjutam: "Alegem codul CAEN și forma firmei după ghid, apoi facem planul de afaceri.",
  },
  {
    nume: "Planul Strategic PAC 2023–2027 (AFIR)",
    tip: "nerambursabil",
    profil: ["rural", "idee", "firma"],
    pentruCine: "Fermieri, tineri fermieri și firme din mediul rural.",
    ceFinanteaza: "Ferme, procesare, agroturism și activități non-agricole la sat.",
    cumAjutam: "Verificăm terenul și exploatația, apoi pregătim studiul și cererea de finanțare.",
  },
  {
    nume: "Fondul pentru Modernizare",
    tip: "nerambursabil",
    profil: ["firma", "rural"],
    pentruCine: "Firme care vor să își producă singure energia.",
    ceFinanteaza: "Panouri fotovoltaice și stocare pentru autoconsum.",
    cumAjutam: "Dimensionăm sistemul cu un proiectant partener și pregătim documentația.",
  },
  {
    nume: "Credit cu garanție de stat (FNGCIMM)",
    tip: "credit",
    profil: ["firma", "idee"],
    pentruCine: "IMM-uri care au nevoie de credit, dar nu au garanții suficiente.",
    ceFinanteaza: "Investiții și capital de lucru, cu o parte din credit garantată de stat.",
    cumAjutam: "Construim dosarul de credit și îl prezentăm la mai multe bănci.",
  },
  {
    nume: "Credit bancar de investiții",
    tip: "credit",
    profil: ["firma", "proprietate"],
    pentruCine: "Firme cu activitate și bilanțuri depuse.",
    ceFinanteaza: "Construcții, utilaje, achiziția unei afaceri sau a unui spațiu.",
    cumAjutam: "Punem proprietatea ta ca garanție acolo unde are sens și negociem dobânda.",
  },
  {
    nume: "Leasing financiar",
    tip: "credit",
    profil: ["firma", "idee", "rural"],
    pentruCine: "Firme care cumpără utilaje, vehicule sau echipamente.",
    ceFinanteaza: "Bunul rămâne garanția, deci avansul și actele cerute sunt mai puține.",
    cumAjutam: "Comparăm ofertele și combinăm leasingul cu un grant, unde programul permite.",
  },
  {
    nume: "Investitori privați și business angels",
    tip: "investitori",
    profil: ["idee", "firma"],
    pentruCine: "Idei cu potențial mare de creștere, care au nevoie de mai mult decât bani.",
    ceFinanteaza: "Capital în schimbul unei participații în firmă, plus experiența investitorului.",
    cumAjutam: "Facem planul financiar, prezentarea și te însoțim la negociere.",
  },
  {
    nume: "Asociere cu un dezvoltator imobiliar",
    tip: "valorificare",
    profil: ["proprietate"],
    pentruCine: "Proprietari de terenuri intravilane, mai ales în zona metropolitană Cluj.",
    ceFinanteaza: "Terenul intră în proiect, iar tu primești apartamente, spații sau o parte din vânzări.",
    cumAjutam: "Căutăm dezvoltatorul, verificăm cât de solid este și negociem procentul.",
  },
  {
    nume: "Închiriere pe termen lung",
    tip: "valorificare",
    profil: ["proprietate", "firma"],
    pentruCine: "Hale, spații comerciale și clădiri care stau goale.",
    ceFinanteaza: "Un venit lunar stabil, de la un chiriaș din logistică, producție sau retail.",
    cumAjutam: "Găsim chiriașul, verificăm situația lui financiară și scriem contractul cu avocatul.",
  },
  {
    nume: "Vânzare cu dosar complet",
    tip: "valorificare",
    profil: ["proprietate"],
    pentruCine: "Terenuri, clădiri și utilaje pe care nu le mai folosești.",
    ceFinanteaza: "Un preț corect, obținut mai repede, pentru că actele sunt deja la zi.",
    cumAjutam: "Evaluare, acte, dosar de prezentare și cumpărători căutați activ, nu doar un anunț.",
  },
  {
    nume: "Proprietatea ca aport sau garanție",
    tip: "valorificare",
    profil: ["proprietate", "idee"],
    pentruCine: "Proprietari care vor să pornească sau să extindă o afacere.",
    ceFinanteaza: "Terenul sau clădirea ține loc de bani: aport la capitalul firmei sau garanție la credit.",
    cumAjutam: "Legăm cele două părți: valorificăm proprietatea și finanțăm ideea cu ea.",
  },
];
