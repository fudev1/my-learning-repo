from models.VehiculeThermique import VehiculeThermique
from models.VehiculeElectrique import VehiculeElectrique

# Héritage multiple
class VoitureHybride (VehiculeThermique, VehiculeElectrique):
    
    def __init__(self, marque, modele, annee, capacite_carburant, autonomie, nombre_portes) -> None:
        VehiculeThermique.__init__(self, marque, modele, annee, capacite_carburant)
        VehiculeElectrique.__init__(self, marque, modele, annee, autonomie)
        self.nombre_portes = nombre_portes
        
    def description(self):
        """Méthode surchargée pour obtenir la description d'un véhicule électrique"""
        return f"{super().description()}, autonomie : {self.autonomie}, nombre de portes : {self.nombre_portes}"
    
    def __str__(self) -> str:
        return f"Voiture hybride: {self.description()}"