"""
todo: 
- Gérer les transactions (achat de graines, animaux)
- Gérer les ventes (vente de produits pour générer des revenus)
"""

class Market: 
    def acheter(self, player, objet):
        if player.acheter(objet):
            return f"{objet.nom} a été acheté"
        return f"Vous n'avez pas assez d'argent pour acheter {objet.nom}"
    
    def vendre(self, player, objet):
        revenu = objet.recolter()
        player.argent += revenu
        return f"Vous avez vendu {objet.nom} et gagné {revenu} argent"