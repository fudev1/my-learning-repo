annee = int( input("Quelle année ? ") )

if (annee % 4 == 0 and annee % 100 != 0) or annee % 400 == 0 : 
    print(annee, "est bissextile")
else:
    print(annee, "n'est pas bissextile")