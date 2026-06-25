## Ajouter des biens et leurs images

Pour un guide complet sur la modification des contenus du site, consulte `GUIDE_EDITION.md`.

Les données des biens se trouvent dans `src/data/property.ts`. Chaque bien possède un `id` unique, et ses images doivent être placées dans un dossier qui porte le même nom sous `public/images/properties`.

Format de chemin à utiliser :

```txt
public/images/properties/{property-id}/{image-file}
```

Exemple :

```txt
public/images/properties/villa-meublee-anfa-casablanca/cover.jpg
public/images/properties/villa-meublee-anfa-casablanca/salon.jpg
public/images/properties/villa-meublee-anfa-casablanca/terrasse.jpg
```

Dans le navigateur et dans `property.ts`, ces mêmes fichiers sont référencés sans `public` :

```ts
images: [
  {
    src: "/images/properties/villa-meublee-anfa-casablanca/cover.jpg",
    alt: "Villa meublée avec jardin à Anfa, Casablanca",
  },
  {
    src: "/images/properties/villa-meublee-anfa-casablanca/salon.jpg",
    alt: "Salon de la villa meublée à Anfa",
  },
]
```

La première image du tableau `images` est utilisée comme image principale sur la carte du bien. Chaque bien doit avoir au moins une image, mais peut en avoir plusieurs. Utilise des noms de fichiers en minuscules, descriptifs et séparés par des tirets, par exemple `cover.jpg`, `salon-principal.jpg` ou `chambre-suite.jpg`.

Pour ajouter un nouveau bien :

1. Choisis un `id` unique pour le bien, par exemple `riad-moderne-marrakech-hivernage`.
2. Crée le dossier `public/images/properties/riad-moderne-marrakech-hivernage`.
3. Ajoute les fichiers image dans ce dossier.
4. Ajoute un nouvel objet dans le tableau `properties` de `src/data/property.ts`.
5. Renseigne le tableau `images` avec au moins une image.
6. Lance `npm run dev` et ouvre le catalogue pour vérifier l'image principale et le nombre de photos affiché.

Exemple de nouveau bien :

```ts
{
  id: "riad-moderne-marrakech-hivernage",
  title: "Riad moderne avec patio",
  location: "Hivernage, Marrakech",
  price: "32 000 MAD / mois",
  tag: "Nouveau",
  detail: "Patio lumineux, piscine intérieure, finitions premium",
  category: "Riad",
  surface: "280 m²",
  rooms: "4 chambres",
  images: [
    {
      src: "/images/properties/riad-moderne-marrakech-hivernage/cover.jpg",
      alt: "Riad moderne avec patio à Hivernage, Marrakech",
    },
    {
      src: "/images/properties/riad-moderne-marrakech-hivernage/patio.jpg",
      alt: "Patio du riad moderne à Hivernage",
    },
  ],
}
```

## Démarrage

Pour lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur pour voir le site.

Tu peux commencer à modifier le site depuis les fichiers dans `src/app` et `src/components`. La page se met à jour automatiquement pendant le développement.

Ce projet utilise Next.js, React et Tailwind CSS.

## Ressources utiles

Pour en savoir plus sur Next.js :

- [Documentation Next.js](https://nextjs.org/docs)
- [Tutoriel interactif Next.js](https://nextjs.org/learn)

## Déploiement

Le déploiement peut se faire sur Vercel ou sur tout hébergeur compatible Next.js.

Consulte la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.
