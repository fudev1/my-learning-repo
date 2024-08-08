from core.settings import couleur_texte, clear
from data.bibliotheque import bibliotheque


def supprimer_livre(bibliotheque):
    recherche = input(couleur_texte("\n➡️ Entrez quelques lettres du titre du livre à supprimer : ", "bleu")).lower()

    correspondance = [livre for livre in bibliotheque if recherche in livre["titre"].lower()]

    if not correspondance:
        print(couleur_texte("\n🤔 Je n'ai pas trouvé de livre avec ce titre.", "rouge"))
        return
    
    print(couleur_texte("\n➡️ Livres trouvés :", "jaune"))
    for i, livre in enumerate(correspondance):
        print(f"  [{couleur_texte(i + 1, 'jaune')}]. {couleur_texte(livre['titre'], 'gris')}")
    
    while True:
        choix = input(couleur_texte("\n➡️ Choisir le numéro du livre à supprimer : ", "bleu"))
        if choix.isdigit() and 1 <= int(choix) <= len(correspondance):
            livre_a_supprimer = correspondance[int(choix) - 1]
            bibliotheque.remove(livre_a_supprimer)
            clear()
            print(couleur_texte(f"\n✅ [{livre_a_supprimer['titre']}] a été supprimé de la bibliothèque.", "vert"))
            return
        print(couleur_texte("\n❌ Choix invalide.", "rouge"))
