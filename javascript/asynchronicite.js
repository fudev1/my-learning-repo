// Démonstration du principe d'asynchronicité

// console.log('Je clique sur un bouton, ce bouton effectue un process');

// setTimeout(() => {
//     console.log('Mon process est terminé en 3sec');
//     console.log('-------------------------------');
// }, 3000);

// console.log('Je suis déjà sur l\'autre page, j\'attends la fin du process');

// Une Promesse (Promise) est un object représentant l'état courant (ou état de complétion) 
// d'un processus asynchrone.
// Une Promise va être définie en 3 états possibles : 
//      - Pending (En attente) : État initial
//      - Fulfilled (Résolue) : Processus (opération) est réussi(e)
//      - Rejected (Rejetée) : Processus (opération) est échoué(e)

// setTimeout via Promise
const fakeHttpRequest = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id: 42, name: 'Florent'});
        }, 3000)
    });
};

// console.log('Début de la fake request');
// // Appel de la fonction et QUAND et UNIQUEMENT QUAND la requête est terminée, tu m'affiches les infos
// fakeHttpRequest().then((results) => {
//     console.log(results);
//     console.log('-------------------------------');
// });
// console.log('La fake request est en cours, veuillez patienter...');


// async function getData() {}
const getData = async () => {
    console.log('Début de la fake request');
    const results = await fakeHttpRequest();
    if (results) {
        console.log(results);
        console.log('-------------------------------');
    }

    console.log('Fin de la fake request');
};
getData();

// Principales différentes entre l syntaxe promise (.then().catch().finally())
// et la syntaxe async/await

// async/await : 
const exampleAsyncAwait = async () => {
    try {
        const result = await fakeHttpRequest()
        // const userData = await getUserData()
    } catch (err) {
        console.log(err);
    }
};

// Promise : 
fakeHttpRequest()
    .then(res => console.log(res))
    // .then(data => getUserData(data))
    .catch(err => console.log(err)) 
    .finally(console.log('requête terminée'))
