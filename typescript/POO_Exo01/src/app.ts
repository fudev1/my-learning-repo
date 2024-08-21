import { Courant } from "./models/courant";
import { Personne } from "./models/personne";


const personne: Personne = new Personne() 

personne.Nom = "Dupont"
personne.Prenom = "Jean"
personne.DateNaissance = new Date("1990-01-01")

console.log("Test Affichage")
console.log(`Nom : ${personne.Nom}`)
console.log(`Prenom : ${personne.Prenom}`)
console.log(`Date de naissance : ${personne.DateNaissance}`)

const courant: Courant = new Courant()

courant.Numero = "0000-0000-0001"
courant.LigneDeCredit = 100;
courant.Titulaire = personne;

console.log("\nTest Affichage Courant")
console.log(`Numero : ${courant.Numero}`)
console.log(`Solde : ${courant.Solde}`)
console.log(`Ligne de credit : ${courant.LigneDeCredit}`)
console.log(`Titulaire :` , courant.Titulaire)

// Test de la méthode de retrait & dépot
courant.Depot(2000)
console.log(`Solde après dépot : ${courant.Solde}`)

courant.Retrait(1000)
console.log(`Solde après retrait : ${courant.Solde}`)
