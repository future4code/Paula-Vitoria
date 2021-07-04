import { connection } from "../connection";
export default async function selectUserByPagination(page: number) {
  const result = await connection.raw(`
 SELECT id, name FROM aula48_exercicio
  LIMIT 5
  OFFSET ${5 * (page - 1)}

`);
  return result[0];
}
