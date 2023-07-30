const { Router } = require("express");
const {
  postFavHandlers,
  deleteFavHandlers,
} = require("../Handlers/favoritesHandlers");
const favoriteRouter = Router();

favoriteRouter.post("/", postFavHandlers);
favoriteRouter.delete("/:id", deleteFavHandlers);

module.exports = favoriteRouter;
