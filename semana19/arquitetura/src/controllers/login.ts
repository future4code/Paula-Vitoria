import { Request, Response } from "express";
import { loginBusiness } from "../business/loginBusiness";

export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const token: string = await loginBusiness(email, password);
    res.status(200).send({ message: "user logged!", token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}
