const { Router } = require("express");
const {
  postFavHandlers,
  deleteFavHandlers,
  allFavorites,
  orderFavorites
} = require("../Handlers/favoritesHandlers");
const { verityId } = require("../Middleware/toolsMiddleware");
const favoriteRouter = Router();

favoriteRouter.get("/:id", allFavorites);
favoriteRouter.get("/", orderFavorites);
favoriteRouter.post("/", postFavHandlers);
favoriteRouter.delete("/:idUser/:id", verityId, deleteFavHandlers);

module.exports = favoriteRouter;
