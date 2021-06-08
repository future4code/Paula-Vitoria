import * as jwt from "jsonwebtoken";
type authenticationData = { id: string };

export function generateToken(payload: authenticationData): string {
  return jwt.sign({ payload }, process.env.JWT_KEY as string, {
    expiresIn: "1y",
  });
}

export function getTokenData(token: string): authenticationData {
  const result: authenticationData = jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as authenticationData;

  return result;
}
