import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";
import deleteFollower from "../data/deleteFollower";
import connection from "../connection";
export default async function unfollowUser(req: Request, res: Response) {
  try {
    const userToUnfollowId = req.query.userToUnfollowId as string;
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token) as authenticationData;

    if (!verifiedToken) {
      throw new Error("Invalid token");
    }
    const userToUnfollow = await connection.raw(
      `SELECT * FROM cookenu_users_followers AS user WHERE id_follower="${userToUnfollowId}" AND id_user="${verifiedToken.id}"
      
      `
    );

    if (!userToUnfollow[0][0]) {
      throw new Error("User not found");
    }
    deleteFollower(userToUnfollowId);

    res.status(200).send("Unfollowed Successfully");
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
