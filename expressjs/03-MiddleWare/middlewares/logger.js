
// un middleware est une fonction 
// avec 3 arguments
// Request : la requête faite à notre serveur 
// Response : la réponse que l'on prépare à renvoyer
// Next : le prochain middleware a appeler ou la route le cas échéant

const fs = require('fs/promises');

async function loggerMiddleware(request, response, next){
    await next(); 
    console.log('je suis le module authorize')
    // au lieu de mettre next à la fin de la fonction on peut le mettre ici
    // en await
    // ça va d'abord aller voir le middleware qui next avant d'exe celui-ci
    // l'ordre des priorité se fait dans l'app (use.function)

    await fs.appendFile('logs.txt',
    `${new Date().toISOString()} ${request.method} ${request.url}\n`);
    console.log('Je suis le logger middleware')
}

exports.loggerMiddleware = loggerMiddleware;