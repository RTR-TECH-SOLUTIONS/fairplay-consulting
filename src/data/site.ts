// BASE_URL este "/" pe un domeniu propriu și "/nume-repo/" când site-ul stă
// într-un subdirector (cazul GitHub Pages). u() lipește prefixul pe linkurile
// și imaginile interne, ca aceleași fișiere să meargă în ambele situații.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const u = (cale: string) => `${base}${cale}`;

// TODO(real): adresa, e-mailul, programul și cifrele sunt placeholder pentru demo.
// Telefonul este numărul de pe care ne-a scris clientul.
export const site = {
  nume: "Fairplay",
  numeComplet: "Fairplay Business Consulting SRL",
  descriere: "Business Consulting",
  oras: "Florești",
  judet: "Cluj",
  adresa: "Str. Avram Iancu, Florești, jud. Cluj",
  telefon: "+40 741 051 752",
  telefonAfisat: "0741 051 752",
  whatsapp: "40741051752",
  email: "office@fairplayconsulting.ro",
  program: [
    { zi: "Luni – Vineri", ore: "09:00 – 17:30" },
    { zi: "Sâmbătă", ore: "cu programare" },
  ],
  anInfiintare: 2010,
  // TODO(real): cifre de confirmat cu clientul înainte de publicare.
  dosareDepuse: "140+",
  valoareAtrasa: "38 mil. €",
  // centrul localității Florești, pentru harta de pe prima pagină
  harta: { lat: 46.7456, lon: 23.4917 },
};

export const telLink = `tel:${site.telefon.replace(/\s/g, "")}`;

export const waLink = (mesaj: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mesaj)}`;

export const nav = [
  { href: u("/"), label: "Acasă" },
  { href: u("/servicii"), label: "Servicii" },
  { href: u("/surse-de-finantare"), label: "Surse de finanțare" },
  { href: u("/proiecte"), label: "Proiecte" },
  { href: u("/#contact"), label: "Contact" },
];

export const dialogHref = u("/dialog");
