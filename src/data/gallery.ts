// Données de la galerie ALGUEYE Dakar
// Toutes les images sont stockées dans /public/images/algueye/

export type Category = "Habits d'événements" | "Défilé de mode" | "Homme" | "Femme" | "Mariage";

export interface GalleryItem {
  id: string;
  title: string;
  category: Category;
  image: string;
  hoverImage?: string; // Image affichée au survol (optionnelle)
  description: string;
  // Détails additionnels affichés sur la page produit
  details?: {
    matiere?: string;
    coupe?: string;
    occasion?: string;
    coloris?: string;
    soin?: string;
  };
}

export const categories: Category[] = [
  "Habits d'événements",
  "Défilé de mode",
  "Homme",
  "Femme",
  "Mariage",
];

// HOMME — 5 pièces
const hommeItems: GalleryItem[] = [
  {
    id: "h-01",
    title: "Ensemble Rouge Brique",
    category: "Homme",
    image: "/images/algueye/homme/h-01-rouge-brique.jpg",
    description: "T-shirt zippé et pantalon ample en maille texturée. Look moderne masculin.",
  },
  {
    id: "h-02",
    title: "Silhouette Bleu Marine",
    category: "Homme",
    image: "/images/algueye/homme/h-02-bleu-marine.jpg",
    description: "Coupe épurée et tomber impeccable. L'élégance discrète au quotidien.",
  },
  {
    id: "h-03",
    title: "Tank Lurex & Pantalon Large",
    category: "Homme",
    image: "/images/algueye/homme/h-03-tank-lurex.jpg",
    description: "Maille scintillante et veste à motifs portée à la main. Audace contemporaine.",
  },
  {
    id: "h-04",
    title: "Kimono Encre & Or",
    category: "Homme",
    image: "/images/algueye/homme/h-04-kimono-encre.jpg",
    description: "Volumes amples et soie sombre traversée d'éclats dorés. Pièce signature.",
  },
  {
    id: "h-05",
    title: "Veste Motifs Tradition",
    category: "Homme",
    image: "/images/algueye/homme/h-05-veste-motifs.jpg",
    description: "Veste structurée à motifs tissés multicolores. L'art textile sénégalais.",
  },
];

