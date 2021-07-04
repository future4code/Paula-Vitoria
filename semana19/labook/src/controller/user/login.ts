import { Request, Response } from "express";
import { generateToken } from "../../services/authenticator";
import { loginBusiness } from "../../business/user/loginBusiness";
import { loginDTO } from "../../model/user";
export const login = async (req: Request, res: Response) => {
  try {
    let message = "Success!";

    const { email, password } = req.body;
    const loginData: loginDTO = {
      email,
      password,
    };
    console.log(email, password);

    const token = await loginBusiness(loginData);

    res.status(200).send({ message, token });
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};
