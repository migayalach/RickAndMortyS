const { Router } = require("express");
const { characterId } = require("../Middleware/characterMiddleware");
const characterRouter = Router();

const {
  getCharacterHandler,
  getNameCharacterHandler,
} = require("../Handlers/charactersHandlers");

characterRouter.get("/:id", characterId, getCharacterHandler);
characterRouter.get("/", getNameCharacterHandler);

module.exports = characterRouter;
