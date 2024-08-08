# todo : définir la class spécifique Chien

class Chien(Animal):
    def __init__(self, nom, poids, taille, sexe, age, date_arrivee, race, couleur_collier, dressage):
        super().__init__(nom, poids, taille, sexe, age, date_arrivee)
        self.race = race
        self.couleur_collier = couleur_collier
        self.dressage = dressage

    def crier(self):
        return "Waouf"

    @property
    def race(self):
        return self._race

    @race.setter
    def race(self, value):
        if not isinstance(value, str):
            raise ValueError("La race doit être une chaîne de caractères")
        self._race = value
