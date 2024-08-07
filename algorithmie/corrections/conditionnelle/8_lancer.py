panier_vide = False
pret = bool( int( input("Pret? 0: non, 1: oui")) )

if pret and not panier_vide :
    print("Balle lancée")
else:
    print("Balle non lancée")