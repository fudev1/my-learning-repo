from typing import Any

class Voiture: 
    # classe qui représente une voiture

    def __init__(self, marque, modele, puissance):
        self.marque = marque
        self.modele = modele
        self.__puissance = puissance
        self.__annee = 2024

        def __str__(self):
            return f"{self.marque} {self.modele}"
        
        def __repr__(self):
            return f"Voiture(marque={self.marque}, modele={self.modele}, puissance={self.__puissance}, annee={self.__annee})"
        
        def __lt__(self, v2):
            return self.puissance < v2.puissance
        
        def __gt__(self, v2):
            return self.puissance > v2.puissance
        
        def __eq__(self, v2):
            return self.puissance == v2.puissance
        
        def __ne__(self, v2):
            return not (self == v2)
        
        @property
        def puissance(self):
            return self.__puissance