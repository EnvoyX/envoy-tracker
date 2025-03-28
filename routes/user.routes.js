import { Router } from "express";

const userRouter = Router();

// GET /users -> get all users
// GET /users/:id -> get user by id

userRouter.get("/", (req, res) => {
  res.send({ title: "GET all users" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "GET user detail" });
});

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
