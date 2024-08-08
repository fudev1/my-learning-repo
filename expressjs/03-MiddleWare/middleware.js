const express = require('express');
const { loggerMiddleware } = require('./middlewares/logger');
const { authorize } = require('./middlewares/authorize');
const { userRouter } = require('./user-router');

const server = express();
port = "8001";


server.use(loggerMiddleware);
server.use(authorize);

server.get('/', (request, response) => {
    console.log('je suis la route bidon')
    response.send('Bidon c:')
})

server.listen(port, () => {
    console.log(`server ok, port ${port}`);
})