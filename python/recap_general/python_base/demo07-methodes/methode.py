# Méthode

"""
- Procédure :  ne retourne pas de valeur
- Fonction  :  retourne une valeur
"""

# ------------------------------------------------------------------------------
# 1. Méthode simple sans arguments
print("---")
# ------------------------------------------------------------------------------

def saluer():
    print("Bonjour tout le monde !")

saluer() # => Appel de la méthode

# ------------------------------------------------------------------------------
# 2. Méthode avec arguments
print("---")
# ------------------------------------------------------------------------------

def saluer_utilisateur(prenom):
    print(f'Bonjour {prenom} !')

saluer_utilisateur("Jean") # => Appel de la méthode avec un argument

# ------------------------------------------------------------------------------
# 3. Méthode avec valeur de retour
print("---")
# ------------------------------------------------------------------------------

def additionner(a, b):
    return a + b

resultat = additionner(5, 3)
print(f'5 + 3 = {resultat}')

# ------------------------------------------------------------------------------
# 4. Méthode avec paramètre par défaut 
# ------------------------------------------------------------------------------

def saluer_utilisateur(prenom = "Jean"):
    print(f'Bonjour {prenom} !')

saluer_utilisateur()
saluer_utilisateur("Jean-Pierre")
saluer_utilisateur(prenom="Jean-Pierre")

# ------------------------------------------------------------------------------
# 5. Méthode avec plusieurs retours
print("---")
# ------------------------------------------------------------------------------

def diviser_et_reste(a, b):
    quotient = a // b
    reste = a % b
    return quotient, reste

q, r = diviser_et_reste(10, 3)
print(f'Quotient: {q}, Reste: {r}')

# ------------------------------------------------------------------------------
# 6. Méthode avec des arguments variables
print("---")
# ------------------------------------------------------------------------------

# - Avec *args : on peut passer plusieurs arguments
def additionner_tout(*args):
    return sum(args)

print(additionner_tout(1, 2, 3, 4, 5)) # => 15
print(additionner_tout(10, 20)) # => 30

# - Avec **kwargs : on peut passer des arguments nommés
def afficher_infos(**kwargs):
    for key, value in kwargs.items():
        print(f'{key} : {value}')

afficher_infos(prenom="Jean-Pierre", age=25, ville="Paris")

















