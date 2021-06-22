import { Request, Response } from "express";
import { post } from "../../model/post";
import { getPostByIdBusiness } from "../../business/post/getPostByIdBusiness";

export const getPostById = async (req: Request, res: Response) => {
  try {
    let message = "Success!";

    const { id } = req.params;

    const post = await getPostByIdBusiness(id);
    console.log(post);
    res.status(200).send({ message, post });
  } catch (error) {
    let message = error.sqlMessage || error.message;
    res.statusCode = 400;

    res.send({ message });
  }
};
