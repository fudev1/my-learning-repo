from livres import Livre

# Création
livre1 = Livre("1984", "George Orwell", 330)
livre2 = Livre("Animal Farm", "George Orwell", 112)
livre3 = Livre("1984", "George Orwell", 328)

# Affichage
print(livre1)  # Affiche : '1984' par George Orwell, 328 pages
print(repr(livre2))  # Affiche : Livre(titre='Animal Farm', auteur='George Orwell', pages=112)

# Comparaison de livres
print(livre1 == livre3)  # Affiche : True (même titre et même auteur)
print(livre1 == livre2)  # Affiche : False (titres différents)

# Comparaison par nombre de pages
print(livre1 < livre2)  # Affiche : False (328 n'est pas moins que 112)
print(livre2 < livre1)  # Affiche : True (112 est moins que 328)

# Addition de pages de deux livres
total_pages = livre1 + livre2
print(f"Total des pages : {total_pages}")  # Affiche : Total des pages : 442