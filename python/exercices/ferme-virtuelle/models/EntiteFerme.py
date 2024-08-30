from abc import ABC, abstractmethod

class EntiteFerme(ABC):
    """Classe abstraite représentant une entité dans la ferme"""

    def __init__(self, nom, type_entite, prix_achat, temps_croissance):
        self.nom = nom
        self.type_entite = type_entite
        self.prix_achat = prix_achat
        self.temps_croissance = temps_croissance
        self.jours_ecoules = 0

    # @abstractmethod
    # def nourrir(self):
    #     pass

    # @abstractmethod
    # def planter(self):
    #     pass

    # @abstractmethod
    # def arroser(self):
    #     pass

    # @abstractmethod
    # def est_pret_a_la_recole(self):
    #     pass

    # @abstractmethod
    # def placer_dans_la_ferme(self):
    #     pass