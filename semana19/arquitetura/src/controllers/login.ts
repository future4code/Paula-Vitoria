import { Request, Response } from "express";

export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    res.status(200).send({ message: "user logged!", token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}
