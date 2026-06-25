export type PropertyImage = {
  src: string;
  alt: string;
};

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
  images: [PropertyImage, ...PropertyImage[]];
};

const propertyImagePath = (propertyId: string, fileName: string) =>
  `/images/properties/${propertyId}/${fileName}`;

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
    images: [
      {
        src: propertyImagePath("villa-meublee-anfa-casablanca", "cover.svg"),
        alt: "Villa meublée avec jardin à Anfa, Casablanca",
      },
    ],
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
    images: [
      {
        src: propertyImagePath(
          "appartement-premium-racine-casablanca",
          "cover.svg",
        ),
        alt: "Appartement premium meublé à Racine, Casablanca",
      },
    ],
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
    images: [
      {
        src: propertyImagePath("studio-cfc-casablanca", "cover.svg"),
        alt: "Studio haut standing à Casablanca Finance City",
      },
    ],
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
    images: [
      {
        src: propertyImagePath("penthouse-location-anfa-casablanca", "cover.svg"),
        alt: "Penthouse avec terrasse à Anfa, Casablanca",
      },
    ],
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
    images: [
      {
        src: propertyImagePath("duplex-gauthier-casablanca", "cover.svg"),
        alt: "Duplex rénové à Gauthier, Casablanca",
      },
    ],
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
    images: [
      {
        src: propertyImagePath("villa-front-golf-bouskoura", "cover.svg"),
        alt: "Villa front golf à Bouskoura",
      },
    ],
  },
];

export const featuredProperties = properties.slice(0, 3);
