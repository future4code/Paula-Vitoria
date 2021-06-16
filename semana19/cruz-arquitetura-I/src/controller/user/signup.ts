import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signupBusiness";
import { signupDTO } from "../../model/user";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, nickname, email, password, role } = req.body;
    const inputSignup: signupDTO = {
      name,
      nickname,
      email,
      password,
      role,
    };
    const token: string = await signupBusiness(inputSignup);

    res.status(201).send({
      message: "Usuário criado!",
      token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
