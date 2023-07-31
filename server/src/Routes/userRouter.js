const { Router } = require("express");
const userHandlers = require("../Handlers/userHandlers");
const userRouter = Router();

userRouter.post("/", userHandlers);

module.exports = userRouter;
