# ------------------------------------------------------------------------------
# Mot-clé break et continue
# ------------------------------------------------------------------------------

# ------------------------------------------------------------------------------
# Break
# ------------------------------------------------------------------------------

for i in range(10):
    if i == 4:
        break;          # arrête la boucle quand i vaut 4
    print(i)            # affiche: 0 1 2 3


# ------------------------------------------------------------------------------
# Continue
# ------------------------------------------------------------------------------

for i in range(10):
    if i == 4:
        continue        # la boucle ignore l'itération lorsque i vaut 4
    print(i)            # affiche: 0 1 2 3 ... 5 6 7 8 9

