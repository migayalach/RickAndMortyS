const { Router } = require("express");
const mainRouter = Router();

const characterRouter = require("./characterRouter");
const userRouter = require("./userRouter");

mainRouter.use("/characters", characterRouter);
mainRouter.use("/users", userRouter);

module.exports = mainRouter;
