import { selectPostById } from "../../data/selectPostById";
import { post } from "../../model/post";

export const getPostByIdBusiness = async (id: string) => {
  const queryResult = await selectPostById(id);
  if (!queryResult) {
    throw new Error("Post not found");
  }

  /* const post: post = {
    id: queryResult.id,
    photo: queryResult.photo,
    description: queryResult.description,
    type: queryResult.type,
    createdAt: queryResult.created_at,
    authorId: queryResult.author_id,
  };

  return post;*/
};
