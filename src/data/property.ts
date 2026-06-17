export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  tag: string;
  detail: string;
  category: string;
  surface: string;
  rooms: string;
};

export const properties: Property[] = [
  {
    id: "villa-meublee-anfa-casablanca",
    title: "Villa meublée avec jardin",
    location: "Anfa, Casablanca",
    price: "48 000 MAD / mois",
    tag: "Disponible",
    detail: "Piscine, jardin paysager, suites lumineuses, contrat longue durée",
    category: "Villa",
    surface: "520 m²",
    rooms: "5 suites",
  },
  {
    id: "appartement-premium-racine-casablanca",
    title: "Appartement premium meublé",
    location: "Racine, Casablanca",
    price: "18 500 MAD / mois",
    tag: "Nouveau",
    detail: "Adresse centrale, balcon, finitions haut de gamme, parking titré",
    category: "Appartement",
    surface: "168 m²",
    rooms: "3 chambres",
  },
  {
    id: "studio-cfc-casablanca",
    title: "Studio haut standing",
    location: "Casablanca Finance City",
    price: "8 500 MAD / mois",
    tag: "Prêt à louer",
    detail: "Résidence sécurisée, cuisine équipée, idéal cadre ou expatrié",
    category: "Studio",
    surface: "58 m²",
    rooms: "1 pièce",
  },
  {
    id: "penthouse-location-anfa-casablanca",
    title: "Penthouse avec terrasse",
    location: "Anfa, Casablanca",
    price: "36 000 MAD / mois",
    tag: "Vue dégagée",
    detail: "Terrasse panoramique, double séjour, prestations premium, ascenseur",
    category: "Penthouse",
    surface: "310 m²",
    rooms: "4 chambres",
  },
  {
    id: "duplex-gauthier-casablanca",
    title: "Duplex rénové",
    location: "Gauthier, Casablanca",
    price: "24 000 MAD / mois",
    tag: "Visite rapide",
    detail: "Patio lumineux, cachet préservé, confort moderne, proche écoles",
    category: "Duplex",
    surface: "260 m²",
    rooms: "4 chambres",
  },
  {
    id: "villa-front-golf-bouskoura",
    title: "Villa front golf",
    location: "Bouskoura",
    price: "62 000 MAD / mois",
    tag: "Exclusif",
    detail: "Volumes généreux, jardin privé, accès direct golf, sécurité 24/7",
    category: "Villa",
    surface: "640 m²",
    rooms: "5 chambres",
  },
];

export const featuredProperties = properties.slice(0, 3);
