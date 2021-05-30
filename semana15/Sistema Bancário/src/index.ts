import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./account";
import { getAge } from "./utils";
import { oldDate } from "./utils";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

type extract = {
  value: number;
  date: string;
  description: string;
};
app.get("/users/user", (req: Request, res: Response) => {
  try {
    const name = req.query.name;
    const cpf = req.query.cpf;
    let balance: number;
    users.map((user) => {
      if (!cpf && !name) {
        throw new Error("Cpf and name must be passed");
      }

      if (user.cpf === cpf && user.name === name) {
        balance = user.balance;
        res.status(200).send({ balance });
      } else {
        throw new Error("User not found");
      }
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
app.get("/users/user/vizualizarSaldo", (req: Request, res: Response) => {
  try {
    const cpf = req.query.cpf;

    if (!cpf) {
      throw new Error("Type a cpf");
    }
    let balance: number = 0;
    users.map((user) => {
      if (user.cpf === cpf) {
        balance = user.balance;
      } else if (cpf != user.cpf) {
        throw new Error("user not found");
      }
    });
    res.status(200).send({ balance });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.put("/users/user/saldo", (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const cpf = req.body.cpf;
    const value = req.body.value;

    console.log(name);
    console.log(cpf);

    if (value < 0) {
      throw new Error("Type a valid amount");
    }

    users.map((user) => {
      if (user.name != name || user.cpf != cpf) {
        throw new Error("User not found");
      } else {
        user.balance = user.balance + value;
        res.status(200).send();
      }
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, cpf, birth, balance, spents } = req.body;

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
      spents,
    };

    users.push(newUserAccount);

    res.status(200).send({ message: "ok", user: newUserAccount });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.post("/users/user/account", (req: Request, res: Response) => {
  try {
    const { description, value, cpf } = req.body;
    let dueDate = req.body.dueDate;

    let now = new Date();

    if (!dueDate) {
      dueDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    }

    if (oldDate(dueDate) === 0) {
      throw new Error("invalid date. Type a date that has not yet passed");
    }

    if (description === undefined || value === undefined || cpf === undefined) {
      throw new Error("fill in all the data");
    }

    /*users.map((user) => {
      if (user.cpf !== cpf) {
        throw new Error("user not found");
      }
    });*/

    users.map((user) => {
      if (user.cpf === cpf) {
        if (value < user.balance) {
          const newExpent: extract = {
            value: value,
            date: dueDate,
            description: description,
          };
          console.log(newExpent);
          user.spents.push(newExpent);
          res.status(200).send();
        } else {
          throw new Error(
            "the payment amount is greater than your current balance. Please enter another value."
          );
        }
      }
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.put("/users/user/atualizarSaldo", (req: Request, res: Response) => {
  try {
    const cpf = req.query.cpf;
    users.map((user) => {
      if (user.cpf === cpf) {
        user.spents.map((spent) => {
          if (oldDate(spent.date) && !0) {
            user.balance = user.balance - spent.value;
          } else if (
            user.spents.map((spent) => {
              spent.description === "Depósito";
            })
          ) {
            user.balance = user.balance + spent.value;
          }
        });
      }
    });
    res.status(200).send();
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
//Para testar se o servidor está tratando os endpoints corretamente

app.post("/users/user/trasnfer", (req: Request, res: Response) => {
  try {
    const { ownerName, ownerCpf, receiverName, receiverCpf, value } = req.body;
    const now = new Date();
    const descriptionOwner = "Transferência";
    const descriptionReceiver = "Depósito";
    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

    const transferOwner: extract = {
      value: value,
      date: date,
      description: descriptionOwner,
    };
    const transferReceiver: extract = {
      value: value,
      date: date,
      description: descriptionReceiver,
    };

    users.map((user) => {
      if (ownerCpf.includes(user.cpf) && ownerName.includes(user.name)) {
        if (user.balance >= value) {
          user.spents.push(transferOwner);
        }
      } else {
        throw new Error("User not found");
      }
    });

    users.map((user) => {
      if (receiverCpf.includes(user.cpf) && receiverName.includes(user.name)) {
        if (user.balance >= value) {
          user.spents.push(transferReceiver);
        }
      } else {
        throw new Error("User not found");
      }
    });
    res.status(200).send("Success");
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!");
});

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
