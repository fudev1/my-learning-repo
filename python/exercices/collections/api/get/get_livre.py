from core.settings import couleur_texte, clear
from data.bibliotheque import bibliotheque

def afficher_livre(bibliotheque):
    clear()
    if not bibliotheque:
        print(couleur_texte("\n🤔 La bibliothèque est vide.", "rouge"))
    print(couleur_texte("\n➡️ Livres trouvés :", "magenta"))
    for i, livre in enumerate(bibliotheque):
        print(f"  [{couleur_texte(i + 1, 'jaune')}]. {couleur_texte(livre['titre'], 'gris')}")