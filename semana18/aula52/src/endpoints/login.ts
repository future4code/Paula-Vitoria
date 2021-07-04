import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";
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

    if (!user) {
      throw new Error("User not found");
    }

    if (userData.email !== user.email) {
      throw new Error("Invalid Email");
    }
    const passwordIsCorrect: boolean = compareHash(
      userData.password,
      user.password
    );
    if (!passwordIsCorrect) {
      throw new Error("Invalid Password");
    }
    const token: string = generateToken({ id: user.id, role: user.role });
    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
