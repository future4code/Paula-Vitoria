import { Request, Response } from "express";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";
import selectUser from "../data/selectUserByEmail";

export default async function login(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      throw new Error("'email' and 'password' are required ");
    }
    const user = await selectUser(email);
    console.log(user);

    if (!user) {
      throw new Error("User not found");
    }

    const hashCompare = await compare(password, user.password);

    if (!user || !hashCompare) {
      throw new Error("Invalids Credentials");
    }

    const token: string = generateToken({ id: user.id, role: user.role });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
