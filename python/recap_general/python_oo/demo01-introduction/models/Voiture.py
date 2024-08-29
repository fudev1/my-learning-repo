# Définir une classe :

class Voiture:

    # Constructor
    def __init__(self, marque: str, modele: str):
        """ constructor d'une voiture, on initialise les attributs """
        self.marque = marque
        self.modele = modele

    # La méthode __str__ permet d'afficher la voiture dans la console
    # Si pas de méthode __str__, représentation de l'objet basée sur sa position mémoire
    # <models.Voiture.Voiture object at 0x...>
    def __str__(self) -> str:
        """ affichage de la voiture """
        return f"Voiture {self.marque} {self.modele}"

if __name__ == "__main__":
    voiture = Voiture("Peugeot", "208")
    print("Voiture:", voiture)


def saluer():
    print("Salut !")