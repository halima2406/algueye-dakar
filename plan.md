# Consolidation de la Galerie - ALGUEYE DAKAR

L'objectif est de supprimer les doublons dans la section Galerie pour que chaque catégorie soit représentée par un bloc unique, fort et premium.

## 1. Nettoyage des données
- Réduire `galleryItems` à 5 éléments uniques (un par catégorie).
- Sélectionner l'image la plus représentative pour chaque catégorie :
    - **Habits d’événements** : "Élégance de Soirée"
    - **Défilé de mode** : "Vanguard Couture"
    - **Homme** : "Le Grand Boubou"
    - **Femme** : "Splendeur Royale"
    - **Mariage** : "La Mariée Impériale"

## 2. Refonte du composant Gallery.tsx
- Modifier le rendu pour n'afficher qu'un seul bloc central par catégorie au lieu d'une grille.
- Optimiser la mise en page pour un aspect "éditorial" de luxe :
    - Image grand format avec des proportions élégantes.
    - Typographie soignée pour le titre et la description.
    - Transitions fluides lors du changement de catégorie.
- Maintenir le design minimaliste et chic avec des accents dorés.

## 3. Validation
- Vérifier la fluidité des animations Framer Motion.
- S'assurer de la parfaite réactivité sur mobile (le bloc unique doit être bien centré et lisible).
- Valider le build final sans erreurs.
