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
    id: "villa-contemporaine-anfa-casablanca",
    title: "Villa contemporaine",
    location: "Anfa, Casablanca",
    price: "À partir de 4 800 000 MAD",
    tag: "Premium",
    detail: "Piscine, jardin paysager, suites lumineuses",
    category: "Villa",
    surface: "520 m²",
    rooms: "5 suites",
  },
  {
    id: "appartement-premium-casablanca",
    title: "Appartement premium",
    location: "Casablanca",
    price: "À partir de 2 150 000 MAD",
    tag: "Nouveau",
    detail: "Adresse centrale, finitions haut de gamme",
    category: "Appartement",
    surface: "168 m²",
    rooms: "3 chambres",
  },
  {
    id: "terrain-residentiel-californie-casablanca",
    title: "Terrain résidentiel",
    location: "Californie, Casablanca",
    price: "Sur demande",
    tag: "Rare",
    detail: "Zone calme, potentiel architectural fort",
    category: "Terrain",
    surface: "900 m²",
    rooms: "Constructible",
  },
  {
    id: "penthouse-anfa-casablanca",
    title: "Penthouse avec terrasse",
    location: "Anfa, Casablanca",
    price: "À partir de 6 300 000 MAD",
    tag: "Vue dégagée",
    detail: "Terrasse panoramique, double séjour, prestations premium",
    category: "Penthouse",
    surface: "310 m²",
    rooms: "4 chambres",
  },
  {
    id: "maison-de-ville-gauthier-casablanca",
    title: "Maison de ville rénovée",
    location: "Gauthier, Casablanca",
    price: "À partir de 3 900 000 MAD",
    tag: "Charme",
    detail: "Patio lumineux, cachet préservé, confort moderne",
    category: "Maison",
    surface: "260 m²",
    rooms: "6 suites",
  },
  {
    id: "villa-front-golf-bouskoura-casablanca",
    title: "Villa front golf",
    location: "Bouskoura, Casablanca",
    price: "À partir de 7 200 000 MAD",
    tag: "Exclusif",
    detail: "Volumes généreux, jardin privé, accès direct golf",
    category: "Villa",
    surface: "640 m²",
    rooms: "5 chambres",
  },
];

export const featuredProperties = properties.slice(0, 3);
