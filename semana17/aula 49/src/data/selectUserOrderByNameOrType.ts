import { connection } from "../connection";
export default async function SelectUserByNameOrType(
  orderBy: string,
  orderType?: string
) {
  let result = [];

  if (orderBy && orderType) {
    result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        ORDER BY ${orderBy} ${orderType};
        `);
  }
  if (orderBy && !orderType) {
    result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        ORDER BY ${orderBy} ASC;
        `);
  }

  if (!orderBy && !orderType) {
    result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        ORDER BY email ASC;
        `);
  }

  return result[0];
}
