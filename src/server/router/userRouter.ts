import express from "express";
import { getUser, login, register } from "../controller";
const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/getUser", getUser);

export default userRouter;
