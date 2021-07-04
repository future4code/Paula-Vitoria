import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import userBusiness from "../business/UserBusiness";
import UserDatabase from "../data/UserDatabase";
import { User } from "../model/User";

export class UserController {
  public async signup(req: Request, res: Response) {
    try {
      const { name, role, email, password } = req.body;
      const result = await userBusiness.signup(name, email, password, role);
      res.status(200).send(result);
    } catch (error) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await userBusiness.login(email, password);
      res.status(200).send(result);
    } catch (error) {
      const { statusCode, message } = error;
      res.status(statusCode || 400).send({ message });
    }
  }

  public async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result: User | undefined = await userBusiness.getUserById(id);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send();
    }
  }

  public async getAllUsers(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;

      const result = await UserBusiness.getAllUsers(token);
      console.log(result);
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}

export default new UserController();
