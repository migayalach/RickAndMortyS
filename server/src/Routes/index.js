const { Router } = require("express");
const mainRouter = Router();

const characterRouter = require("./characterRouter");
const favoriteRouter = require("./favoriteRouter");
const userRouter = require("./userRouter");
const levelRouter = require("./levelRouter");

mainRouter.use("/characters", characterRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/favorite", favoriteRouter);
mainRouter.use("/level", levelRouter);

module.exports = mainRouter;
