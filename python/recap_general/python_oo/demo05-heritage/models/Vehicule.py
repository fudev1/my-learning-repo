class Vehicule:
    
    def __init__(self, marque, modele, annee) -> None:
        self.marque = marque
        self.modele = modele
        self.annee = annee
    
    def description(self):
        return f"{self.marque} {self.modele} de {self.annee}"
    
    def demarrer (self):
        return f"Le vehicule démarre."
    
    def klaxonner(self):
        return f"Le vehicule klaxonne : bip bip !"
    
    def __str__(self) -> str:
        return f"Vehicule: {self.description()}"
    