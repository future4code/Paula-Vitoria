import connection from "./connection";
import { userAuthenticator } from "../model/user";

export default async function selectUser(email: string) {
  await connection.raw(`SELECT * FROM User_Arq WHERE email="${email}"`);
  return [0][0];
}
