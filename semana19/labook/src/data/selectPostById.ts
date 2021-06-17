import { connection } from "./connection";
import { post } from "../model/post";

export const selectPostById = async (id: string): Promise<post> => {
  const queryResult: any = await connection("labook_posts")
    .select("*")
    .where({ id });
  return queryResult[0];
};
