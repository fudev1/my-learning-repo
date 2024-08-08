const express = require("express");
const mustacheExpress = require("mustache-express");

const { citationsRouter } = require("./Routers/citations.router");
const { forbiddenRouter } = require("./Routers/forbidden.router");
const { dashboardRouter } = require("./Routers/dashboard.router");
const { secretMiddleware } = require("./Middlewares/secretMiddleWare");
const { usersRouter } = require("./Routers/users.router");

port = "8080";

const server = express();

server.use("/assets", express.static(__dirname + "/assets"));
server.use(citationsRouter);
server.use("/dashboard", secretMiddleware);
server.use("/dashboard", dashboardRouter);
server.use("/forbidden", forbiddenRouter);
server.use("/users", usersRouter);

server.engine("mustache", mustacheExpress());
server.set("view engine", "mustache");
server.set("views", "./Views");

server.listen(port, () => {
  console.log(`Serveur ok sur le port ${port}`);
});
