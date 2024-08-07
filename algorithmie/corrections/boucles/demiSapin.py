
nbLigne = int(input("Hauteur du sapin : "))

i = 1

while i <= nbLigne:
    j = 0
    while j < i:
        print("*", end="")
        j += 1
    print()
    i += 1