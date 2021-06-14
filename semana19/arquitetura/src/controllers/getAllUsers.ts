import { Request, Response } from "express";
import { getAllUsersBusiness } from "../business/getAllUsersBusiness";

export default async function getAllUsers(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const users = await getAllUsersBusiness(token);
    console.log(users);
    res.status(200).send({ message: "user logged!", users });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}
