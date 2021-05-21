import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./account";
import { getAge } from "./utils";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, cpf, birth, balance, spent } = req.body;

    if (getAge(birth) < 18) {
      throw new Error("user must be of legal age");
    }

    if (balance > 0) {
      throw new Error("The balance must start with R$0.00");
    }
    users.map((user) => {
      if (user.cpf === cpf) {
        throw new Error("A user with this cpf already exists");
      }
    });

    const newUserAccount = {
      name,
      cpf,
      birth,
      balance,
      spent,
    };

    users.push(newUserAccount);

    res.status(200).send({ message: "ok", user: newUserAccount });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
