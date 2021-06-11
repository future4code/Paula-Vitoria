import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData, recipe } from "../types";
import selectRecipeById from "../data/selectRecipeById";
export default async function getRecipeById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const id = req.params.id as string;
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token) as authenticationData;
    if (!verifiedToken) {
      throw new Error("Invalid token");
    }

    const recipe = await selectRecipeById(id);

    if (!recipe) {
      throw new Error("Recipe not found");
    }
    res.status(200).send(recipe);
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
