import { Request, Response } from "express";
import { makeFriendshipBusiness } from "../../business/user/makeFriendShipBusiness";

export const makeFriendship = async (req: Request, res: Response) => {
  try {
    let message = "Success!";
    const token: string = req.headers.authorization as string;
    const { idFriend } = req.body;
    console.log("id amigo", idFriend);
    console.log(token);
    const success: boolean = await makeFriendshipBusiness(idFriend, token);
    if (!success) {
      throw new Error("An error ocurred. Try again");
    }

    res.status(201).send({ message });
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};
