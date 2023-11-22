const { Router } = require("express");
const { postUserMiddleware } = require("../Middleware/userMiddleware");
const { characterId } = require("../Middleware/characterMiddleware");
const {
  createUser,
  getUserId,
  getNameUser,
  updateUser,
  deleteUser,
  loginHandlers,
} = require("../Handlers/userHandlers");
const userRouter = Router();

userRouter.post("/", postUserMiddleware, createUser);
userRouter.get("/:idUser", characterId, getUserId);
userRouter.get("/", getNameUser);
userRouter.put("/", updateUser);
userRouter.delete("/:idUser", deleteUser);

// userRouter.get("/", loginHandlers);

module.exports = userRouter;
