# ------------------------------------------------------------------------------
# Les listes
# ------------------------------------------------------------------------------

# Création d'une liste :
fruits = ["pomme", "poire", "kiwi"]

# ajouter un élément à la fin de la liste :
fruits.append("banane")
print(fruits)               # affiche: ['pomme', 'poire', 'kiwi', 'banane']

# insérer un élément à une position spécifique : 
fruits.insert(1, "orange")
print(fruits)               # affiche: ['pomme', 'orange', 'poire', 'kiwi', 'banane']

# supprimer un élément :
fruits.remove("kiwi")
print(fruits)               # affiche: ['pomme', 'orange', 'poire', 'banane']

# supprimer un élément à une position spécifique :
fruits.pop(2)
print(fruits)               # affiche: ['pomme', 'orange', 'banane']

del fruits[1]
print(fruits)               # affiche: ['pomme', 'banane']

# ------------------------------------------------------------------------------
# Itération sur une liste
# ------------------------------------------------------------------------------

for fruit in fruits:
    print(fruit)             # affiche: pomme, orange, banane

fruits = ["pomme", "poire", "kiwi", "banane", "orange", "mandarine", "cerise"]
#            0        1       2         3         4         5           6

print("fruits[1]", fruits[1])       # affiche: poire
print("fruits[1:3]", fruits[1:3])   # affiche: ['poire', 'kiwi']
print("fruits[:3]", fruits[:3])     # affiche: ['pomme', 'poire', 'kiwi']
print("fruits[3:]", fruits[3:])     # affiche: ['banane', 'orange', 'mandarine', 'cerise']
print("fruits[::2]", fruits[::2])   # affiche: ['pomme', 'kiwi', 'orange', 'cerise']
print("fruits[::-1]", fruits[::-1]) # affiche: ['cerise', 'mandarine', 'orange', 'banane', 'kiwi', 'poire', 'pomme']

# ------------------------------------------------------------------------------
# Copier une liste
# ------------------------------------------------------------------------------

fruits1 = fruits            # copie de la liste 
fruits2 = fruits[:]         # copie de la liste (sans utiliser la copie par référence) 
fruits3 = fruits.copy()     # copie de la liste (sans utiliser la copie par référence) 
fruits4 = list(fruits)      # copie de la liste (sans utiliser la copie par référence) 

print("fruits1 == fruits", fruits1 is fruits) # affiche: True
print("fruits2 == fruits", fruits2 is fruits) # affiche: False
print("fruits3 == fruits", fruits3 is fruits) # affiche: False
print("fruits4 == fruits", fruits4 is fruits) # affiche: False



