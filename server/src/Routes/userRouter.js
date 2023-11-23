const { Router } = require("express");
const { postUserMiddleware } = require("../Middleware/userMiddleware");
const { verityId } = require("../Middleware/toolsMiddleware");
const {
  createUser,
  getUserId,
  getNameUser,
  updateUser,
  deleteUser,
} = require("../Handlers/userHandlers");
const userRouter = Router();

userRouter.post("/", postUserMiddleware, createUser);
userRouter.get("/:idUser", verityId, getUserId);
userRouter.get("/", getNameUser);
userRouter.put("/", updateUser);
userRouter.delete("/:idUser", deleteUser);

module.exports = userRouter;
