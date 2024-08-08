const express = require('express');
const server = express();
port = "8989";


server.use('/assets', express.static(__dirname + '/assets'));

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})



server.listen(port, (req, res) => {
    console.log(`server ok sur port : ${port}`);
});