import { selectPostById } from "../../data/selectPostById";
import { post } from "../../model/post";

export const getPostByIdBusiness = async (id: string) => {
  const queryResult = await selectPostById(id);
  if (!queryResult) {
    throw new Error("Post not found");
  }

  const post: post = {
    id: queryResult.id,
    photo: queryResult.photo,
    description: queryResult.description,
    type: queryResult.type,
    created_at: queryResult.created_at,
    author_id: queryResult.author_id,
  };

  return post;
};
