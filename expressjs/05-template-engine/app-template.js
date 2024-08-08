const express = require('express');
const mustacheExpress = require('mustache-express');
const { movieRouter } = require('./Routers/movie.router');
port = "8080";

const server = express();

// on rajoute mustache dans les engines que
// express peut utiliser pour l'application
server.engine('mustache', mustacheExpress());

// on dit à express d'utiliser mustache par défaut
server.set('view engine', 'mustache');

// on set le dossier qui contiendra les vues html
server.set('views', './Views');

server.use('/movies', movieRouter);




server.listen(port, () => {
    console.log(`server ok sur port ${port}`);
});