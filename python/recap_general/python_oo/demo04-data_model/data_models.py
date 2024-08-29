from models.Voiture import Voiture

# Création d'une instance d'une voiture
v = Voiture("Kia", "Ceed", 115)
v2 = Voiture("Kia", "Ceed", 125)

# Utilisation des attributs spéciaux
print(v.__class__) # Affichage: <class 'models.Voiture.Voiture'>
print(v.__dict__) # Affichage: {'marque': 'Kia', 'modele': 'Ceed'}
print(v.__doc__) # Affichage: Classe représentant une voiture
print(v.__module__) # Affichage: models.Voiture
# print(v.__annotations__)

# Utilisation des méthodes spéciales
print(str(v)) # Affichage: Kia Ceed
print(repr(v)) # Affichage: Voiture(marque=Kia, modele=Ceed)


# Surcharge d'opérateurs
print(v == v2)
print(v != v2)
print(v > v2)
print(v < v2)