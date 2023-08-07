const { Router } = require("express");
const {
  postFavHandlers,
  deleteFavHandlers,
  allFavorites
} = require("../Handlers/favoritesHandlers");
const favoriteRouter = Router();

favoriteRouter.post("/", postFavHandlers);
favoriteRouter.delete("/:id", deleteFavHandlers);
favoriteRouter.get("/", allFavorites);

module.exports = favoriteRouter;
