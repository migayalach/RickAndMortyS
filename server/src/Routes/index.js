const { Router } = require("express");
const mainRouter = Router();

const characterRouter = require("./characterRouter");
const favoriteRouter = require("./favoriteRouter");
const userRouter = require("./userRouter");

mainRouter.use("/characters", characterRouter);
mainRouter.use("/favorite", favoriteRouter);
mainRouter.use("/user", userRouter);

module.exports = mainRouter;
