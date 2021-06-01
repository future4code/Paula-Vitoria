import {Request, Response} from "express";
import selectUserByType from "../data/selectUserByType";
export default async function getUserByType(req:Request, res:Response){
    try{
        const type = req.params.type.toUpperCase();
        const user = await selectUserByType(type)

        if(!user){
            throw new Error("User not found")
        }
        res.status(200).send({message:"Success",user});
    }catch(err){
        res.status(400).send({message:err.message || err.sqlMessage})
    }
}


