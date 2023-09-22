const { Router } = require("express");
const characterRouter = Router();

const {
  getCharacterHandler,
  getNameCharacterHandler,
} = require("../Handlers/charactersHandlers");

characterRouter.get("/:id", getCharacterHandler);

characterRouter.get("/", getNameCharacterHandler);

module.exports = characterRouter;
