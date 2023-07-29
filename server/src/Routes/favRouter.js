const { Router } = require("express");
const favRouter = Router();

favRouter.post("/", (request, response) => {
  response.status(200).send("estamos en pos fav");
});

module.exports = favRouter;
