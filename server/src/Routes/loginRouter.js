const { Router } = require("express");
const loginApp = require("../Handlers/loginHandlers");
const { postUserMiddleware } = require("../Middleware/userMiddleware");
const loginRouter = Router();

loginRouter.post("/", postUserMiddleware, loginApp);

module.exports = loginRouter;
