

from .EntiteFerme import EntiteFerme

class Animal(EntiteFerme):
    """classe dérivée qui représente un animal dans la ferme"""
    def __init__(self, nom, prix_achat, temps_croissance):
        super().__init__(nom, "Animal", prix_achat, temps_croissance)
        self.est_placer = False

    def placer(self):
        self.est_placer = True

    def nourrir(self):
        if self.est_placer:
            self.jours_ecoules += 1

    def recolter(self):
        if self.est_pret_a_la_recole():
            return super().recolter()
        return 0