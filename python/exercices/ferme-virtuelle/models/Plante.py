from .EntiteFerme import EntiteFerme

class Plante(EntiteFerme):
    """class dérivée qui représente une plante dans la ferme"""
    def __init__(self, nom, prix_achat, temps_croissance):
        super().__init__(nom, "Plante", prix_achat, temps_croissance)
        self.est_planter = False

    def planter(self):
        self.est_planter = True

    def arroser(self):
        if self.est_planter:
            self.jours_ecoules += 1

    def recolter(self):
        if self.est_pret_a_la_recole():
            return super().recolter()
        return 0
    

