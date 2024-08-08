# todo : définir la class spécifique Chat

class Chat():
    def __init__(self, nom, poids, taille, sexe, age, date_arrivee, caractere, griffe_coupees, poil_coupe):
        super().__init__(nom, poids, taille, sexe, age, date_arrivee)
        self.caractere = caractere
        self.griffe_coupees = griffe_coupees
        self.poil_coupe = poil_coupe

    def crier(self):
        return "Miaou"


    @property
    def griffe_coupees(self):
        return self._griffe_coupees

    @griffe_coupees.setter
    def griffe_coupees(self, value):
        if not isinstance(value, bool):
            raise ValueError("La griffe de la coupe doit être un booléen")
        self._griffe_coupees = value
