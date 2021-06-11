import { Request, Response, urlencoded } from "express";
import { getTokenData } from "../services/authenticator";
import selectUserById from "../data/selectUserById";
import { authenticationData } from "../types";

export default async function getProfileAnotherUser(
  req: Request,
  res: Response
) {
  try {
    const token = req.headers.authorization as string;
    const id = req.params.id;
    console.log("id" + id);

    const verifiedToken = getTokenData(token) as authenticationData;
    console.log(verifiedToken);
    if (!verifiedToken) {
      throw new Error("invalid token");
    }
    const user = await selectUserById(id);

    if (!user) {
      throw new Error("User not found");
    }

    const anotherprofile = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    res.status(200).send(anotherprofile);
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
