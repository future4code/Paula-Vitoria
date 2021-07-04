import { user } from "../model/user";
import connection from "./connection";

export default async function selectUsers() {
  const user = await connection.raw(`SELECT * FROM User_Arq`);
  return user[0];
}
