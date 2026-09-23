# [Prénom] × Maths — Site vitrine

Site vitrine bilingue (français / arabe) pour des cours particuliers de
mathématiques, niveau 1AS. React + TypeScript + Tailwind CSS + Framer Motion.

## Installation

Prérequis : [Node.js](https://nodejs.org) version 18 ou plus.

```bash
cd prof-maths-site
npm install
```

## Lancer le site en développement

```bash
npm run dev
```

Puis ouvrir l'adresse affichée dans le terminal (en général `http://localhost:5173`).

## Générer la version finale (production)

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`. Ce dossier peut être déposé
tel quel sur n'importe quel hébergement (Hostinger, Netlify, Vercel, etc.).

Pour prévisualiser cette version finale localement :

```bash
npm run preview
```

## Où modifier le contenu

**Toutes les informations affichables (texte, placeholders, coordonnées)
se trouvent dans un seul fichier :**

```
src/data/content.ts
```

- `teacherInfo` en haut du fichier : prénom, ville, téléphone, WhatsApp,
  Instagram, tarif, horaires, photo. Chaque valeur entre crochets
  (`[PRÉNOM DE LA PROFESSEURE]`, `[NUMÉRO DE TÉLÉPHONE]`, etc.) est un
  placeholder à remplacer par les vraies informations.
- `content.fr` et `content.ar` : tous les textes du site, dans les deux
  langues. La structure est identique des deux côtés — chaque section du
  site (hero, méthode, exercices, témoignages, etc.) a son bloc.
- Les chapitres d'exercices (`exercises.categories`), les témoignages
  (`testimonials.items`) et les étapes de méthode sont des tableaux :
  ajouter, retirer ou réécrire une entrée suffit à mettre à jour le site.

Aucune information personnelle n'a été inventée : tout ce qui n'était pas
fourni dans la demande initiale est un placeholder explicite, à remplacer
avant la mise en ligne.

## Où se trouve chaque section

```
src/components/
├── Navbar.tsx           navigation, devient "glass" au scroll
├── Hero.tsx              section d'introduction immersive
├── Teacher.tsx           "Qui est votre professeure ?"
├── Method.tsx            "Sa méthode" — parcours en 4 étapes
├── CourseProcess.tsx     "Comment se déroule un cours ?" — 5 étapes
├── Exercises.tsx         cartes de chapitres, effet de profondeur au survol
├── ExerciseDemo.tsx      démonstration d'un espace d'exercices (modal)
├── WhyMethod.tsx         grande phrase centrale
├── Goals.tsx             "Les objectifs"
├── ParentSection.tsx     "Pour les parents"
├── Testimonials.tsx      témoignages
├── Contact.tsx           section de contact finale
├── Footer.tsx            pied de page
└── scene/
    ├── FloatingSymbols.tsx   symboles mathématiques flottants (profondeur 3D, parallaxe souris)
    └── TeacherPresence.tsx   scène 3D abstraite (cercles, orbite d'objets) représentant la présence de la professeure
```

### À propos de la scène 3D

Aucun modèle 3D réaliste de personnage n'a pu être généré automatiquement.
Comme prévu dans la demande initiale, une **alternative abstraite** a été
créée à la place : une scène en profondeur (`TeacherPresence.tsx`) avec des
cercles concentriques et des objets qui orbitent (cahier, calculatrice,
graphique), avec un effet de profondeur CSS 3D réel (`perspective` /
`preserve-3d`) et une légère rotation liée au scroll.

Si un vrai personnage 3D (modèle Spline, Lottie, ou rendu par un
illustrateur) est réalisé plus tard, il suffit de remplacer le contenu de
`TeacherPresence.tsx` par le nouveau composant — le reste du site (Hero,
Contact) l'utilise déjà comme un bloc autonome.

## Langue et sens de lecture (RTL)

Le bouton "FR / AR" dans la navigation bascule toute l'interface. En arabe,
la page passe automatiquement en `dir="rtl"` et en police Cairo. Le contenu
arabe est un point de départ éditorial — à relire par une personne
arabophone avant mise en ligne.

## Performance & accessibilité

- Les animations respectent `prefers-reduced-motion` (désactivées si
  l'utilisateur le demande dans son système).
- Les scènes 3D sont en CSS pur (pas de modèle 3D lourd à charger), donc
  légères sur mobile.
- Contraste et focus clavier visibles ont été pris en compte dans les
  couleurs de base.

## Structure technique

```
src/
├── components/       composants de chaque section
├── context/           LanguageContext.tsx — gestion FR/AR
├── data/               content.ts — TOUT le contenu éditable
├── App.tsx             assemble les sections dans l'ordre du storytelling
└── main.tsx             point d'entrée
```
