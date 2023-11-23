const { Router } = require("express");
const loginApp = require("../Handlers/loginHandlers");
const loginRouter = Router();

loginRouter.post("/", loginApp);

module.exports = loginRouter;
