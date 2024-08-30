# Développement d'un jeu de Gestion de Ferme Virtuelle

## Contexte :

**Permettre aux utilisateurs de :**

- Planter des cultures (planter, détruire, arroser)
- Élever des animaux (nourrir, soigner)
- Vendre des produits pour générer des revenus

## Objectifs :

1.  **Classes Principales :**
    **_Ferme :_**

    - Réprésente la ferme du joueur
    - Contient les ressources dispo (argent, espace culture, animaux, plantes)

    **_Culture :_**

    - Représente une culture spécifique avec comme attributs le `type de culture`, `le temps de croissance`, `le revenu généré à la récolte`.

    **_Animal :_**

    - Représente un animal élevé dans la ferme avec des attributs comme
      le `type d'animal`, `le temps nécessaire pour attteindre l'âge adulte`, `revenu généré par la vente de produits (lait, oeuf, etc.)`.

    **_Marché :_**

    - Permet au joueur d'acheter des graines, des animaux ou de vendre des produits de la ferme pour générer des revenus.

2.  **Fonctionnalité de base :**
    **_Planter des cultures :_**

    - Le joueur doit pouvoir `acheter des graines`, `planter des graines`, `arroser des cultures`, `détruire des cultures`, `suivre la croissance de la culture jusqu'à la récolte`.

    **_Elever des animaux :_**

    - Doit pouvoir `acheter des animaux`, `nourrir`, `récolter leur produit une fois qu'ils sont adultes`

    **_Vendre des produits :_**

    - Doit pouvoir `vendre les récoltes`, `les produits animaux` pour obtenir des revenus.

    **_Acheter des améliorations :_**

    - Utiliser l'argent gagné pour `acheter des améliorations` pour la ferme. `agrandissement de l'espace`, `outils pour améliorer l'efficacité des cultures`.
    - Ferme : Représente la ferme du joueur.

3.  **Fonctionnalité avancée :**
    **_Gestion des saisons :_**

    - implémenter un système de saisons `affecte la dispo des cultures`, `affecte le comportement des animaux`

    **_Evénement aléatoire :_**

    - Ajouter des événements imprévus `tempêtes`, `maladie` qui impactent la production.

    **_Mode compétition :_**

    - Créer un mode où le joueur doit atteindre des objectifs spécifiques dans un délai imparti.

    **_Interface graphique :_**

    - Intergrer une UI en utilsant Tkinter ou pygame pour une réprésentation visuelle de la ferme
