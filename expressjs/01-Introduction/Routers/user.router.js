const { Router, response } = require('express');

const userRouter = Router();

userRouter.get('/users', (request, response) => {
    response.send({
        users: [
            {
                firstname : 'Romain',
                lastname : 'Verliefden',
            }
        ]
    })
});

userRouter.get('/users/banane', (request, response) => {
    response.send('Banane mais écrit dans la console en brut');
});


// attention à l'odre des routes car si je met cette route avant :id 
// il va remplacer l'id qu'on met dans la requete et afficher la page avec le mot id qu'on a écrit
userRouter.get('/users/:id', (request, response) => {
    const { id } = request.params
    response.send(id);
})


module.exports = userRouter;