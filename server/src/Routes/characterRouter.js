const { Router } = require("express");
const { verityId } = require("../Middleware/toolsMiddleware");
const characterRouter = Router();

const {
  getCharacterHandler,
  getNameCharacterHandler,
} = require("../Handlers/charactersHandlers");

characterRouter.get("/:id", verityId, getCharacterHandler);
characterRouter.get("/", getNameCharacterHandler);

module.exports = characterRouter;
