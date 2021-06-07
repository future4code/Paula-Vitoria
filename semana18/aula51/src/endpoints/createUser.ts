import connection from "../connection";
import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import { insertUser } from "../data/InsertUser";
export async function createUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const id: string = generateId();

    const user = await connection.raw(`
    SELECT * FROM user WHERE email = "${email}"
    `);

    if (user[0][0]) {
      throw new Error("Email already registered!");
    }
    insertUser(id, email, password);
    res.status(200).send({ message: "User create with success!" });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
//não esquecer das validações
