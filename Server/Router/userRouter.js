import express from "express";
import * as Ctrls from "../Controllers/user.js";

const userRouter = express.Router();
userRouter.post("/register", Ctrls.registerUser);
userRouter.post("/login", Ctrls.userLogin);
userRouter.get("", Ctrls.getAll);

export default userRouter;