// FEMME — 20 pièces
const femmeItems: GalleryItem[] = [
  {
    id: "f-01",
    title: "Bleu Klein & Jupe Multicolore",
    category: "Femme",
    image: "/images/algueye/femme/f-01-bleu-jupe-multicolore.jpg",
    description: "Top cintré bleu vif et jupe crayon graphique. Contraste audacieux.",
  },
  {
    id: "f-02",
    title: "Robe Dorée à Manches Bouffantes",
    category: "Femme",
    image: "/images/algueye/femme/f-02-robe-doree-manches.jpg",
    description: "Lamé doré et manches sculpturales. Pour une présence rayonnante.",
  },
  {
    id: "f-03",
    title: "Robe Denim Longue",
    category: "Femme",
    image: "/images/algueye/femme/f-03-robe-denim-longue.jpg",
    description: "Denim brut et coupe princesse. L'élégance urbaine signée ALGUEYE.",
  },
  {
    id: "f-04",
    title: "Bleu Ciel Brodé Royal",
    category: "Femme",
    image: "/images/algueye/femme/f-04-bleu-ciel-brode.jpg",
    description: "Tailleur jupe brodé sur jacquard fleuri et tulle. Cérémonie raffinée.",
  },
  {
    id: "f-05",
    title: "Tunique Violet & Or",
    category: "Femme",
    image: "/images/algueye/femme/f-05-violet-or-tunique.jpg",
    description: "Tunique brillante violet/or, col haut et pochette verte assortie.",
  },
  {
    id: "f-06",
    title: "Cape Royale Cuivre",
    category: "Femme",
    image: "/images/algueye/femme/f-06-cape-violet-or.jpg",
    description: "Robe-manteau monumentale à patchwork géométrique. Allure souveraine.",
  },
  {
    id: "f-07",
    title: "Portrait Violet & Or",
    category: "Femme",
    image: "/images/algueye/femme/f-07-violet-or-portrait.jpg",
    description: "Col haut et empiècement contrasté. Détails couture exceptionnels.",
  },
  {
    id: "f-08",
    title: "Robe Longue Violet & Or",
    category: "Femme",
    image: "/images/algueye/femme/f-08-violet-or-longue.jpg",
    description: "Robe trapèze à découpes et accessoire doré. Modernité et raffinement.",
  },
  {
    id: "f-09",
    title: "Robe Courte Orange & Marron",
    category: "Femme",
    image: "/images/algueye/femme/f-09-orange-marron-courte.jpg",
    description: "Motifs en losanges et manches bouffantes. Esprit graphique africain.",
  },
  {
    id: "f-10",
    title: "Veste Or sur Bleu Nuit",
    category: "Femme",
    image: "/images/algueye/femme/f-10-veste-or-bleu.jpg",
    description: "Tissage or et bleu nuit, manches structurées. Pièce statement.",
  },
  {
    id: "f-11",
    title: "Or Liquide",
    category: "Femme",
    image: "/images/algueye/femme/f-11-robe-doree-tulle.jpg",
    description: "Robe monumentale en lamé doré et tulle scintillant. La pièce signature.",
  },
  {
    id: "f-12",
    title: "Sequin Noir & Fleurs",
    category: "Femme",
    image: "/images/algueye/femme/f-12-sequin-noir-fleurs.jpg",
    description: "Sequins noirs, perles et fleurs textiles. Couture haut niveau.",
  },
  {
    id: "f-13",
    title: "Robe Lettres Black & White",
    category: "Femme",
    image: "/images/algueye/femme/f-13-robe-lettres-noir.jpg",
    description: "Imprimé typographique noir et blanc, volumes amples. Moderne et joueuse.",
  },
  {
    id: "f-14",
    title: "Doré — Édition Portrait",
    category: "Femme",
    image: "/images/algueye/femme/f-14-doree-portrait.jpg",
    description: "Vue rapprochée sur la robe dorée. Tissu chatoyant et broche centrale.",
  },
  {
    id: "f-15",
    title: "Bleu Ciel — Variation Studio",
    category: "Femme",
    image: "/images/algueye/femme/f-15-bleu-ciel-broderies.jpg",
    description: "Variation studio de la tenue cérémonie bleu ciel. Broderies florales.",
  },
  {
    id: "f-16",
    title: "Veste Bronze Brodée",
    category: "Femme",
    image: "/images/algueye/femme/f-16-veste-bronze-broderies.jpg",
    description: "Col bijou en perles et fleurs textiles dorées. Détail d'orfèvre.",
  },
  {
    id: "f-17",
    title: "Violet & Orange — Rue de Dakar",
    category: "Femme",
    image: "/images/algueye/femme/f-17-violet-rue-dakar.jpg",
    description: "Tunique fendue violet/orange, escarpins verts. Photo street culte.",
  },
  {
    id: "f-18",
    title: "Dakar à Cœur Ouvert",
    category: "Femme",
    image: "/images/algueye/femme/f-18-taxi-jaune-violet.jpg",
    description: "Ensemble violet/or contre taxi jaune mythique. L'âme ALGUEYE.",
  },
  {
    id: "f-19",
    title: "Rouge Passion — Stop Dakar",
    category: "Femme",
    image: "/images/algueye/femme/f-19-rouge-stop-dakar.jpg",
    description: "Tailleur pantalon rouge et pochette graphique. Statement éclatant.",
  },
  {
    id: "f-20",
    title: "Cape Dentelle Bleu Nuit",
    category: "Femme",
    image: "/images/algueye/femme/f-20-cape-dentelle-bleu.jpg",
    description: "Boubou cape en dentelle bleu nuit sur soie. Hommage à la tradition.",
  },
];

