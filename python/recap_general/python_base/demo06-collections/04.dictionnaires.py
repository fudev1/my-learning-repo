# ------------------------------------------------------------------------------
# Les dictionnaires
# ------------------------------------------------------------------------------

# Création d'un dictionnaire :
etudiants = {
    "prenom": "Jean",
    "nom": "Dupont",
    "cours": ["mathématiques", "informatique"]
}

etudiants2 = dict(
    prenom = "Jean",
    nom = "Dupont",
    cours = ["mathématiques", "informatique"],
)

print(etudiants) # affiche: {'prenom': 'Jean', 'nom': 'Dupont', 'cours': ['mathématiques', 'informatique']}
print(etudiants2) # affiche: {'prenom': 'Jean', 'nom': 'Dupont', 'cours': ['mathématiques', 'informatique']}

# accéder à un élément par sa clef: 
print(etudiants["prenom"]) # affiche: Jean
print(etudiants["nom"]) # affiche: Dupont

etudiants["adresse"] = "12 rue de la Paix"
print(etudiants) # affiche: {'prenom': 'Jean', 'nom': 'Dupont', 'cours': ['mathématiques', 'informatique'], 'adresse': '12 rue de la Paix'}

# supprimer une paire clef/valeur :
del etudiants["adresse"]
print(etudiants) # affiche: {'prenom': 'Jean', 'nom': 'Dupont', 'cours': ['mathématiques', 'informatique']}

# supprimer un élément : 
etudiants.pop("cours")
print(etudiants) # affiche: {'prenom': 'Jean', 'nom': 'Dupont'}

# itérer sur l'ensemble des clefs d'un dictionnaire (enumerate) :
for index, laclef in enumerate(etudiants.keys()):
    print(f"{laclef} : {etudiants[laclef]}")

# nettoyer l'ensemble des clef/valeur :
etudiants.clear()
print(etudiants) # affiche: {}