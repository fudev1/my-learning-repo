"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bibliotheque_1 = require("./models/bibliotheque");
const livreLudique_1 = require("./models/livreLudique");
const livreTechnique_1 = require("./models/livreTechnique");
const livre1 = new livreLudique_1.LivreLudique("Le seigneur des anneaux", "Jhon Doe", 1954, "+10");
const livre2 = new livreTechnique_1.LivreTechnique("Ts pour les nuls 🤯", "Tf_fullstack_python_2", 2024, "informatique", "Débutants");
const livre3 = new livreLudique_1.LivreLudique("Martine à la plage", "Jhon Doe", 2004, "✔");
const livreLudique4 = new livreLudique_1.LivreLudique("Martine à la plage - 2", "Jhon Doe", 2004, "✔");
const livreTechnique1 = new livreTechnique_1.LivreTechnique("Paradigne POO", "Microsoft", 2007, "Informatique", "expert");
const bibliotheque = new bibliotheque_1.Bibliotheque();
bibliotheque.Nom = "Bibliothèque centrale";
bibliotheque.AjouterLivre(livre1);
bibliotheque.AjouterLivre(livre2);
bibliotheque.AjouterLivre(livre3);
bibliotheque.AjouterLivre(livreLudique4);
bibliotheque.AjouterLivre(livreTechnique1);
// Affichage des livres
bibliotheque.AfficherLivres();
const nonLivreRecherche = "Martine à la plage";
const livreRecupere = bibliotheque.ObtenirLivre(nonLivreRecherche);
if (livreRecupere) {
    livreRecupere === null || livreRecupere === void 0 ? void 0 : livreRecupere.AfficherLivre();
}
else {
    console.log(`Le livre "${nonLivreRecherche}" n'existe pas...`);
}
// Suppresion d'un livre
bibliotheque.SupprimerLivre(nonLivreRecherche);
console.log("Affichage après suppression :");
bibliotheque.AfficherLivres();
// const test: ILivre = livreTechnique1;
// // const test2 : ILivre = livreLudique4;
// test.AfficherLivre();
