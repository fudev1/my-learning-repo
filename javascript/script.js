let maVariable = 'coucou';
const taVariable = 'Hello World';
let world = 'world';

maVariable = 'Jambon';

// Opérateurs d'égalités
// = affectation
// == va vérifier l'égalité dans la valeur ---> 1 = '1' // true
// === va vérifier l'égalité dans la valeur ET le type ---> 1 = '1' // false

// --- STRING --- //

// Concaténation de deux strings
console.log('Hello' + ' ' + 'World');
console.log('Hello ' + 'World');

// Template literal
console.log(`Hello, ${world}`); // Altgr + £ -> espace

// Passer un string en majuscule
console.log("Hello world".toUpperCase()); // HELLO WORLD

// Passer un string en minuscule
console.log("Hello WORLD".toLowerCase()); // hello world

// Split : Divise une chaine de caractère
const str = "Hello les Pythons(2)";
const strArr = str.split(' ');
console.log(strArr);  // ['Hello', 'les', 'Pythons(2)']

// Replace : remplace l'élément passé en premier param par l'élément passé en deuxième param
const newArr = str.replace('Hello', 'Bonjour');
console.log(newArr);

// Regular expression : rechercher un élément ressemblant (un motif) dans une chaine de caractère
const regex = /pythons/i // --> i signale a la regex de ne pas check la casse
console.log(regex.test(str));

// CharAt: renvoie le caractère situé à un index spécifié dans le param
console.log(str.charAt(0)); // H

// EndsWith: vérifié si la chaine de caractère termine avec un élément passé en param
console.log(str.endsWith(')'));

// --- NUMBER --- //

console.log('--------------------------------------------------------');

// Opérations arithmétiques
// + -> addition
// - -> soustraction
// * -> multiplication
// / -> division
// % -> modulo

const num = 12345;
const numStr = "12345";
const numFloat = '42.5';

// toString(): convertir en chaine de caractère
console.log(num.toString()); // '12345'

// parseInt(): convertir en number
console.log(parseInt(numStr)); // 12345

// parseFloat(): convertir en number en gardant les décimales
console.log(parseFloat(numFloat)); // 42.5

// isNaN -> NaN (Not a Number): Vérifie si l'élément passé en param est bien un number
console.log(isNaN(numStr)); // false

// Annotation des exposants
console.log(2e5); // 200000

// toExponential(): renvoi une chaine de caractère représentant le nombre dans une notation exponentielle
console.log(num.toExponential());

// toPrecision(): renvoie une chaine de caractère représentant le nombre dans une notation exponentielle avec une précision simplifié
console.log(num.toPrecision(2));

// Math object: offre un certain nombre de méthodes et des propriétés pour les numbers
console.log(Math.PI); // 3.14...
console.log(Math.sqrt(16)); // 4
console.log(Math.round(2.7)); // 3
console.log(Math.floor(3.8)); // 3
console.log(Math.ceil(3.2)); // 4
console.log(Math.random()); // Sans param fait un random entre 0 et 1
console.log(Math.pow(2,3)); // 8
console.log(Math.abs(-15)); // 15

// --- ARRAY --- //

console.log('--------------------------------------------------------');

let arr = [1,2,3];
let arr2 = [-2, -1, 0, 1, 2];
let arr3 = [1, [2, [3, 4]]];
let arr4 = [[2, 3], [4, 5]];
let arr5 = ['Banane', 'Avocat', 'Frites', 'BK'];

// push(): Ajouter un élément directement à la fin du tableau
arr.push(4) // [1,2,3,4]
console.log(arr);

// pop(): Supprimer le dernier élément du tableau
arr.pop();
console.log(arr);

// map(): crée un nouveau tableau avec les résultats de l'appel de fonction pour chaque élément du tableau
let arrMap = arr.map((x) => x * 2)
console.log(arr.map(x => x * 2));

// filter(): crée un nouveau tableau avec tous les éléments qui répondent au test de la fonction
console.log(arr.filter(x => x % 2 === 0)); // [2]

// reduce(): Appliquer une fonction qui va prendre deux paramètres
// L'accumulateur : va servir de somme pour l'opération effectuée dans la fonction 
// La valeur actuelle de l'itération : va servir à incrémenter la valeur de la somme (accumulateur)
// La valeur initiale de l'accumulateur = 0 ici dans l'exemple
// Première itération : 0 + 1
// Deuxième itération : 1 + 2
// Troisième itération : 3 + 3
// Résultat = 6
console.log(arr.reduce((acc, val) => acc + val, 0));

// Some(): teste si au moins un élément du tableau répond au test passé en paramètre
const hasNegative = arr2.some((num) => num < 0);
console.log(hasNegative); // true

// Every(): test si tous les éléments du tableau répondent au test passé en paramètre
const allPositive = arr2.every(num => num > 0);
console.log(allPositive);

