const { Router } = require('express'); // on va chercher Router dans le package express
const { connectToDatabase } = require('../database/database-connection');

const citationsRouter = Router();

citationsRouter.get('/citations', async (request, response) => {
    const db = await connectToDatabase();
    const citations = db.collection('citations');
    response.send((await citations.find().toArray()));
});

exports.citationsRouter = citationsRouter;