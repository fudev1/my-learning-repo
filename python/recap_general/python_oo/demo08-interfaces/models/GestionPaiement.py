from abc import ABC, abstractmethod

class GestionPaiement (ABC):
    """Interface pour la gestion des paiements"""

    @abstractmethod
    def traiter_paiement(self, montant: float):
        """Méthode abstraite pour traiter un paiement."""
        pass
    
    @abstractmethod
    def obtenir_statut(self):
        """Méthode abstraite pour obtenir le statut d'un paiement."""
        pass