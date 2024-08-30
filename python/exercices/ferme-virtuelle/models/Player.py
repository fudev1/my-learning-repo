

from models import EntiteFerme


class Player:
    def __init__(self, pseudo):
        self.pseudo = pseudo
        self.argent = 5000
        self.parcelles_achetees = []
        self.objets_achetes = []
        self.recolte_produits = []

    def acheter(self, objet):
        if self.argent >= objet.prix_achat:
            self.argent -= objet.prix_achat
            self.objets_achetes.append(objet)

            if isinstance(objet, EntiteFerme):
                if objet.type_entite == "Plante":
                    self.parcelles_achetees.append(objet)
                elif objet.type_entite == "Animal":
                    self.parcelles_achetees.append(objet)
            return True
        return False
    
    def vendre_recoltes(self):
        total_vente = 0
        for recolte in self.recolte_produits:
            total_vente += recolte.recolter()
        self.argent += total_vente
        self.recoltes = []
        return total_vente
    
    def save_partie(self):
        # todo: implémenter la méthode pour sauvegarder la partie
        pass