from models.Livre import Livre

# Création d'instances de livres
livre1 = Livre("Le petit Prince", "Antoine de Saint-Exupéry")
livre2 = Livre("L'épée de vérité", "Terry Goodkind")
livre3 = Livre("Moby Dick", "Herman Melville")

# Utilisation de la méthode statique
Livre.afficher_nombre_livres()

# Utilisation de méthodes d'instances
livre1.afficher_details();
livre2.afficher_details();
livre3.afficher_details();

# Récupération de l'attribut de classe (par la classe)
print(f"Nombre de livre: {Livre.nombre_livres}")

# Récupération de l'attribut de classe (par l'instance)
print(f"Nombre de livre: {livre1.nombre_livres}")