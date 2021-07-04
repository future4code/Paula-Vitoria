import { Router } from "express";
import { login } from "../controller/user/login";
import { signup } from "../controller/user/signup";
import { makeFriendship } from "../controller/user/makeFriendship";

export const userRouter = Router();
userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/makefriendship", makeFriendship);
