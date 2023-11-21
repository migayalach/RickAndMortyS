const { Router } = require("express");
const {
  postFavHandlers,
  deleteFavHandlers,
  allFavorites,
} = require("../Handlers/favoritesHandlers");
const { characterId } = require("../Middleware/characterMiddleware");
const favoriteRouter = Router();

favoriteRouter.post("/", postFavHandlers);
favoriteRouter.delete("/:id", characterId, deleteFavHandlers);
favoriteRouter.get("/:id", characterId, allFavorites);

module.exports = favoriteRouter;
