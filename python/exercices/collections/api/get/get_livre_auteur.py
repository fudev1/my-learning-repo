from core.settings import couleur_texte, clear
from data.bibliotheque import bibliotheque


def afficher_livres_auteur():
    recherche = input(couleur_texte("\n➡️ Entrez quelques lettres du nom de l'auteur : ", "bleu")).lower()
    
    auteurs = {livre["auteur"].lower() for livre in bibliotheque if recherche in livre["auteur"].lower()}

    clear()
    if not auteurs:
        print(couleur_texte(f"\n❌ Aucun auteur ne correspond à '{recherche}' dans la bibliothèque.", "rouge"))
        return

    print(couleur_texte("\n➡️ Auteurs correspondants :", "jaune"))
    auteur_liste = list(auteurs)
    for i, auteur in enumerate(auteur_liste, 1):
        print(f"  {i}. {couleur_texte(auteur, 'cyan')}")

    while True:
        choix = input(couleur_texte("\n➡️ Choisir un auteur : ", "bleu"))
        if choix.isdigit() and 1 <= int(choix) <= len(auteur_liste):
            auteur_choisi = auteur_liste[int(choix) - 1]
            break
        print(couleur_texte("\n❌ Choix invalide.", "rouge"))

    
    livres_auteur = [livre for livre in bibliotheque if auteur_choisi in livre["auteur"].lower()]


    clear()
    
    print(couleur_texte(f"\n📚 Livres de l'auteur '{auteur_choisi.capitalize()}':", "jaune"))
    for i, livre in enumerate(livres_auteur, 1):
        print(f"  {i}. {couleur_texte(livre['titre'], 'cyan')} (Publié le {livre['date_publication']}) - Genre : {livre['genre']}") 