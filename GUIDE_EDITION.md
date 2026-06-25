# Guide d'édition du site LIONIN

Ce guide explique où modifier les contenus du site : biens, images, textes de pages, contact, navigation, footer et options de formulaire.

## Avant de modifier

Travaille principalement dans ces dossiers :

```txt
src/data
src/app
src/components
public/images
```

Après chaque modification, lance le site en local :

```bash
npm run dev
```

Puis ouvre :

```txt
http://localhost:3000
```

Pour vérifier que le site compile correctement :

```bash
npm run lint
npm run build
```

## Modifier les biens immobiliers

Fichier à modifier :

```txt
src/data/property.ts
```

Chaque bien est un objet dans le tableau `properties`.

Structure d'un bien :

```ts
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
      src: "/images/properties/villa-meublee-anfa-casablanca/cover.jpg",
      alt: "Villa meublée avec jardin à Anfa, Casablanca",
    },
  ],
}
```

Champs importants :

- `id` : identifiant unique du bien. Il doit rester stable et sans espaces.
- `title` : titre affiché sur la carte du bien.
- `location` : ville ou secteur.
- `price` : prix affiché.
- `tag` : badge en haut de l'image, par exemple `Disponible`, `Nouveau`, `Exclusif`.
- `detail` : courte description.
- `category` : type de bien, par exemple `Villa`, `Appartement`, `Studio`.
- `surface` : surface affichée.
- `rooms` : nombre de pièces ou chambres.
- `images` : liste des images du bien.

La page catalogue et la page d'accueil utilisent automatiquement les données de `properties`.

## Ajouter les images d'un bien

Les images doivent être placées dans :

```txt
public/images/properties/{id-du-bien}
```

Exemple :

```txt
public/images/properties/villa-meublee-anfa-casablanca/cover.jpg
public/images/properties/villa-meublee-anfa-casablanca/salon.jpg
public/images/properties/villa-meublee-anfa-casablanca/chambre-principale.jpg
```

Dans `src/data/property.ts`, le chemin commence par `/images`, sans `public` :

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

La première image du tableau `images` devient l'image principale de la carte. Les autres images sont prêtes pour une future galerie ou une page détail.

Bonnes pratiques :

- Utiliser des images `.jpg`, `.png` ou `.webp`.
- Nommer les fichiers en minuscules.
- Remplacer les espaces par des tirets.
- Garder des noms descriptifs : `cover.jpg`, `salon.jpg`, `terrasse.jpg`, `suite-parentale.jpg`.
- Renseigner un `alt` clair pour chaque image.

## Ajouter un nouveau bien

Étapes :

1. Choisir un `id` unique, par exemple `appartement-maarif-casablanca`.
2. Créer le dossier `public/images/properties/appartement-maarif-casablanca`.
3. Ajouter les images dans ce dossier.
4. Ouvrir `src/data/property.ts`.
5. Copier un bien existant dans le tableau `properties`.
6. Modifier tous les champs.
7. Mettre à jour le tableau `images`.
8. Lancer `npm run dev`.
9. Vérifier la page `/catalogue`.

Exemple complet :

```ts
{
  id: "appartement-maarif-casablanca",
  title: "Appartement lumineux avec balcon",
  location: "Maârif, Casablanca",
  price: "14 000 MAD / mois",
  tag: "Nouveau",
  detail: "Balcon, résidence sécurisée, cuisine équipée, proche commerces",
  category: "Appartement",
  surface: "120 m²",
  rooms: "3 chambres",
  images: [
    {
      src: "/images/properties/appartement-maarif-casablanca/cover.jpg",
      alt: "Appartement lumineux avec balcon à Maârif, Casablanca",
    },
    {
      src: "/images/properties/appartement-maarif-casablanca/salon.jpg",
      alt: "Salon de l'appartement à Maârif",
    },
  ],
}
```

## Modifier la page d'accueil

Fichiers principaux :

```txt
src/app/page.tsx
src/data/home.ts
```

Dans `src/app/page.tsx`, modifier :

- le grand titre de la page d'accueil ;
- le texte d'introduction ;
- les textes des boutons ;
- les titres et descriptions de sections ;
- l'image principale `src="/images/lionin-hero-villa.png"`.

Dans `src/data/home.ts`, modifier :

- `heroStats` : chiffres affichés dans le hero et la page À propos ;
- `trustPoints` : standards affichés sur plusieurs sections ;
- `homeServices` : services de la page d'accueil ;
- `processSteps` : étapes de la méthode ;
- `marketHighlights` : blocs opportunités ;
- `testimonials` : témoignages ;
- `finalCta` : contenu prévu pour un appel à l'action.

## Modifier le catalogue

Fichier :

```txt
src/app/catalogue/page.tsx
```

Modifier ici :

- le titre de la page catalogue ;
- la description sous le titre ;
- les filtres rapides dans `quickFilters` ;
- le titre et la description de la section `Tous les biens à louer` ;
- le bloc d'appel à l'action en bas de page.

Les cartes de biens viennent de `src/data/property.ts`.

## Modifier la page contact

Fichier :

```txt
src/app/contact/page.tsx
```

Modifier ici :

