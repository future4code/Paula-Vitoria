import { connection } from "../connection";
export default async function selectUserByPagination(
  orderBy: string,
  page: number 
) {
  const result = await connection.raw(`
 SELECT id, name FROM aula48_exercicio
       
 ORDER BY ${orderBy}
 LIMIT 5
 OFFSET ${5 * (page - 1)}
`);
  return result[0];
}


