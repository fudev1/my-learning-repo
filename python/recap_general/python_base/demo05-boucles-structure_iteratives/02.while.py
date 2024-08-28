
# ------------------------------------------------------------------------------
# La boucle while
# ------------------------------------------------------------------------------

"""
while condition: 
    # bloc d'instruction à exécuter tant que la condition est vraie
"""

compteur = 0           # initialisation du compteur

while compteur < 5:     # tant que le compteur est inférieur à 5
    print(compteur)     # affiche: 0 1 2 3 4
    compteur += 1       # incrémente le compteur


# ------------------------------------------------------------------------------
# La boucle while avec une condition d'arret
# ------------------------------------------------------------------------------

response = "oui"

while response.lower() == "oui":
    response = input("Voulez-vous continuer ? (oui/non): ")
    if response.lower() == "oui":
        print("on continue")
    else: 
        print("on arrête")



