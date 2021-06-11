import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";
import addFollower from "../data/addFollower";
import connection from "../connection";
import getNumbersOfFollowers from "../data/getNumbersOfFollowers";
export default async function followUser(req: Request, res: Response) {
  try {
    const userToFollowId = req.query.userToFollowId as string;
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token) as authenticationData;

    if (!verifiedToken) {
      throw new Error("Invalid token");
    }

    const alredyIsFollower = await getNumbersOfFollowers(
      verifiedToken.id,
      userToFollowId
    );
    console.log(alredyIsFollower);
    if (alredyIsFollower > 0) {
      throw new Error("You already follow this user");
    }
    addFollower(verifiedToken.id, userToFollowId);

    res.status(200).send("Followed Successfully");
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
