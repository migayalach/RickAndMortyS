const { Router } = require("express");
const mainRouter = Router();

const characterRouter = require("./characterRouter");

mainRouter.use("/characters", characterRouter);

module.exports = mainRouter;
