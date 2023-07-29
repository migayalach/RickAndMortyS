const { Router } = require("express");
const characterRouter = Router();
const { getCharacterHandler } = require("../Handlers/charactersHandlers");

characterRouter.get("/:id", getCharacterHandler);

module.exports = characterRouter;
