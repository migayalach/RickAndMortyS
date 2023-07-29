const { Router } = require("express");
const mainRouter = Router();

const characterRouter = require("./characterRouter");
const loginRouter = require("./loginRouter");
const favRouter = require("./favRouter");
const deleteFavRouter = require("./deleteFavRouter");

mainRouter.use("/characters", characterRouter);
mainRouter.use("/login", loginRouter);
mainRouter.use("/fav", favRouter);
mainRouter.use("/deleteFav", deleteFavRouter);

module.exports = mainRouter;
