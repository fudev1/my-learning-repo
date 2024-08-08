"""
Enoncé : 
Vous êtes en charge de la gestion informatique d'une bibliothèque.

Chaque livre est représenté par un dictionnaire contenant les informations suivantes :
    - Titre
    - Auteur
    - Année de publication
    - Genre

Votre programme doit être capable de :
    - ajouter un livre
    - supprimer un livre
    - afficher la liste des livres
    - rechhercher un livre par titre
    - afficher tous les livres d'un même auteur
    - afficher tous les libres publiés après une date donnée
"""

from core.settings import couleur_texte, clear
from core.menu import afficher_menu, menu
from api.post.post_livre import ajouter_livre
from api.delete.delete_livre import supprimer_livre
from api.get.get_livre import afficher_livre
from api.get.search_livre import rechercher_livre
from api.get.get_livre_auteur import afficher_livres_auteur
from data.bibliotheque import bibliotheque


while True:
    afficher_menu()

    choix = input(couleur_texte("\n➡️ Choisir une option : ", "bleu"))

    match choix:
        case "1":
            clear()
            ajouter_livre(bibliotheque)

        case "2":
            clear()
            supprimer_livre(bibliotheque)
            
        case "3":
            clear()
            afficher_livre(bibliotheque)
            
        case "4":
            clear()
            rechercher_livre(bibliotheque)

        case "5":
            clear()
            afficher_livres_auteur()
            pass
        case "6":
            # todo fonction afficher_livres_apres_date
            clear()
            print(couleur_texte("\n⛔ fonction 'afficher_livres_apres_date' en cours de développement", "rouge"))
            pass
        case "7":
            clear()
            print(couleur_texte("\n👋 Au revoir !", "vert"))
            break
        case _:
            clear()
            print(couleur_texte("\n❌ Nop, ce n'est pas une option valide.", "rouge"))




