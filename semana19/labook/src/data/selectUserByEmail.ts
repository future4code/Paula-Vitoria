import { connection } from "./connection";

export const selectUserByEmail = async (email: string): Promise<any> => {
  console.log("Email data", email);
  const queryResult: any = await connection("labook_users")
    .select("*")
    .where({email});

  return queryResult[0];
};
