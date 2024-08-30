"""
todo: 
- contenir les ressources du joueur (argent, espace de culture)
- contenir la liste des cultures et animaux
"""

class Ferme: 
    # constructor
    def __init__(self) -> None:
        self.argent = 0
        self.cultures = []
        self.animaux = []
        self.player_name = "Joueur"

    