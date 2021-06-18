import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user, userAddress, userRole } from "../types";
import { hash } from "../services/hashManager";
import getAddressInfo from "../services/getAddressInfo";
import { userCompletedAddress } from "../types";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const {
      name,
      nickname,
      email,
      password,
      role,
      zipCode,
      number,
      complement,
    } = req.body;

    if (
      !name ||
      !nickname ||
      !email ||
      !password ||
      !role ||
      !number ||
      !complement
    ) {
      res.statusCode = 422;
      throw new Error(
        "Preencha os campos 'name','nickname', 'password', 'email', 'role', 'zipcode','number' and 'complement'"
      );
    }

    if (
      role.toUpperCase() !== userRole.ADMIN &&
      role.toUpperCase() !== userRole.NORMAL
    ) {
      res.statusCode = 422;
      throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN");
    }

    const infoAddress = await getAddressInfo(zipCode as string);
    if (infoAddress === null) {
      throw new Error("Invalid zip code");
    }

    const [user] = await connection("user").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado");
    }

    const id: string = generateId();

    const cypherText = await hash(password);

    const newUser: user = {
      id,
      name,
      nickname,
      email,
      password: cypherText,
      role,
    };

    console.log(newUser.id)

    const completedAddress: userCompletedAddress = {
      id_user: newUser.id,
      zip_code: zipCode,
      street: infoAddress.street,
      number: number,
      complement: complement,
      neighborhood: infoAddress.neighborhood,
      city: infoAddress.city,
      state: infoAddress.state,
    };
    await connection("to_do_list_users ").insert(newUser);

    await connection("user_address").insert(completedAddress);

    const token: string = generateToken({ id, role });

    res.status(201).send({ token });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}
