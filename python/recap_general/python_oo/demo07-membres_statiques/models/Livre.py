class Livre:
    
    # Attribut statique pour suivre le nombre total de livre créé
    # Attribut de classe => accessible que par la classe (<!> python permet d'acceder via l'instance aussi)
    nombre_livres = 0
    
    def __init__(self, titre, auteur) -> None:
        self.titre = titre
        self.auteur = auteur
        Livre.nombre_livres += 1
    
    # Méthode de classe
    @staticmethod
    def afficher_nombre_livres():
        print(f"Nombre total de livres: {Livre.nombre_livres}")
        
    # Méthode d'instance
    def afficher_details (self):
        print(f"Titre: {self.titre}, Auteur: {self.auteur}")
    