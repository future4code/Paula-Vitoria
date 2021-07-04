import { Request, Response } from "express";
import { signupBusiness } from "../business/signupBusiness";
import { userData } from "../model/user";

export default async function signup(req: Request, res: Response) {
  try {
    const { name, email, password, role } = req.body;

    const newUser: userData = {
      name,
      email,
      password,
      role,
    };
    const token = await signupBusiness(newUser);

    res.status(200).send({ message: "user created!", token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}
