"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const livre_1 = require("./models/livre");
const livre1 = new livre_1.Livre();
// Si on construit un nouveau livre on aura accès uniquement aux attributs publics du constructeur (auteur)
livre1.Auteur = "Jean Dupont";
livre1.Titre = "Le seigneur de l'ombre";
console.log(`Le titre de mon livre 1 est : ${livre1.Titre}`);
