const { Router } = require('express');
const path = require ('path');

const forbiddenRouter = Router();



forbiddenRouter.get('/',(request, response)=>{
    response.sendFile(path.join(__dirname, '..', 'views', 'forbidden.html'));
})



exports.forbiddenRouter= forbiddenRouter;