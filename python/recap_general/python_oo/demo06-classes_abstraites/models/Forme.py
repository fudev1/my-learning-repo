from abc import ABC, abstractmethod

class Forme(ABC):
    """Classe abstraite représentant une forme générique"""

    def __init__(self) -> None:
        self.nom = None # permet de récupérer le nom de la forme (classe)

    @abstractmethod
    def aire(self):
        """Méthode abstraite pour calculer l'aire d'une forme"""

        pass

    @abstractmethod
    def perimetre(self):
        """Méthode abstraite pour calculer le périmètre d'une forme"""
        
        pass

    def __str__(self) -> str:
        return f'{self.nom}: aire = {self.aire()} et périmètre = {self.perimetre()}'