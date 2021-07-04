import {connection} from "../connection"

export default async function selectUserByPaginationTyperOrder(orderBy:string,orderType:string,page:number) {
    let result = [];
    if(!orderBy && !orderType && !page){
    result = await connection.raw(`
        SELECT * FROM aula48_exercicio
    `)
    }else{
         result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        ORDER BY ${orderBy} ${orderType}
        LIMIT 5
        OFFSET ${5* (page-1)}
        `)
    }

    return result[0];
    
}