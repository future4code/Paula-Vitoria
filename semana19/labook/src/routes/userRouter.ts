import { Router } from "express";

export const userRouter = Router();
userRouter.post("/signup");
userRouter.post("/login");