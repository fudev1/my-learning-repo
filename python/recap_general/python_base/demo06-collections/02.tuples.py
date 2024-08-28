# ------------------------------------------------------------------------------
# Les tuples
# ------------------------------------------------------------------------------

# Création d'un tuple :
coordonnees = (3, 4)

# accéder à un élément d'un tuple :
print(coordonnees[0]) # affiche: 3

"""
les tuples sont immuables, donc aucune méthode pour ajouter ou supprimer un élément
On peut créer un nouveau tuple par concaténation d'autres tuples
"""

nouvelles_coordonnees = coordonnees + (5, 6)
print(nouvelles_coordonnees) # affiche: (3, 4, 5, 6)

# Itération sur un tuple
for coord in nouvelles_coordonnees:
    print(coord) # affiche: 3, 4, 5, 6
    