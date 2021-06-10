import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { userCredentials } from "../types";
import { compare } from "../services/hashManager";
import selectUser from "../data/selectUser";

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
      throw new Error("User no found");
    }

    const hashCompare = await compare(password, user.password);

    if (!user || !hashCompare) {
      throw new Error("Credenciais inválidas");
    }

    const token: string = generateToken({ id: user.id, role: user.role });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
