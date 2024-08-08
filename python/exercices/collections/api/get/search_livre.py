from core.settings import couleur_texte
from data.bibliotheque import bibliotheque


def rechercher_livre(bibliotheque):
    recherche = input(couleur_texte("\n➡️ Rechercher un livre : ", "bleu")).lower()

    correspondance = [livre for livre in bibliotheque if recherche in livre["titre"].lower()]

    if not correspondance:
        print(couleur_texte("\n🤔 Je n'ai pas trouvé de livre avec ce titre.", "rouge"))
        return
    
    print(couleur_texte("\n➡️ Livres trouvés :", "jaune"))
    for i, livre in enumerate(correspondance):
        print(f"  [{couleur_texte(i + 1, 'jaune')}]. {couleur_texte(livre['titre'], 'gris')}")