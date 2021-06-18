import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { authenticationData, user, userRole } from "../types";
import deleteAccountRelations from "../data/deleteAccoutRelations";

export default async function deleteAccount(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const idUserAccount = req.query.idUserAccount as string;
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token) as authenticationData;

    if (verifiedToken.role !== "ADMIN") {
      throw new Error("Just ADMINs can delete an account");
    }

    if (!idUserAccount) {
      throw new Error("id account required!");
    }

    if (!verifiedToken) {
      throw new Error("Invalid token");
    }

    await deleteAccountRelations(idUserAccount);
    /*OBSERVAÇÃO: utilizei o ON DELETE CASCADE para eliminar todos os dados relacionados a determinado usuário
    nas tabelas. Qualquer dúvida, consultar o arquivo tables.sql */

    res.status(201).send("Account deleted with success!");
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
