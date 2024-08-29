from models.Vehicule import Vehicule

class VehiculeElectrique (Vehicule):
    """Classe dérivée représentant une véhicule electrique"""
    
    def __init__(self, marque, modele, annee, autonomie) -> None:
        Vehicule.__init__(self, marque, modele, annee)
        self.autonomie = autonomie
        
    def description(self):
        """Méthode surchargée pour obtenir la description d'un véhicule électrique"""
        return f"{super().description()}, autonomie : {self.autonomie}"
    
    def __str__(self) -> str:
        return f"Vehicule Electrique: {self.description()}"