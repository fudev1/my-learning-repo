from core.settings import couleur_texte

menu = {
    "1": "Ajouter un livre",
    "2": "Supprimer un livre",
    "3": "Afficher la liste des livres",
    "4": "Rechercher un livre par titre",
    "5": "Afficher tous les livres d'un même auteur",
    "6": "Afficher tous les livres publiés après une date donnée"
}


def afficher_menu():
    
    print(couleur_texte("\nMenu :", "magenta"))
    for key, value in menu.items():
        print(f"  [{couleur_texte(key, 'jaune')}]. {couleur_texte(value, 'gris')}")