// DÉFILÉ — 8 pièces
const defileItems: GalleryItem[] = [
  {
    id: "d-01",
    title: "Podium — Violet & Or",
    category: "Défilé de mode",
    image: "/images/algueye/defile/d-01-violet-or.jpg",
    description: "Sortie défilé : veste violet/or, jupe à motifs, pochette verte.",
  },
  {
    id: "d-02",
    title: "Podium — Tunique Cuivre",
    category: "Défilé de mode",
    image: "/images/algueye/defile/d-02-orange-cuivre.jpg",
    description: "Tunique courte cuivre métallique sur le runway. Brillance et coupe.",
  },
  {
    id: "d-03",
    title: "Show — Lettres Noir & Blanc",
    category: "Défilé de mode",
    image: "/images/algueye/defile/d-03-lettres-noir-blanc.jpg",
    description: "Robe imprimée typographique pendant le show extérieur ALGUEYE.",
  },
  {
    id: "d-04",
    title: "Show — Blazer Brodé",
    category: "Défilé de mode",
    image: "/images/algueye/defile/d-04-blazer-broderies.jpg",
    description: "Blazer à broderies bijou et jupe à franges multicolores.",
  },
  {
    id: "d-05",
    title: "Show — Homme Veste Fleurs",
    category: "Défilé de mode",
    image: "/images/algueye/defile/d-05-homme-veste-fleurs.jpg",
    description: "Veste imprimée florale et short à fleurs. Avant-garde masculine.",
  },
  {
    id: "d-06",
    title: "Show — Blazer Violet & Tulle",
    category: "Défilé de mode",
    image: "/images/algueye/defile/d-06-blazer-violet-tulle.jpg",
    description: "Blazer imprimé violet sur jupe tulle volumineuse. Esprit couture.",
  },
  {
    id: "d-07",
    title: "Show — Rose & Lavande",
    category: "Défilé de mode",
    image: "/images/algueye/defile/d-07-rose-lavande.jpg",
    description: "Manteau rose fuchsia et robe lavande à sequins en duo runway.",
  },
  {
    id: "d-08",
    title: "Show — Sequin & Perles",
    category: "Défilé de mode",
    image: "/images/algueye/defile/d-08-sequin-perles.jpg",
    description: "Robe sequin noire et collier de perles fleuri. Détail couture.",
  },
];

// HABITS D'ÉVÉNEMENTS — sélection mixte (hommes + femmes) tenues soirée/luxe
// On référence les mêmes images mais avec une catégorie différente
const habitsEvenementsItems: GalleryItem[] = [
  { ...femmeItems.find(i => i.id === "f-11")!, id: "e-01", category: "Habits d'événements" },
  { ...femmeItems.find(i => i.id === "f-04")!, id: "e-02", category: "Habits d'événements" },
  { ...femmeItems.find(i => i.id === "f-02")!, id: "e-03", category: "Habits d'événements" },
  { ...hommeItems.find(i => i.id === "h-04")!, id: "e-04", category: "Habits d'événements" },
  { ...femmeItems.find(i => i.id === "f-20")!, id: "e-05", category: "Habits d'événements" },
  { ...femmeItems.find(i => i.id === "f-12")!, id: "e-06", category: "Habits d'événements" },
  { ...hommeItems.find(i => i.id === "h-03")!, id: "e-07", category: "Habits d'événements" },
  { ...femmeItems.find(i => i.id === "f-08")!, id: "e-08", category: "Habits d'événements" },
  { ...femmeItems.find(i => i.id === "f-06")!, id: "e-09", category: "Habits d'événements" },
];

// MARIAGE — vide pour l'instant (à remplir plus tard quand le client fournira les images)
const mariageItems: GalleryItem[] = [];

// Export consolidé
export const galleryItems: GalleryItem[] = [
  ...habitsEvenementsItems,
  ...defileItems,
  ...hommeItems,
  ...femmeItems,
  ...mariageItems,
];

// Helper : retourne les items d'une catégorie
export const getItemsByCategory = (category: Category): GalleryItem[] => {
  return galleryItems.filter(item => item.category === category);
};

