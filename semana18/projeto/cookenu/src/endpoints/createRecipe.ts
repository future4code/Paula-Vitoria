import { Request, Response } from "express";
import connection from "../connection";
import generateId from "../services/idGenerator";
import { authenticationData } from "../types";
import { getTokenData } from "../services/authenticator";
import { recipe } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
    const title: string = req.body.title;
    const description: string = req.body.description;
    const verifiedToken = getTokenData(token) as authenticationData;
    if (!verifiedToken) {
      throw new Error("Invalid Token");
    }

    const id: string = generateId();

    const date = Intl.DateTimeFormat("pt-BR").format(new Date());

    const newRecipe: recipe = {
      id,
      title,
      description,
      date: date,
      id_user: verifiedToken.id,
    };

    await connection("cookenu_recipes").insert(newRecipe);

    res.status(201).send(newRecipe);
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
