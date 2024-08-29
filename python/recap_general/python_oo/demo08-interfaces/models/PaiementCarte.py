from models.GestionPaiement import GestionPaiement

class PaiementCarte(GestionPaiement):
    
    def __init__(self, titulaire, numero_carte) -> None:
        self.titulaire = titulaire
        self.numero_carte = numero_carte
        self.statut = "Non traité"
        
    
    def traiter_paiement(self, montant: float):
        """Implémentation de la méthode pour traiter le paiement par carte."""
        if montant > 0:
            self.statut = "Traitement réussi"
            print(f"Paiement de {montant} euros traité avec la carte.")
        else:
            self.statut = "Échec du traitement"
            print(f"Montant invalide pour le paiement")
            
    def obtenir_statut(self):
        """Impltementation de la méthode pour obtenir le statut du paiement."""
        return self.statut
    