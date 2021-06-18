import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user } from "../types";
import { hash } from "../services/hashManager";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, password } = req.body;
    const role = (req.body.role as string) || "NORMAL";
    if (!name || !email || !password) {
      res.statusCode = 422;
      throw new Error("'name','password' and'email' required");
    }

    const [user] = await connection("cookenu_users").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("E-mail already registered");
    }

    const id: string = generateId();

    const cypherText = await hash(password);

    const newUser: user = {
      id,
      name,
      email,
      password: cypherText,
      role,
    };

    await connection("cookenu_users").insert(newUser);

    const token: string = generateToken({ id, role });

    res.status(201).send({ token });
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
