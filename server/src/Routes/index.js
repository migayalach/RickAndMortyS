const { Router } = require("express");
const mainRouter = Router();

const characterRouter = require("./characterRouter");
const loginRouter = require("./loginRouter");
const favoriteRouter = require("./favoriteRouter");
const userRouter = require("./userRouter");

mainRouter.use("/characters", characterRouter);
mainRouter.use("/login", loginRouter);
mainRouter.use("/favorite", favoriteRouter);
mainRouter.use("/deleteFav", favoriteRouter);
mainRouter.use("/user", userRouter);

module.exports = mainRouter;
