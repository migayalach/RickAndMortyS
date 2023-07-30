const { Router } = require("express");
const mainRouter = Router();

const characterRouter = require("./characterRouter");
const loginRouter = require("./loginRouter");
const favoriteRouter = require("./favoriteRouter");

mainRouter.use("/characters", characterRouter);
mainRouter.use("/login", loginRouter);
mainRouter.use("/favorite", favoriteRouter);
mainRouter.use("/deleteFav", favoriteRouter);

module.exports = mainRouter;
