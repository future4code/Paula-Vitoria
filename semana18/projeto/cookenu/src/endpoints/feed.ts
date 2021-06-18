import { Request, Response } from "express";
import { authenticationData, user, userRole } from "../types";
import { getTokenData } from "../services/authenticator";
import selectRecipes from "../data/selectRecipes";

export default async function feed(req: Request, res: Response): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token) as authenticationData;
    if (!verifiedToken) {
      throw new Error("Invalid Token");
    }

    const recipes = await selectRecipes();
    console.log(recipes);
    res.status(200).send(recipes);
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