- `contactDetails` : téléphone, email, adresse et notes ;
- `requestTypes` : choix du champ `Sujet` ;
- le titre `Parlons de votre recherche locative.` ;
- le paragraphe d'introduction ;
- le texte du bloc `Confidentialité` ;
- les labels et placeholders du formulaire ;
- le texte du bouton `Envoyer le message`.

Important : le formulaire n'envoie pas encore les données. Le texte actuel indique que la logique d'envoi n'est pas connectée.

Si tu changes le téléphone ou l'email dans la page contact, pense aussi à modifier le footer.

## Modifier le footer

Fichiers :

```txt
src/components/footer/Footer.tsx
src/data/footer.ts
```

Dans `src/data/footer.ts`, modifier la liste des services affichés dans le footer.

Dans `src/components/footer/Footer.tsx`, modifier :

- le texte de présentation de LIONIN ;
- l'adresse ;
- le téléphone ;
- l'email ;
- le copyright ;
- les liens rapides en bas du footer.

Pour le téléphone, modifier les deux valeurs :

```tsx
<a href="tel:+212600000000">
  +212 6 00 00 00 00
</a>
```

`href` doit rester au format téléphone sans espaces.

## Modifier la navigation

Fichier :

```txt
src/data/navigation.ts
```

Chaque lien ressemble à ceci :

```ts
{ href: "/catalogue", label: "Catalogue" }
```

Modifier `label` pour changer le texte affiché. Modifier `href` seulement si la route existe dans `src/app`.

La navigation est utilisée dans :

- la barre du haut ;
- le footer.

## Modifier le logo

Fichiers image :

```txt
public/images/logo-lionin.jpg
```

Composants qui l'affichent :

```txt
src/components/navbar/Navbar.tsx
src/components/footer/Footer.tsx
```

Pour changer le logo, remplace le fichier `public/images/logo-lionin.jpg` par une nouvelle image avec le même nom, ou modifie le chemin `src` dans les composants.

## Modifier les pages À propos et Réservation

Page À propos :

```txt
src/app/a-propos/page.tsx
```

Modifier ici :

- le titre ;
- l'introduction ;
- les valeurs dans `values` ;
- les engagements dans `commitments` ;
- le bloc final `ContactCTA`.

La page utilise aussi des données de `src/data/home.ts` comme `heroStats`, `processSteps` et `trustPoints`.

Page Réservation :

```txt
src/app/reservation/page.tsx
```

Modifier ici :

- `visitTypes` : types de rendez-vous ;
- `timeSlots` : créneaux disponibles ;
- le titre et l'introduction ;
- le texte de préparation ;
- les labels et placeholders du formulaire ;
- le texte du bouton.

La liste des biens dans le formulaire vient automatiquement de `src/data/property.ts`.

## Modifier les couleurs et styles globaux

Fichiers :

```txt
src/styles/variable.css
src/app/globals.css
```

Dans `src/styles/variable.css`, modifier les variables principales :

```css
--black: #080806;
--gold: #d8ad45;
--gold-light: #f2d37a;
--text-primary: #fffaf0;
--text-secondary: #c9c0ad;
```

Attention : changer ces couleurs affecte tout le site.

## Modifier les boutons et appels à l'action

Bouton générique :

```txt
src/components/ui/Button.tsx
```

Bloc d'appel à l'action réutilisable :

```txt
src/components/cta/ContactCTA.tsx
```

Dans les pages, les appels à l'action ressemblent souvent à ceci :

```tsx
<ContactCTA
  eyebrow="Démarrer"
  title="Vous cherchez à louer ou vous avez un bien à confier ?"
  description="LIONIN peut vous aider à clarifier les critères."
  primaryLabel="Demander une visite"
  primaryHref="/reservation"
  secondaryLabel="Nous contacter"
  secondaryHref="/contact"
/>
```

Modifier les textes ou les liens directement dans la page qui utilise ce bloc.

## Checklist avant publication

Avant de publier :

1. Vérifier toutes les pages principales : `/`, `/catalogue`, `/contact`, `/reservation`, `/a-propos`.
2. Vérifier que chaque bien a au moins une image.
3. Vérifier que les chemins d'images commencent par `/images/...`.
4. Vérifier que le téléphone et l'email sont cohérents entre contact et footer.
5. Lancer `npm run lint`.
6. Lancer `npm run build`.
7. Corriger les erreurs éventuelles.

## Problèmes fréquents

Image qui ne s'affiche pas :

- vérifier que le fichier existe dans `public/images/...` ;
- vérifier que le chemin dans le code ne contient pas `public` ;
- vérifier l'extension exacte : `.jpg`, `.png`, `.webp` ou `.svg` ;
- respecter les majuscules et minuscules.

Un bien n'apparaît pas :

- vérifier qu'il est bien dans le tableau `properties` ;
- vérifier qu'il y a une virgule après l'objet précédent ;
- vérifier que le champ `images` contient au moins une image ;
- lancer `npm run lint` pour repérer l'erreur.

Un lien de navigation ne marche pas :

- vérifier que `href` correspond à un dossier dans `src/app` ;
- exemple : `href: "/contact"` correspond à `src/app/contact/page.tsx`.

Le formulaire ne transmet rien :

- c'est normal pour l'instant ;
- les formulaires sont visuels et prêts pour une future logique d'envoi.
