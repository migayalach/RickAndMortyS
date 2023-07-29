const { Router } = require("express");
const userHandlers = require("../Handlers/usersHandlers");
const userRouter = Router();

userRouter.get("/", userHandlers);

module.exports = userRouter;
