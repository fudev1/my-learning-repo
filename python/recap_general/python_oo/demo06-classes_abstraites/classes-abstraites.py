from models.Cercle import Cercle
from models.Rectangle import Rectangle


""" Création des formes """
cercle = Cercle(5)
rectangle = Rectangle(5, 10)

""" Utilisation des méthods """
print(cercle) # pas besoin d'appeler les méthode `.aire` ou `.perimetre`
print(rectangle) # car les méthodes sont déjà implémentées dans le parent

