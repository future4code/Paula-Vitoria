import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { getTokenData } from "../services/authenticator";
import { selectUserById } from "../data/selectUserById";
export async function getAutenticatedUser(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token);
    console.log(verifiedToken.id);

    const user = await selectUserById(verifiedToken.id);

    res.status(200).send({ user: user.id, email: user.email });
  } catch (err) {
    if (err.message.includes("expired")) {
      res.statusCode = 401;
    }
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
