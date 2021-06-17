import { connection } from "./connection";
import { post } from "../model/post";

export const insertPost = async (post: post): Promise<void> => {
  await connection("labook_posts").insert(post);
};
