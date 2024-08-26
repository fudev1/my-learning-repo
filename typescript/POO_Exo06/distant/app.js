"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const banque_1 = require("./models/banque");
const courant_1 = require("./models/courant");
const epargne_1 = require("./models/epargne");
const personne_1 = require("./models/personne");
const personne = new personne_1.Personne("Doe", "Jhon", new Date("1986-05-16"));
console.log("Test affichage personne :");
console.log(`Nom : ${personne.Nom}`);
console.log(`Nom : ${personne.Prenom}`);
console.log(`Nom : ${personne.DateNaissance}`);
const courant = new courant_1.Courant("0000-0000-0001", 500, personne, 500);
const courant2 = new courant_1.Courant("0000-0000-0001", 500, personne, -500);
const epargne = new epargne_1.Epargne("0000-0000-0002", 500, personne);
const banque = new banque_1.Banque("Belfius");
// console.log("Appication des intérêts");
// courant.AppliquerInteret() // Applique le polylorphisme
// courant2.AppliquerInteret() // Applique le polylorphisme
// epargne.AppliquerInteret() // Applique le polylorphisme
// console.log(`Pour un compte courant disposant d"un solde positif de 500 € voici le résultat après application d'intérêt : ${courant.Solde} €`);
// console.log(`Pour un compte courant disposant d"un solde négatif de 500 € voici le résultat après application d'intérêt : ${courant2.Solde} €`);
// console.log(`Pour un compte epargne disposant d"un solde positif de 500 € voici le résultat après application d'intérêt : ${epargne.Solde} €`);
banque.Ajouter(epargne);
banque.Ajouter(courant);
banque.Ajouter(courant2);
const epargneClient = epargne;
// Le client effectue des opérations
console.log(`Je suis le client  qui effectue un depot de 500 € sur mon compte epargne`);
epargneClient.Depot(500);
console.log(`Je suis le client  qui effectue un retrait de 500 € sur mon compte epargne`);
epargneClient.Retrait(300);
console.log(`Le solde du compte epargne client est présent de ${epargneClient.Solde}`);
// // Le banquier effectuer
// const epargneBanquier: IBanker = epargne;
// console.log(`Je suis le banquier qui consulte les informations du client`);
// // Versement du salaire
// epargneBanquier.Depot(1500);
// // Domiciliation pour internet
// epargneBanquier.Retrait(75);
// // Aplpique des intérets a une date donné exemeple => début de chaque mois
// epargneBanquier.AppliquerInteret();
// // Consulte les informations du titulaire
// console.log(`Nom : ${epargneBanquier.Titulaire.Nom}`);
// console.log(`Prenom : ${epargneBanquier.Titulaire.Prenom}`);
// // le banquier regarde le solde après application des intérets
// console.log(
//   `Solde du compte du client vus par le banquier : ${epargneBanquier.Solde} €`
// );
