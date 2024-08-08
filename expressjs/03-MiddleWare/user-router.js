const { Router } = require('express');

const userRouter = router();

userRouter.get('/users', (request, response) => {
    response.send('Bienvenue sur la route users');
})

exports.userRouter = userRouter;