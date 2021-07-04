import { authenticationData } from "../../model/user";
import { generateId } from "../../services/idGenerator";
import { connection } from "../../data/connection";
import { getTokenData } from "../../services/authenticator";
import { postDTO } from "../../model/post";
import { post } from "../../model/post";
import { insertPost } from "../../data/insertPost";
import { POST_TYPES } from "../../model/post";
export const createPostBusiness = async (postData: postDTO, token: string) => {
  const tokenData: authenticationData = getTokenData(
    token
  ) as authenticationData;

  if (!postData.description || !postData.photo || !postData.type) {
    throw new Error("'description', 'photo' and 'type' must be passed");
  }

  if (
    postData.type !== POST_TYPES.EVENT &&
    postData.type !== POST_TYPES.NORMAL
  ) {
    throw new Error("Invalid Type. Type must be ''event' or 'normal");
  }
  const verifiedToken = getTokenData(token) as authenticationData;
  if (!verifiedToken) {
    throw new Error("Invalid Token");
  }

  const id: string = generateId();
  const createdDate = new Date();
  const post: post = {
    id: id,
    photo: postData.photo,
    description: postData.description,
    type: postData.type,
    created_at: createdDate,
    author_id: tokenData.id,
  };

  await insertPost(post);
};
