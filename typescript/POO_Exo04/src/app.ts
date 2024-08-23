import { Banque } from "./models/banque";
import { Compte } from "./models/compte";
import { Courant } from "./models/courant";
import { Epargne } from "./models/epargne";
import { Personne } from "./models/personne";

const personne: Personne = new Personne();

personne.Nom = "Doe";
personne.Prenom = "Jhon";
personne.DateNaissance = new Date("1986-05-16");

console.log("Test affichage personne :");
console.log(`Nom : ${personne.Nom}`);
console.log(`Nom : ${personne.Prenom}`);
console.log(`Nom : ${personne.DateNaissance}`);

const courant: Courant = new Courant();
courant.Numero = "0000-0000-0001";
courant.LigneDeCredit = 500;
courant.Titulaire = personne;
courant.Depot(500);

const courant2: Courant = new Courant();
courant2.Numero = "0000-0000-0001";
courant2.LigneDeCredit = 500;
courant2.Solde = -500;
courant2.Titulaire = personne;

const epargne: Epargne = new Epargne();
epargne.Numero = "0000-0000-0002";
epargne.Titulaire = personne;
epargne.Depot(500);

const banque: Banque = new Banque();
banque.Nom = "Belfius";
banque.Ajouter(courant);
banque.Ajouter(courant2);
banque.Ajouter(epargne);

console.log("Appication des intérêts");
courant.Appliquerinteret(); // Applique le polylorphisme
courant2.Appliquerinteret(); // Applique le polylorphisme
epargne.Appliquerinteret(); // Applique le polylorphisme

console.log(
  `Pour un compte courant disposant d"un solde positif de 500 € voici le résultat après application d'intérêt : ${courant.Solde} €`
);
console.log(
  `Pour un compte courant disposant d"un solde négatif de 500 € voici le résultat après application d'intérêt : ${courant2.Solde} €`
);
console.log(
  `Pour un compte epargne disposant d"un solde positif de 500 € voici le résultat après application d'intérêt : ${epargne.Solde} €`
);
