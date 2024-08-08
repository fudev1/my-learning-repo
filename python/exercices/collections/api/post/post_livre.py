from core.settings import couleur_texte, clear
from data.bibliotheque import bibliotheque
from api.post.post_genre import ajouter_genre
from data.genre import genre


def ajouter_livre(bibliotheque):
    titre = input(couleur_texte("\n➡️ Titre du livre : ", "bleu"))
    auteur = input(couleur_texte("\n➡️ Auteur du livre : ", "bleu"))

    while True: 
        date_publication = input(f"{couleur_texte('\n➡️ Année de publication du livre ', 'bleu')}{couleur_texte('(format AAAA) : ', 'gris')}")
        if not date_publication.isdigit() or len(date_publication) != 4:
            print(couleur_texte("\n❌ La date de publication doit être au format AAAA.", "rouge"))
            continue
        break

    print(f"{couleur_texte('\n➡️ Genres disponibles', 'jaune')} {couleur_texte('|| Touche [a] pour ajouter un genre', 'gris')}")
    for key, value in genre.items():
        print(f"  [{couleur_texte(key, 'jaune')}]. {couleur_texte(value, 'gris')}")

    genre_ajoute = False

    while True:
        genre_select = input(couleur_texte("\n➡️ Choisir le genre : ", "bleu"))

        if genre_select in genre.keys():
            genre_livre = genre[genre_select]
            break

        elif genre_select == "a":
            genre_livre = ajouter_genre(genre)
            genre_ajoute = True
            break

        print(couleur_texte(f"\n❌ Le choix [{genre_select}] n'est pas disponible.", "rouge") + couleur_texte(" || touche [a] pour ajouter un genre", "gris"))

    livre = {
        "titre": titre,
        "auteur": auteur,
        "date_publication": date_publication,
        "genre": genre_livre
    }

    bibliotheque.append(livre)

    clear()
    print(couleur_texte(f"\n✅ [{livre['titre']}] a été ajouté dans la bibliothèque.\n", "vert"))
    if genre_ajoute:
        print(couleur_texte(f"✅ Le genre [{genre_livre}] a été ajouté au livre.", "vert"))


