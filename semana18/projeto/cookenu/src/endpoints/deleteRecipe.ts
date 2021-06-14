import { Request, Response } from "express";
import {getTokenData } from "../services/authenticator";
import { authenticationData, user, userRole } from "../types";
import selectRecipeById from "../data/selectRecipeById";
import deleteRecipeById from "../data/deleteRecipeById";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const idRecipe = req.query.id as string;
    const token = req.headers.authorization as string;

    const verifiedToken = getTokenData(token) as authenticationData;
    if (!idRecipe) {
      throw new Error("id required!");
    }

    if (!verifiedToken) {
      throw new Error("Invalid token");
    }

    const recipe = await selectRecipeById(idRecipe);
    if (
      recipe.id_user !== verifiedToken.id &&
      verifiedToken.role === "NORMAL"
    ) {
      throw new Error("You can only delete recipes created by you");
    }
    await deleteRecipeById(idRecipe);

    res.status(201).send("Recipe deleted with success!");
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
