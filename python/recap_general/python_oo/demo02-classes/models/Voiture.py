class Voiture:

    # construteur
    def __init__(self, marque, modele):
        self.marque = marque
        self.modele = modele
    
    # Méthode d'instance
    def afficher(self):
        print(f"Voiture {self.marque} {self.modele}")