const { Router } = require("express");
const {
  postFavHandlers,
  deleteFavHandlers,
  allFavorites,
} = require("../Handlers/favoritesHandlers");
const { characterId } = require("../Middleware/characterMiddleware");
const favoriteRouter = Router();

favoriteRouter.get("/:id", characterId, allFavorites);
favoriteRouter.post("/", postFavHandlers);
favoriteRouter.delete("/:id", characterId, deleteFavHandlers);

module.exports = favoriteRouter;
