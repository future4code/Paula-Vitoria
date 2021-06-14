import { Request, Response } from "express";
import { deleteUserBusiness } from "../business/deleteUserBusiness";

export default async function deleteUserById(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const id = req.params.id;
   await deleteUserBusiness(token, id);

    res.status(200).send({ message: "user deleted!" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}
