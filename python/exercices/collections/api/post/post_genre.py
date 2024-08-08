def ajouter_genre(genre):
    nom_genre = input("\n➡️ Quel est le nom du genre ? ")
    nouvelle_key = str(len(genre) + 1)
    genre[nouvelle_key] = nom_genre
    print(f"✅ Le genre {nom_genre} a été ajouté.")
    return nom_genre