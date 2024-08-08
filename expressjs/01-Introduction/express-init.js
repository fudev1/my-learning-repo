const express = require('express');
const userRouter = require('./Routers/user.router'); // on appelle le fichier user.router.js pour appeler la fonction app.user(router)

// Créer une instance d'Express en appelant `express()`
// Ce qui va représenter notre serveur
const app = express();

app.get('/hello', (request, response) => {
    response.send('hello world !');
})


// On appelle le module exporter dans le fichier (user.router.js)
app.use(userRouter);

// Pour démarrer le serveur : 
// On appelle la méthode 'listen' qui va écouter un port
app.listen(8001, () => {
    console.log('Prêt et à l\'écoute');
});

