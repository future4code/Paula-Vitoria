import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signupBusiness";
import { signupDTO } from "../../model/user";

export const signup = async (req: Request, res: Response) => {
  try {
    let message = "Success!";
    const { name, email, password } = req.body;
    console.log(name, email, password);

    const signupData: signupDTO = {
      name,
      email,
      password,
    };
    const token = await signupBusiness(signupData);
    res.status(201).send({ message, token });
  } catch (error) {
    res.statusCode = 400;
    let message = error.sqlMessage || error.message;

    res.send({ message });
  }
};
