import { Request, Response } from "express";
import { loginBusiness } from "../../business/user/loginBusiness";
import { loginDTO } from "../../model/user";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const userData: loginDTO = {
      email,
      password,
    };

    const token: string = await loginBusiness(userData);

    res.send({
      message: "Usuário logado!",
      token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
