from models.GestionPaiement import GestionPaiement

class PaiementPaypal(GestionPaiement):
    
    def __init__(self, compte_email) -> None:
        self.compte_email = compte_email
        self.statut = "Non traité"
        
    
    def traiter_paiement(self, montant: float):
        """Implémentation de la méthode pour traiter le paiement par Paypal."""
        if montant > 0:
            self.statut = "Traitement réussi"
            print(f"Paiement de {montant} euros traité avec la Paypal.")
        else:
            self.statut = "Échec du traitement"
            print(f"Montant invalide pour le paiement")
            
    def obtenir_statut(self):
        """Impltementation de la méthode pour obtenir le statut du paiement."""
        return self.statut
    