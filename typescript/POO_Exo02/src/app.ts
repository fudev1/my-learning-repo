import { Banque } from "./models/banque";
import { Courant } from "./models/courant";
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

const courant2: Courant = new Courant();
courant2.Numero = "0000-0000-0002";
courant2.LigneDeCredit = 1500;
courant2.Titulaire = personne;

console.log("Test affichage courant");
console.log(`Numéro : ${courant.Numero}`);
console.log(`Solde : ${courant.Solde}`);
console.log(`Ligne de credit : ${courant.LigneDeCredit}`);
console.log(`Titulaire : `, courant.Titulaire);

// Test méthodes retrait & dépôt sur compte courant "0000-0000-0001"
courant.Depot(2000);
console.log(`Solde après dépôt de 2000 : ${courant.Solde}`);

courant.Retrait(700);
console.log(`Solde après retrait de 700 : ${courant.Solde}`);

// Test méthodes retrait & dépôt sur compte courant "0000-0000-0002"
courant2.Depot(2000);
console.log(`Solde après dépôt de 2000 : ${courant2.Solde}`);

courant2.Retrait(700);
console.log(`Solde après retrait de 700 : ${courant2.Solde}`);

const banque: Banque = new Banque();
banque.Nom = "Belfius";
banque.Ajouter(courant);
banque.Ajouter(courant2);

let compte: string = "0000-0000-0005";
const compteRecup: Courant | undefined = banque.ObtenirCompte(compte);

if (compteRecup) {
  console.log(
    `Le numéro ${compte} apartient à ${compteRecup.Titulaire.Prenom}`
  );
} else {
  console.log(`Le numéro ${compte} n'existe pas...`);
}

console.log(
  `Somme des avoirs des comptes de ${personne.Nom} ${
    personne.Prenom
  } sont de : ${banque.AvoirDesComptes(personne)}`
);

banque.Supprimer("0000-0000-0001");

console.log(
  `Somme des avoirs des comptes après suppresion du compte ...01 de ${
    personne.Nom
  } ${personne.Prenom} sont de : ${banque.AvoirDesComptes(personne)}`
);