// Find(): renvoi la première valeur passant le test passé en paramètre
console.log(arr.find(num => num > 2)); // Si rien n'est retourné il renvoi -1 --> false

// Includes(): renvoie true si le tableau contient une valeur passée en paramètre
console.log(arr.includes(1)); // true

// IndexOf(): renvoi l'index de la première occurence de valeur donnée en paramètre 
console.log(arr.indexOf(2));

// Flat(): Crée un nouveau tableau avec tous les éléments du sous-tableau concaténé en lui de manière récursive
// On peut, en paramètre, lui passer la profondeur voulu
console.log(arr3.flat(2)); // Infinity renvoi le plus petit niveau possible -- Sans paramètre ne retire qu'un niveau de profondeur

// FlatMap(): Crée un nouveau tableau avec tous les éléments du sous-tableau concaténé en lui de manière récursive
// mais également effectuer une opération sur les valeurs à chaque itération
console.log(arr4.flatMap(subArray => subArray.map(val => val * val)));

// FindIndex(): Renvoi l'index du premier élément du tableau qui répond à une opération
console.log(arr5.findIndex(fruit => fruit === 'Avocat'));

// --- Objects --- //

console.log('--------------------------------------------------------');

let obj = {
    a: 42,
    b: 'coucou'
};

// Ajouter une propriété à un object
obj.c = 'Python';
console.log(obj);

// delete:  Supprimer une propriété d'un object
delete obj.c;
console.log(obj);

// fromEntries():  Création d'un object depuis des 'entries' sous-tableaux dans un tableau
const entries = [['name', 'Gobin'], ['age', 33], ['city', 'Binche']];
const objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries);

// keys(): Récupérer les clés d'un object
const keys = Object.keys(objFromEntries);
console.log(keys);

// values(): Récupérer les valeurs d'un object
const values = Object.values(objFromEntries);
console.log(values);

// Assign(): Copies toutes les clés / valeurs d'un object dans un autre object
const target = {a: 1, b: 2};
const source = {b: 7, c: 9};
const newObject = Object.assign(target, source);
console.log(newObject);

// getOwnPropertyNames(): Renvoi un tableau qui va contenir toutes les propriétés de l'object
console.log(Object.getOwnPropertyNames(newObject));

// --- Functions --- //

console.log('--------------------------------------------------------');

console.log(addition(2,2)); // Fonctionne
// console.log(soustraction(5,2)); // Ne fonctionne pas


// Déclaration standard
// Hoisting : Possibilité d'appeler la fonction AVANT sa déclaration dans le code
// Elle va créer son propre contexte THIS 
// Elle peut anonyme ou nommée
function addition(a,b) {
    return a + b
};
console.log(addition(2,2));

// Fonction anonyme
// Pas hoisting
// Ne crée pas de contexte THIS. Elle utilise le THIS global
// Toujours anonyme
// Plus concise et claire que la function standard surtout pour des fonctions courtes
const soustraction = (a,b) => {
    return a - b
};
console.log("Soustraction :", soustraction(5,2));

const addition2 = (a,b) => a + b;

const sayHello = message => message

// arr.map(val => val * 2)
// arr.map((val, index) => val * index)
// arr.map(val => {
//     if (val > 5) {
//         return val * 2
//     } else {
//         return;
//     }
// })

// Callbacks 

function repeat(count, callback) {
    for (let i = 0; i < count; i++) {
        callback(i)
    }
}
repeat(5, console.log);

const greet = (name, callback) => {
    console.log(`Hello ${name}`);
    callback();
};
greet('Nicolas', () => {
    console.log('Le callback est appelé');
});

// Immediatly Invoke Function Expression (IIFE)
(function immediatly() {
    console.log('Je suis appelé dès l\'éxécution du script');
})();

// --- Conditionnel --- //

console.log('--------------------------------------------------------');

// IF statement
const a = 2;
const b = 9;
let cpt = 0;

if (a > b) {
    console.log('a plus grand que b');
} else if (a < b) {
    console.log('a plus petit que b');
} else if (a === b) {
    console.log('a est strictement égal à b');
} else {
    console.log('Nope');
};

// Switch

switch (a) {
    case 1: 
            console.log('a vaut 1');
            break;
    case 2: 
            console.log('a vaut 2');
            break;
    default: 
            console.log('Nope');
};

console.log(a > b ? 'oui' : 'non');

// --- Loop --- //
for (let i = 0; i < b; i++) {
    console.log(i);
}

for (let elem in objFromEntries) {
    console.log(elem + ': ' + objFromEntries[elem]);
};

while (cpt < 10) {
    console.log(cpt);
    cpt++
};

do {
    console.log('do :' + cpt);
    cpt++
} while (cpt < 20);