const { Router } = require("express");
const { secretMiddleware } = require("../Middlewares/secretMiddleWare");
const path = require("path");

const dashboardRouter = Router();

dashboardRouter.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "views", "dashboard.html"));
});

dashboardRouter.use(secretMiddleware);

exports.dashboardRouter = dashboardRouter;
