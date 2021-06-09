import connection from "../connection";
import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import { insertUser } from "../data/InsertUser";
import { generateToken } from "../services/authenticator";
import { createHash } from "../services/hashManager";
import { USER_ROLES } from "../types";

export async function createUser(req: Request, res: Response) {
  try {
    const email = req.body.email;
    const role: USER_ROLES = req.body.role;
    let password: string = req.body.password;

    const id: string = generateId();

    if (!email) {
      throw new Error("Email is required!");
    }
    if (!role) {
      throw new Error("Role is required");
    }

    if (!Object.values(USER_ROLES).includes(role)) {
      throw new Error("Role must be 'NORMAL' or 'ADMIN!'");
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

    password = createHash(password);
    const user = await connection.raw(`
    SELECT * FROM user WHERE email = "${email}"
    `);

    if (user[0][0]) {
      throw new Error("Email already registered!");
    }
    insertUser(id, email, password, role);
    const token: string = generateToken({ id, role });

    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
