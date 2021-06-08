import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const userData = {
      email,
      password,
    };

    if (!email || !email.includes("@")) {
      throw new Error("Invalid email");
    }
    if (!password) {
      throw new Error("Password Required!");
    }

    const user = await selectUserByEmail(userData.email);
    console.log(user);

    if (userData.password !== user.password) {
      throw new Error("Invalid password");
    }
    if (userData.email !== user.email) {
      throw new Error("Invalid Email");
    }
    const token: string = generateToken(user.id);

    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
