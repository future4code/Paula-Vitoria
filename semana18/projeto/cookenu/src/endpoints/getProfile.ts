import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import selectUserById from "../data/selectUserById";
import { authenticationData } from "../types";

export default async function getProfile(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token) as authenticationData;
    if (!verifiedToken) {
      throw new Error("invalid token");
    }

    const user = await selectUserById(verifiedToken.id);

    const profile = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    res.status(200).send(profile);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}
