"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const banque_1 = require("./models/banque");
const courant_1 = require("./models/courant");
const epargne_1 = require("./models/epargne");
const personne_1 = require("./models/personne");
const personne = new personne_1.Personne();
personne.Nom = "Doe";
personne.Prenom = "Jhon";
personne.DateNaissance = new Date("1986-05-16");
console.log("Test affichage personne :");
console.log(`Nom : ${personne.Nom}`);
console.log(`Nom : ${personne.Prenom}`);
console.log(`Nom : ${personne.DateNaissance}`);
const courant = new courant_1.Courant();
courant.Numero = "0000-0000-0001";
courant.LigneDeCredit = 500;
courant.Titulaire = personne;
const epargne = new epargne_1.Epargne();
epargne.Numero = "0000-0000-0002";
epargne.Titulaire = personne;
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
epargne.Depot(2000);
console.log(`Solde après dépôt de 2000 : ${epargne.Solde}`);
epargne.Retrait(700);
console.log(`Solde après retrait de 700 : ${epargne.Solde}`);
const banque = new banque_1.Banque();
banque.Nom = "Belfius";
banque.Ajouter(courant);
banque.Ajouter(epargne);
let compte = "0000-0000-0005";
const compteRecup = banque.ObtenirCompte(compte);
if (compteRecup) {
    console.log(`Le numéro ${compte} apartient à ${compteRecup.Titulaire.Prenom}`);
}
else {
    console.log(`Le numéro ${compte} n'existe pas...`);
}
console.log(`Somme des avoirs des comptes de ${personne.Nom} ${personne.Prenom} sont de : ${banque.AvoirDesComptes(personne)}`);
banque.Supprimer("0000-0000-0001");
console.log(`Somme des avoirs des comptes après suppresion du compte ...01 de ${personne.Nom} ${personne.Prenom} sont de : ${banque.AvoirDesComptes(personne)}`);
console.log(`Date du dernier retrait sur le compte epargne ${epargne.DateDernierRetrait.toISOString()}`);
