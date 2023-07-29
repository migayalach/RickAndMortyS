const { Router } = require("express");
const loginHandlers = require("../Handlers/loginHandlers");
const loginRouter = Router();

loginRouter.get("/", loginHandlers);

module.exports = loginRouter;
