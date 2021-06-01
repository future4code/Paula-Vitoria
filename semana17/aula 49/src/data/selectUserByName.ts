import { connection } from "../connection";
export default async function selectUserByName(name: string) {
  console.log(name);
  const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio WHERE name =UPPER("${name}")
`);
  return result[0];
}