// Helper : retrouve un item par son id
export const getItemById = (id: string): GalleryItem | undefined => {
  // On cherche d'abord dans la galerie principale
  const fromGallery = galleryItems.find(item => item.id === id);
  if (fromGallery) return fromGallery;
  // Sinon on cherche dans la collection Naru Goor
  return naruGoorItems.find(item => item.id === id);
};

// ──────────────────────────────────────────────────────────────────────
// NARU GOOR — Sous-marque masculine d'ALGUEYE
// ──────────────────────────────────────────────────────────────────────
// "Naru Goor" en wolof évoque la virilité et l'élégance masculine.
// Cette ligne reprend les pièces homme d'ALGUEYE dans une narration
// dédiée, signée "by ALGUEYE".

export interface NaruGoorItem extends GalleryItem {
  // Hérite de GalleryItem mais sa "catégorie" reste "Homme"
  // car Naru Goor est une sous-marque, pas une catégorie de la galerie principale.
}

export const naruGoorItems: NaruGoorItem[] = [
  {
    id: "ng-01",
    title: "Terre de Feu",
    category: "Homme",
    image: "/images/algueye/homme/h-01-rouge-brique.jpg",
    description: "Ensemble en maille texturée rouge brique. Le chic urbain version Naru Goor : décontracté mais affirmé.",
    details: {
      matiere: "Maille technique texturée",
      coupe: "Ensemble t-shirt zippé + pantalon ample",
      occasion: "Streetwear chic, week-end",
      coloris: "Rouge brique",
      soin: "Lavage à 30°C, séchage à plat",
    },
  },
  {
    id: "ng-02",
    title: "Bleu Nuit Souverain",
    category: "Homme",
    image: "/images/algueye/homme/h-02-bleu-marine.jpg",
    description: "Silhouette épurée en bleu marine. La discrétion qui en dit long — pour l'homme qui n'a rien à prouver.",
    details: {
      matiere: "Maille fine",
      coupe: "T-shirt zippé + pantalon large",
      occasion: "Quotidien élégant, déplacement",
      coloris: "Bleu marine profond",
      soin: "Lavage à 30°C, séchage à plat",
    },
  },
  {
    id: "ng-03",
    title: "Lurex de Nuit",
    category: "Homme",
    image: "/images/algueye/homme/h-03-tank-lurex.jpg",
    description: "Tank lurex et pantalon large. L'audace du soir — le tank scintille, la veste à motifs accompagne.",
    details: {
      matiere: "Lurex métallisé + tissu fluide",
      coupe: "Tank ajusté + pantalon ample",
      occasion: "Soirée, sortie nocturne",
      coloris: "Argent / noir",
      soin: "Lavage à la main recommandé",
    },
  },
  {
    id: "ng-04",
    title: "Encre & Or",
    category: "Homme",
    image: "/images/algueye/homme/h-04-kimono-encre.jpg",
    description: "Le kimono signature de Naru Goor. Soie sombre traversée d'éclats dorés — pièce d'apparat masculine.",
    details: {
      matiere: "Soie noire à reflets dorés",
      coupe: "Kimono ample, ceinture intégrée",
      occasion: "Cérémonie, événement de prestige",
      coloris: "Encre noire & or",
      soin: "Pressing exclusivement",
    },
  },
  {
    id: "ng-05",
    title: "Héritage Tissé",
    category: "Homme",
    image: "/images/algueye/homme/h-05-veste-motifs.jpg",
    description: "Veste à motifs traditionnels tissés, hommage au patrimoine textile sénégalais. La modernité ancrée dans la racine.",
    details: {
      matiere: "Tissage traditionnel multicolore",
      coupe: "Veste structurée à zip doré",
      occasion: "Cérémonie, événement culturel",
      coloris: "Multicolore sur base noire",
      soin: "Pressing recommandé",
    },
  },
];

// Helper : récupère tous les items Naru Goor
export const getNaruGoorItems = (): NaruGoorItem[] => {
  return naruGoorItems;
};
