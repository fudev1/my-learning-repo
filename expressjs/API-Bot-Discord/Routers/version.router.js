// pour créer un router je dois import express
const { Router } = require('express');

// récupérer la version dans le fichier package.json
const { version } = require('../package.json');

// et je créée une constance pour appeler Router()
const versionRouter = Router();

versionRouter.get('/version', (request, response) => {
    response.send({
        version
    })
})

exports.versionRouter = versionRouter;