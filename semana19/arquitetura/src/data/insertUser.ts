import connection from "./connection";
import { user } from "../model/user";
export default async function insertUser(user: user) {
  await connection.raw(
    `INSERT INTO User_Arq VALUES("${user.id}", "${user.name}","${user.email}", "${user.password}","${user.role}")`
  );
}
