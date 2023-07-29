const { Router } = require("express");
const deleteFavRouter = Router();

deleteFavRouter.delete("/:id", (request, response) => {
  response.status(200).send("estamos en delete");
});
module.exports = deleteFavRouter;
