from datetime import datetime

class CompteBancaire:

    # on va créer la structure de l'objet => 
    # on fait le constructeur (__init__) et on lui passe les attributs qui représentent les données de l'objet
    def __init__(self, titulaire: str, solde_initial: float):
        # on initialise les attributs de l'objet
        self.titulaire = titulaire                  # public (accessible en lecture et écriture)
        self._solde = solde_initial         # protected (accessible en lecture seule)
        self.__historique = []                      # privé (accessible en lecture seule)
        self.__date_creation = datetime.now()       # privé (accessible en lecture seule)
        self.__taux_interet = 0.05                  # privé (accessible en lecture seule)


    # Méthode publique pour déposer de l'argent
    def deposer(self, montant: float):
        # Args : montant (float) : le montant à déposer
        if montant > 0:
            self._solde += montant
            self.__ajouter_transaction(f"Dépôt de {montant} €")
        else: 
            print("Montant invalide pour le dépot")

    def retirer(self, montant: float):
        if 0 < montant <= self._solde:            # on vérifie que le montant est positif et que le solde est suffisant
            self._solde -= montant                # on retire le montant de la balance
            self.__ajouter_transaction(f"Retrait de {montant} €")
        else:
            print("Montant invalide pour le retrait")

    def _calculer_interet(self):
        return self._solde * self.__taux_interet
    
    def afficher_solde(self):
        print(f"le solde de {self.titulaire} est de {self._solde} €")

    def appliquer_interet(self):
        interet = self._calculer_interet()
        self._solde += interet
        self.__ajouter_transaction(f"intéret appliqué: {interet} €")
        print(f"interet appliqué, nouveau solde: {self._solde} €")

    def __ajouter_transaction(self, description):
        self.__historique.append(description)

    def afficher_historique(self):
        print(f"Historique de {self.titulaire} :")
        for transaction in self.__historique:
            print(f"- {transaction}")

    def date_creation(self):
        return self.__date_creation
    
    def date_creation(self):
        return self.__date_creation
    
    def set_date_creation(self, new_date):
        self.__date_creation = new_date

    date_creation = property(date_creation, set_date_creation)      # on définit la propriété date_creation
    # une propriété est un attribut qui est accessible en lecture et en écriture

    @property
    def taux_interet(self):
        return self.__taux_interet
    
    @taux_interet.setter
    def taux_interet(self, new_taux_interet):
        self.__taux_interet = new_taux_interet






