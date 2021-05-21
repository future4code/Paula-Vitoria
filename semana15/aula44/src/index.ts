import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./users";
//import {type} from "./users"

const app = express();
app.use(express.json());
app.use(cors());

//Atividade 1
//a)O método HTTP que devo utilizar para fazer esse tipo de requisição é o método get.
//b)eu indicaria essa entidade como "users/all"
app.get("/users/all", (req: Request, res: Response) => {
  res.send(users);
});
//Atividade 2
//a) Passei como path params, pois minha intenção é filtrar os valores por type
//b)Sim, utilizando um Enum e fazendo a validação do valor recebido, garantindo q ele esteja presente no
//objeto que representa esse Enum.

app.get("/users/:type", (req: Request, res: Response) => {
  try {
    const type = req.params.type;

    const result = users.filter((user) => {
      return user.type.toLowerCase() === type;
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//Atividade 3;

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
