const { Router } = require("express");
const mainRouter = Router();

const characterRouter = require("./characterRouter");
const loginRouter = require("./loginRouter");
const favoriteRouter = require("./favoriteRouter");
const userRouter = require("./userRouter");

mainRouter.use("/characters", characterRouter);

mainRouter.use("/favorite", favoriteRouter);
mainRouter.use("/deleteFav", favoriteRouter);

mainRouter.use("/login", loginRouter);
mainRouter.use("/user", userRouter);

module.exports = mainRouter;

//user => login
//favorite => favorite, deleteFav
//character