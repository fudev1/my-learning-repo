from models.Forme import Forme

class Rectangle(Forme):

    def __init__(self, largeur, hauteur) -> None:
        super().__init__() # appel du parent (Forme)
        
        self.largeur = largeur # initialisation des attributs
        self.hauteur = hauteur # initialisation des attributs
        self.nom = "Rectangle" # initialisation du nom de la classe

    def aire(self):
        return self.largeur * self.hauteur
    
    def perimetre(self):
        return 2 * (self.largeur + self.hauteur)
    
    def __str__(self) -> str:
        return f"{super().__str__()}, hauteur = {self.hauteur}, largeur = {self.largeur}"
    
    
    
