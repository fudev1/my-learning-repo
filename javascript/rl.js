// Importer readline
const readline = require('readline');

// Instanciation d'une interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Quel est ton prénom Mr Zerghani ?", (prenom) => {
    console.log(`Bonjour ${prenom}`);
    rl.close()
});
