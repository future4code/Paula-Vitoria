import { Request, Response } from "express";
import selectUserByName from "../data/selectUserByName";
import SelectUserByNameOrType from "../data/selectUserOrderByNameOrType";
export default async function getUserByName(req: Request, res: Response) {
  try {
    const orderBy = req.query.orderBy as string;
    const orderType = req.query.orderType as string;
    const result = await SelectUserByNameOrType(orderBy, orderType);
   
    if (!result) {
      throw new Error("User not found");
    }
    res.status(200).send({ message: "sucesso!", result });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
