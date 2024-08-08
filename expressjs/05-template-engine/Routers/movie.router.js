const { Router } = require('express');

const movieRouter = Router();

movieRouter.get('/', (req, res) => {
    // comble les trou dans le template avec les valeurs dynamique
    // on set le 1er argument avec le nom du fichier 
    // le 2nd avec un obj avec les valeurs
    res.render('movies', {
        title: 'ma vidéothèque',
        message: 'Bienvenue sur ma liste de films ⭐',
        // on peut créer un tableau, un boolean qui affiche ou pas le message dans #movies > html
        // on va créer un tableau d'objets
        movies : [
            {
                title: 'Blablaland',
            },
            {
                title: 'Mario the film',
            },
        ],
        // cette fonction evite de faire un li dans le html
        listElement: function() {
            // 1er : balise html
            // 2nd : le rendu à rentrer dans la balise
            return function(text, render) {
                return '<li>' + render(text) + '</li>';
            }
        }
    });
});

exports.movieRouter = movieRouter;