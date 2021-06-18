import { Request, Response } from "express";
import { authenticationData, user, userRole } from "../types";
import { getTokenData } from "../services/authenticator";
import updateRecipe from "../data/updateRecipe";
;

export default async function editRecipe(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    const title = req.body.title;
    const description = req.body.description;
    const idRecipe = req.body.idRecipe;
    const verifiedToken = getTokenData(token) as authenticationData;
    if (!verifiedToken) {
      throw new Error("Invalid Token");
    }
    if (!title){
      throw new Error("Title must be provided")
    }

    if(!description){
      throw new Error("Description must be provided")
    }

    if(!idRecipe){
      throw new Error("id of recipe must be provided")
    }
    if (!Object.values(userRole).includes(userRole.NORMAL)) {
      throw new Error("Role must be 'NORMAL' ");
    }

    await updateRecipe(title, description, verifiedToken.id, idRecipe);

    res.status(200).send("Update successfully");
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
