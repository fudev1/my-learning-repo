const { Router } = require('express');
const versionRouter = Router();

versionRouter.get('/', (req, response) => {
    const version = '1.0.0';
    response.status(200).json({
        name : 'API',
        version : '1.0.0',

    })
});

module.exports = versionRouter;