import { Request, Response } from "express";
import selectUserByName from "../data/selectUserByName";
export default async function getUserByName(req: Request, res: Response) {
  try {
    const name = req.query.name as string;
    const result = await selectUserByName(name.toUpperCase());
    console.log(result);
    if (!result) {
      throw new Error("User not found");
    }
    res.status(200).send({ message: "sucesso!", result });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
