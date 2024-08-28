# Structures Iteratives

# ------------------------------------------------------------------------------
## La boucle for
# ------------------------------------------------------------------------------

"""
for variable in sequence:
    # bloc d'instruction à exécuter pour chaque élément de la séquence
"""

fruits = ["pomme", "poire", "kiwi"]

for fruit in fruits:     # pour chaque élément de la séquence
    print(fruit)         # affiche: pomme, poire, kiwi

message = "Bonjour"
for char in message:     # pour chaque élément de la séquence
    print(char)          # affiche: B, o, n, j, o, u, r

# ------------------------------------------------------------------------------
## boucle for avec "enumerate()"
# ------------------------------------------------------------------------------

for index, fruit in enumerate(fruits):
    print('index:', index)
    print('valeur:', fruit)
    # affiche:
    # index: 0
    # valeur: pomme
    # index: 1
    # valeur: poire
    # index: 2
    # valeur: kiwi


# ------------------------------------------------------------------------------
## boucle for avec "range()"
# ------------------------------------------------------------------------------

for i in range(5):
    print(i) # affiche: 0 1 2 3 4

print("---")

for i in range(0, 5, 2):
    print(i) # affiche: 0 2 4

