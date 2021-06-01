import { Request, Response } from "express";
import selectUserByPagination from "../data/selectUserByPagination";
export default async function getUserByPagination(req: Request, res: Response) {
  try {
    const page = Number(req.query.page) || 1;

    const result = await selectUserByPagination(page);

    if (result.length === 0) {
      throw new Error("Users not found");
    }
    res.status(200).send({ message: "sucesso!", result });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
