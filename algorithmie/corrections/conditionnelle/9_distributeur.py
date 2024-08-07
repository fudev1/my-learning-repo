CHOIX_EAU = 0
CHOIX_THE = 1
CHOIX_CAFE = 2

stockEau = 5
stockThe = 1
stockCafe = 0

choix = int( input("Choisissez une boisson (0: eau, 1: the, 2: cafe): ") )

if choix == CHOIX_EAU:
    if stockEau > 0:
        print("Voici votre eau!")
        stockEau -= 1
    else:
        print("Il n'y a plus d'eau") 

elif choix == CHOIX_THE:
    if stockThe > 0:
        print("Voici votre the!")
        stockThe -= 1
    else:
        print("il n'y a plus de the")

elif choix == CHOIX_CAFE:
    if stockCafe > 0:
        print("Voici votre cafe!")
        stockCafe -= 1
    else:
        print("il n'y a plus de cafe")

else:
    print("choix invalide")