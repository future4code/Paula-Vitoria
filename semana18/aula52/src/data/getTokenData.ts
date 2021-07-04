import * as jwt from "jsonwebtoken";
type authenticationData = { id: string };
export const getData = (token: string): authenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  console.log(payload);
  const result = {
    id: payload.id,
  };
  return result;
};

