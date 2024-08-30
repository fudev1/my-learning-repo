from models.Plante import Plante
from models.Animal import Animal

# Liste de plantes dispo : 
GRAINES = [
    Plante(nom="Blé", prix_achat=10, temps_croissance=5),
    Plante(nom="Carotte", prix_achat=20, temps_croissance=10),
    Plante(nom="Pommier", prix_achat=30, temps_croissance=15),
]

# Liste d'animaux dispo :
ANIMALS = [
    Animal(nom="Vache", prix_achat=500, temps_croissance=5),
    Animal(nom="Poule", prix_achat=100, temps_croissance=10),
]