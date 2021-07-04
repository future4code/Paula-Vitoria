import { Request, Response } from "express";
import { createPostBusiness } from "../../business/post/createPostBusiness";
import { postDTO } from "../../model/post";
import { authenticationData } from "../../model/user";
export const createPost = async (req: Request, res: Response) => {
  try {
    let message = "Success!";
    const token: string = req.headers.authorization as string;
    const { photo, description, type } = req.body;
    const postData: postDTO = {
      photo,
      description,
      type,
      
    };

    await createPostBusiness(postData, token);

    res.status(201).send({ message });
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};
