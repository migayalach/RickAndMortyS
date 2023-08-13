const { Router } = require("express");
const { userHandlers, loginHandlers } = require("../Handlers/userHandlers");
const userRouter = Router();

userRouter.post("/", userHandlers);
userRouter.get("/", loginHandlers);

module.exports = userRouter;
