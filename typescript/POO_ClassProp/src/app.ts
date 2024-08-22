import { Livre } from "./models/livre";

const livre1: Livre = new Livre();

// Si on construit un nouveau livre on aura accès uniquement aux attributs publics du constructeur (auteur)
livre1.Auteur = "Jean Dupont"; 


livre1.Titre = "Le seigneur de l'ombre"; // accessible en écriture
console.log(livre1.Auteur); // accessible en lecture



console.log(`Le titre de mon livre 1 est : ${livre1.Titre}`);
