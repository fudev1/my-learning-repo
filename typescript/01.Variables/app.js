// Déclaration d'une variable
console.clear();
// Déclaration d'une variable avec le typage explicite
var nom = "Jean";
console.log(nom);
// Déclaration d'une variable
var nombre = 10;
// Déclaration d'une variable pour un tableau de nombres
var monTableau = [1, 2, 3, 4, 5];
console.log("tableau ".concat(monTableau));
var monTuple = ["Jean", 10];
console.log("monTuple ".concat(monTuple));
var monObjet = { nom: "Jean", age: 10 };
console.log("monObjet ".concat(monObjet));
var monUnion = "Jean";
console.log("monUnion ".concat(monUnion));
var monLitteral;
monLitteral = "trois";
console.log("monLitteral ".concat(monLitteral));
var maConst = "toto";
maConst = "toto";
// déclaration d'une variable 
var maVariable = "toto";
// créer une fonction qui prend un type en paramètre
function maFonction(maVariable) {
    console.log("maVariable : " + maVariable);
}
maFonction("pd");
