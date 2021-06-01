import {Request,Response} from "express"
import selectUserByPaginationTyperOrder from "../data/selectUserByPaginationTypeOrder";
import selectUserByPaginationTypeOrder from "../data/selectUserByPaginationTypeOrder"
export default async function getUserByPaginationTypeOrder(req:Request,res:Response){
    try{
    const orderBy = req.query.orderBy as string || "name";
    const orderType = req.query.orderType as string || "DESC";
    const page =Number(req.query.page) || 1;

    const result = await selectUserByPaginationTyperOrder(orderBy,orderType,page);
    res.status(200).send({result})
    
    }catch(err){
        res.status(400).send({message:err.message || err.sqlMessage})
    }
}

