// Spread operator sur tableaux
const fruits = ['Avocat', 'Poires'];
const gras = ['Frites', 'BK'];

// Le spread operator (...) sur tableau va permettre de concaténer plusieurs tableaux en un seul
// Ca va déployer / étaler les éléments des différents tableaux dans un nouveau
const ensembleFruitsGras = [...fruits, ...gras];
console.log(ensembleFruitsGras);
const ensembleFruitsGrasV2 = [...ensembleFruitsGras, 'Florent', 33];
console.log(ensembleFruitsGrasV2);

// Modification
const ensembleFruitsGrasV3 = [...ensembleFruitsGrasV2.slice(0,2), 'Pommes'];
console.log(ensembleFruitsGrasV3);


// Spread operator sur objects
const user = {id: 1, name: 'Libouton'};
const details = {id: 4, age: 35, ville: 'Charleroi'};

const userDetails = {...user, ...details};
console.log(userDetails);

// Pour mettre à jour une clé/Valeur, on spread (...) dans l'object et on vient spécifié la clé que l'on " modifier "
// et on lui affecte une nouvelle valeur.
const userDetailsUpdated = {...userDetails, ville: 'Bruxelles'};
console.log(userDetailsUpdated);



// Rest operator
// function testRest(name, ...param) {} : va spécifier que la fonction prend un nombre indéfini de paramètre SUR et uniquement SUR
// le paramètre ou il est appliqué.

function somme(...nombre) {
    console.log('affichage du rest parameter et ses valeurs : ', nombre);
    
    return nombre.reduce((total, val) => total + val, 0);
}
console.log(somme(2,42,6,8,9,10,22));

// Rest operator et destructuring
const user2 = {
    id: 1,
    nom: 'Lahlou',
    prenom: 'Soukaina',
    age: 28,
    hobby: 'Lecture'
};

const {nom, age, ...infos} = user2;
console.log(nom, age);
console.log(infos);

