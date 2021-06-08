import connection from "../connection";
import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import { insertUser } from "../data/InsertUser";
import { generateToken } from "../services/authenticator";
import { getTokenData } from "../services/authenticator";
export async function createUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const id: string = generateId();

    if (!email) {
      throw new Error("Email is required!");
    }

    if (!email.includes("@")) {
      throw new Error("Type a Valid email! e.g: user@email.com");
    }
    if (!password) {
      throw new Error("Password is Required!");
    }
    if (password.length < 6) {
      throw new Error("password must be six digits or more");
    }
    const user = await connection.raw(`
    SELECT * FROM user WHERE email = "${email}"
    `);

    if (user[0][0]) {
      throw new Error("Email already registered!");
    }
    insertUser(id, email, password);
    const token: string = generateToken({ id });

    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
