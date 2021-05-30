import { Request, Response } from "express";
import app from "./app";
import { formatDate } from "./utils/dateFormat";
import connection from "./connection";
app.get("/", (req, res) => {
  res.send("Hello, World");
});

//1)Criar usuário
app.put("/user", async (req: Request, res: Response) => {
  try {
    const name: String = req.body.name;
    const nickname: String = req.body.nickname;
    const email: String = req.body.email;
    console.log(req.body.name);

    if (!name || !nickname || !email) {
      throw new Error("Enter all required data");
    }
    const userData = {
      name,
      nickname,
      email,
    };

    await connection("ToDoListUser").insert(userData);
    res.status(201).send(userData);
    res.send("User created! ");
  } catch (err) {
    console.log(err.message);
    res.status(400).send({ message: err.sqlMessage || err.message });
  }
});

//2)buscar usuário pelo id
app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    if (!id) {
      throw new Error("Id required");
    }

    const user = await connection("ToDoListUser").where({ id: id });

    if (user.length === 0) {
      //analisar essa validação
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (err) {
    res.send(400).send({ message: err.sqlMessage || err.message });
  }
});

//3)Editar Usuário
app.post("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const name: String = req.body.name;
    const nickname: String = req.body.nickname;
    const id: Number = Number(req.params.id);

    console.log("name", name);
    console.log("nickname", nickname);
    console.log("id", id);

    if (name.length === 0 || nickname.length === 0) {
      throw new Error("Empty value! All fields are required!");
    }
    //VALIDAR ID VERIFICANDO SE ELE ESTA PRESENTE NA TABELA
    const result = await connection("ToDoListUser")
      .update({ name: name, nickname: nickname })
      .where({ id: id });

    res.status(200).send("User updated");
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
});

//4)criar tarefa
app.put("/task", async (req: Request, res: Response) => {
  try {
    const title: String = req.body.title;
    const description: String = req.body.description;
    const limit_date: String = formatDate(req.body.limitDate);
    const creator_user_id: string = req.body.creatorUserId;
    const status: string = req.body.creatorUserId;

    const task = {
      title,
      description,
      limit_date,
      creator_user_id,
      status,
    };
    if (!title || !description || !limit_date) {
      throw new Error("All fields requireds!");
    }

    await connection("Task").insert(task);

    res.status(200).send("Task created!");
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
});

//5)Pegar tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log(id);

    const result = await connection("Task").where({ id: id });

    if (result.length === 0) {
      throw new Error("Task not found");
    }

    //tratar data que vem do banco
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
});

//6)pegar todos os usuarios

app.get("/user/all", async (req: Request, res: Response) => {
  try {
    const result = await connection("ToDoListUser");

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
});

//8)pesquisar usuário
app.get("/user", async (req: Request, res: Response) => {
  try {
    const query = req.query.value;
    console.log(query);

    if (query === undefined) {
      throw new Error("value required!");
    }
    const result = await connection("ToDoListUser")
      .select("id", "nickname")
      .where("nickname", "LIKE", `%${query}%`)
      .orWhere("name", "LIKE", `%${query}%`);

    res.status(200).send({ result });
  } catch (err) {
    res.status(400).send({ message: err.sqlMessage || err.message });
  }
});

//9) Atribuir um usuário responsável a uma tarefa
app.post("/task/responsible", async (req: Request, res: Response) => {
  try {
    const responsible_user_id = req.body.responsibleId;
    const task_id = req.body.taskId;

    if (!responsible_user_id || !task_id) {
      throw new Error("Values required");
    }
    const newTaskResponsible = {
      responsible_user_id,
      task_id,
    };
    const result = await connection("ResponsibleTaskUser").insert(
      newTaskResponsible
    );
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
});
