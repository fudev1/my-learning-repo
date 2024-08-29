from models.Vehicule import Vehicule

class VehiculeThermique (Vehicule):
    """Classe dérivée représentant une véhicule thermique"""
    
    def __init__(self, marque, modele, annee, capacite_carburant) -> None:
        Vehicule.__init__(self, marque, modele, annee)
        self.capacite_carburant = capacite_carburant
        
    def description(self):
        """Méthode surchargée pour obtenir la description d'un véhicule thermique"""
        return f"{super().description()}, capacité carburant : {self.capacite_carburant}"
    
    def __str__(self) -> str:
        return f"Vehicule Thermique: {self.description()}"