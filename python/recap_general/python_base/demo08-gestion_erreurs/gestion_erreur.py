# Gestion des erreurs

try: 
    # code qui est susceptible de lever plusieurs erreurs
    nombre = int(input("Entrez un nombre: "))                   # demander un nombre à l'utilisateur
    resultat = 10 / nombre                                      # calculer le résultat de la division par 10

    if nombre < 0: 
        raise ValueError("Le nombre ne peut pas être négatif")  # on leve une erreur
    
except ValueError:                                              # on catche une erreur spécifique (ValueError)
    print("Erreur: Vous devez rentrer un nombre")               # on affiche une erreur personnalisée 

except ZeroDivisionError:                                       # on catche une erreur spécifique (ZeroDivisionError)
    print("Erreur: Le nombre ne peut pas être divisé par 0")    # on affiche une erreur personnalisée

except Exception as err:                                        # on catche toutes les erreurs
    print(f"Erreur: {err}")                                     # on affiche une erreur personnalisée

else:
    print(f"Le résultat de la division est: {resultat}")        # on affiche le résultat de la division

finally:
    print("Fin de la fonction")



# lever une exception manuellement
def verifier_age(age):
    if age < 0:
        raise ValueError("L'age ne peut pas être négatif")
    else:
        print(f"L'age est: {age}")

try:
    verifier_age(-5)
except ValueError as err:
    print(f"Erreur: {err}")