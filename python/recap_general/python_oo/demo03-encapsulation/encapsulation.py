from models.CompteBancaire import CompteBancaire
from datetime import datetime

# public : 
# -> Accessible partout

# protected : _
# -> Acceessible partout mais destiné à des méthodes internes 

# private : __
# -> Accessible uniquement dans la classe

# créer un compte bancaire
compte = CompteBancaire("John", 2322)
print(compte._solde)

# taux d'intérêt
compte.taux_interet = 0.8
print(f"Le taux d'intérêt est {compte.taux_interet}")

# effectuer des transactions
compte.deposer(100)
compte.deposer(200)
compte.retirer(50)
compte.retirer(100)
compte.deposer(500)
compte.retirer(1000)

# appliquer les interet
compte.appliquer_interet()

# afficher le solde et l'historique
compte.afficher_solde()
compte.afficher_historique()

# tentative d'acces au membres privés
# print(compte.__historique)  # => erreur
# compte.__ajouter_transaction("test")  # => erreur