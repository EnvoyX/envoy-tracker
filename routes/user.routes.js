import { Router } from "express";
import authorized from "../middlewares/auth.middleware.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

// GET /users -> get all users
// GET /users/:id -> get user by id

userRouter.get("/", getUsers);
userRouter.get("/:id", authorized, getUser);

userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new users" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE user detail" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE user" });
});

export default userRouter;
