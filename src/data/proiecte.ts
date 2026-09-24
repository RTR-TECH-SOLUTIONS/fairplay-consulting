// TODO(real): proiecte exemplu, scrise de noi ca să arate formatul.
// Se înlocuiesc cu proiectele reale ale clientului (cu acordul beneficiarilor
// sau anonimizate, ca aici).

export type Traseu = "finantare" | "valorificare";

export interface Proiect {
  titlu: string;
  localitate: string;
  traseu: Traseu;
  sursa: string;
  rezultat: string;
  an: number;
  stadiu: string;
  imagine?: string;
  poveste?: string;
}

export const proiecte: Proiect[] = [
  {
    titlu: "Pensiune agroturistică cu 8 camere",
    localitate: "Mărișel, jud. Cluj",
    traseu: "finantare",
    sursa: "PS PAC 2023–2027 (AFIR)",
    rezultat: "198.000 € nerambursabil",
    an: 2024,
    stadiu: "Finalizat",
    imagine: "/images/sat-transilvania.webp",
    poveste:
      "Proprietarii aveau casa bătrânească și terenul, dar nu știau dacă se califică. Am mutat sediul firmei în comună, am refăcut bugetul pe grila AFIR și dosarul a trecut din prima sesiune.",
  },
  {
    titlu: "Teren intravilan de 4.200 mp",
    localitate: "Florești, jud. Cluj",
    traseu: "valorificare",
    sursa: "Asociere cu dezvoltator",
    rezultat: "7 apartamente din 26, către proprietar",
    an: 2025,
    stadiu: "În construcție",
    imagine: "/images/macheta.webp",
    poveste:
      "Oferta de vânzare era de 90 €/mp. Am clarificat PUZ-ul, am adus trei dezvoltatori la masă și am negociat un schimb în apartamente care valorează aproape dublu.",
  },
  {
    titlu: "Atelier de mobilier la comandă",
    localitate: "Gilău, jud. Cluj",
    traseu: "finantare",
    sursa: "Programul Regional Nord-Vest",
    rezultat: "412.000 € pentru utilaje CNC",
    an: 2025,
    stadiu: "În implementare",
  },
  {
    titlu: "Hală industrială de 1.800 mp",
    localitate: "Turda, jud. Cluj",
    traseu: "valorificare",
    sursa: "Închiriere pe 10 ani",
    rezultat: "Chiriaș din logistică, 4,2 €/mp",
    an: 2025,
    stadiu: "Închiriat",
  },
  {
    titlu: "Clinică stomatologică, echipamente",
    localitate: "Cluj-Napoca",
    traseu: "finantare",
    sursa: "Credit cu garanție FNGCIMM",
    rezultat: "260.000 €, garantat 60%",
    an: 2024,
    stadiu: "Finalizat",
  },
  {
    titlu: "Casă veche cu teren de 2.600 mp",
    localitate: "Sâncraiu, jud. Cluj",
    traseu: "valorificare",
    sursa: "Vânzare cu dosar complet",
    rezultat: "Succesiune clarificată, vândut în 5 luni",
    an: 2023,
    stadiu: "Vândut",
  },
  {
    titlu: "Aplicație de programări pentru saloane",
    localitate: "Cluj-Napoca",
    traseu: "finantare",
    sursa: "Business angel",
    rezultat: "150.000 € pentru 20% din firmă",
    an: 2025,
    stadiu: "Finalizat",
  },
  {
    titlu: "Utilaje de construcții nefolosite",
    localitate: "Baciu, jud. Cluj",
    traseu: "valorificare",
    sursa: "Vânzare cu evaluare ANEVAR",
    rezultat: "11 utilaje, 3 cumpărători",
    an: 2024,
    stadiu: "Vândut",
  },
];
