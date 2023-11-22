const { Router } = require("express");
const { postUserMiddleware } = require("../Middleware/userMiddleware");
const { verityId } = require("../Middleware/toolsMiddleware");
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
userRouter.get("/:idUser", verityId, getUserId);
userRouter.get("/", getNameUser);
userRouter.put("/", updateUser);
userRouter.delete("/:idUser", deleteUser);

// userRouter.get("/", loginHandlers);

module.exports = userRouter;
