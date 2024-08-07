nbRep = int(input("nbRep : "))
nbTiret = int(input("nbTiret : "))
nbEspace = int(input("nbEspace : "))

i = 0
print("|",end="")
while i < nbRep:
    j = 0
    while j < nbTiret:
        print("_",end="")
        j += 1
    j = 0
    while j < nbEspace:
        print(" ",end="")
        j += 1
    i += 1
print("|",end="")