const { Router } = require("express");
const {
  postFavHandlers,
  deleteFavHandlers,
  allFavorites,
} = require("../Handlers/favoritesHandlers");
const { verityId } = require("../Middleware/toolsMiddleware");
const favoriteRouter = Router();

favoriteRouter.get("/:id", verityId, allFavorites);
favoriteRouter.post("/", postFavHandlers);
favoriteRouter.delete("/:idUser/:id", verityId, deleteFavHandlers);

module.exports = favoriteRouter;
