from models.PaiementCarte import PaiementCarte
from models.PaiementPaypal import PaiementPaypal

# Création d'instances des classes concrètes
paiement_carte = PaiementCarte("Quentin Geerts", "1234 5678 9012 3456")
paiement_paypal = PaiementPaypal("quentin.geerts@bstorm.be")

# Traitement des paiements
paiement_carte.traiter_paiement(100) # Affiche: 
print(paiement_carte.obtenir_statut()) # Affiche:

 
paiement_paypal.traiter_paiement(50)
print(paiement_paypal.obtenir_statut())

paiement_paypal.traiter_paiement(-50)
print(paiement_paypal.obtenir_statut())