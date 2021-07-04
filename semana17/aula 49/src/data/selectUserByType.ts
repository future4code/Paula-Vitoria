import {connection} from "../connection";
export default async function selectUserByType(type:string){
    const result = await connection.raw(`
    SELECT * FROM aula48_exercicio
    WHERE type = UPPER("${type}")
    `);
    return result[0]
  }