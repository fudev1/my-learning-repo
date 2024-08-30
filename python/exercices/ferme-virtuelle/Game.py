from models.EntiteFerme import EntiteFerme
from models.Plante import Plante
from models.Animal import Animal
from models.Player import Player
from data.elements import GRAINES, ANIMALS

class Game:
    def __init__(self):
        self.player = Player("Matt")

    def afficher_menu(self):
        print("\n-- Menu Principal --")
        print("1. Acheter une plante")
        print("2. acheter un animal")
        print("3. voir l'état de la ferme")
        print("4. statut joueur")
        print("5. quitter")

    def afficher_statut_joueur(self):
        print("\n--- Statut du joueur ---")
        print(f"Nom : {self.player.pseudo}")
        print(f"Argent : {self.player.argent}€")
        print(f"Inventaire :")
        for objet in self.player.inventaire:
            print(f"- {objet.nom}")

    def afficher_liste_plantes(self):
        print("\n--- Liste des plantes ---")
        for index, plante in enumerate(GRAINES, 1):
            print(f"{index}. {plante.nom} - Prix: {plante.prix_achat}€")
    
    def afficher_liste_animaux(self):
        print("\n--- Liste des animaux ---")
        for index, animal in enumerate(ANIMALS, 1):
            print(f"{index}. {animal.nom} - Prix: {animal.prix_achat}€")

    def acheter_plante(self):
        print("\n--- Acheter une plante ---")
        self.afficher_liste_plantes()
        choix = int(input("Choisissez une plante : ")) -1
        if 0 <= choix < len(GRAINES):
            plante = GRAINES[choix]
            if self.player.acheter(plante):
                print(f"Vous avez acheté la plante {plante.nom}")
            else:
                print(f"Vous n'avez pas assez d'argent pour acheter la plante {plante.nom}")
        else:
            print("Choix invalide, veuillez réessayer.")

    def acheter_animal(self):
        print("\n--- Acheter un animal ---")
        self.afficher_liste_animaux()
        choix = int(input("choisir un animal : ")) -1
        if 0 <= choix < len(ANIMALS):
            animal = ANIMALS[choix]
            if self.player.acheter(animal):
                print(f"Vous avez acheté l'animal {animal.nom}")
            else:
                print(f"Vous n'avez pas assez d'argent pour acheter l'animal {animal.nom}")
        else:
            print("Choix invalide, veuillez réessayer.")

    def afficher_etat_ferme(self):
        print("\n--- État de la Ferme ---")
        print(f"Argent disponible : {self.player.argent}€")
        print("Plantes dans la ferme :")
        for plante in self.player.parcelles:
            print(f"- {plante.nom} : {plante.jours_ecoules}/{plante.temps_croissance} jours")

        print("Animaux dans la ferme :")
        for animal in self.player.recoltes:
            print(f"- {animal.nom} : {animal.jours_ecoules}/{animal.temps_croissance} jours")

    def jouer(self):
        while True:
            self.afficher_menu()
            choix = input("Choisissez une option : ")
            if choix == "1":
                self.acheter_plante()
            elif choix == "2":
                self.acheter_animal()
            elif choix == "3":
                self.afficher_etat_ferme()
            elif choix == "4":
                self.afficher_statut_joueur()
            elif choix == "5":
                print("Merci d'avoir joué !")
                break
            else:
                print("Choix invalide, veuillez réessayer.")