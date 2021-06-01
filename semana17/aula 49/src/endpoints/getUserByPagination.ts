import { Request, Response } from "express";
import selectUserByPagination from "../data/selectUserByPagination";
export default async function getUserByPagination(req: Request, res: Response) {
  try {
    const page = Number(req.query.page) || 1;
    const orderBy = req.query.orderBy as string;
    const result = await selectUserByPagination(orderBy, page);

    if (!result) {
      throw new Error("User not found");
    }
    res.status(200).send({ message: "sucesso!", result });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
