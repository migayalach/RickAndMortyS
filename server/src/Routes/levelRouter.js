const { Router } = require("express");
const {
  createLevel,
  getLevelId,
  getNameLevel,
  editLevel,
  deleteLevel,
} = require("../Handlers/levelHandlers");
const levelRouter = Router();

levelRouter.post("/", createLevel);
levelRouter.get("/:idLevel", getLevelId);
levelRouter.get("/", getNameLevel);
levelRouter.put("/", editLevel);
levelRouter.delete("/:idLevel", deleteLevel);

module.exports = levelRouter;
