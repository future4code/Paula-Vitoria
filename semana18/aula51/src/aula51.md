### Exercício 1

a) Acredito que usar strings nos dão uma gama maior de combinações a serem geradas para criarmos um determinado id.
Usar strings nos permite combinar tanto letras quanto números e, consequentemente, gerar valores mais escaláveis.

b) Na pasta services/ temos:

```
import { v4 } from "uuid";

export function generateId(): string {
  return v4();
}
```

### Exercício 2

a) Na primeira linha é declarada a variável userTableName, que representa o nome da tabela em que vou adicionar o novo usuário. Logo depois, temos um bloco de código que configura a conexão com o banco de dados. Em seguida, temos mais outro bloco de código que é uma função assincrona que se comunica com o banco que cria um novo usuário, recebendo como parametro seu id, email e senha e, logo após, insere esse usuário na tabela user, a mesma que foi referenciada na linha 1.

b) A query utilizada para criar a tabela de usuário foi a seguinte:

```
CREATE TABLE user(
id VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
passsword VARCHAR(255) NOT NULL
);
```

c) A função para a criação de usuários no banco é a seguinte:

```
import connection from "../connection";
export const insertUser = async (
  id: string,
  email: string,
  password: string
) => {
  await connection.raw(`
  INSERT INTO user
    VALUES("${id}" , "${email}", "${password}")

   `);
};`

```

### Exercício 3

a) ela garante que o valor que está presente na variavel é uma string e que deve ser preenchida.
b) A função que gera um token é a seguinte, presente na arquivo authentication.ts:

```
import * as jwt from "jsonwebtoken";
type authenticationData = { id: string };

export function generateToken(payload: authenticationData): string {
  return jwt.sign(payload, process.env.JWT_KEY as string, { expiresIn: "1y" });
}

export function getTokenData(token: string): authenticationData {
  const result: authenticationData = jwt.verify(
    token,
    process.env.JWT_KEY as string
  ) as authenticationData;

  return result;
}

```

### Exercício 4

Respostas das questões a,b,c. Pasta "/endpoints/createUser.ts"

```


    import connection from "../connection";
import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import { insertUser } from "../data/InsertUser";
import { generateToken } from "../services/authenticator";
import { getTokenData } from "../services/authenticator";
export async function createUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const id: string = generateId();

    if (!email) {
      throw new Error("Email is required!");
    }

    if (!email.includes("@")) {
      throw new Error("Type a Valid email! e.g: user@email.com");
    }
    if (!password) {
      throw new Error("Password is Required!");
    }
    if (password.length < 6) {
      throw new Error("password must be six digits or more");
    }
    const user = await connection.raw(`
    SELECT * FROM user WHERE email = "${email}"
    `);

    if (user[0][0]) {
      throw new Error("Email already registered!");
    }
    insertUser(id, email, password);
    const token: string = generateToken({ id });
    console.log(token);

    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}



```

### Exercício 5

a) A query para buscar um usuário através do email(pasta data/selectUserByEmail.ts) foi a seguinte:

```
import connection from "../connection";

export async function selectUserByEmail(email: string) {
  const resultQuery = await connection.raw(`
    SELECT * FROM user WHERE email="${email}"
    `);
  return resultQuery[0];
}

```

### Exercício 6

Respostas dos itens a e b;

```
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const userData = {
      email,
      password,
    };

    if (!email || !email.includes("@")) {
      throw new Error("Invalid email");
    }
    if (!password) {
      throw new Error("Password Required!");
    }

    const user = await selectUserByEmail(userData.email);
    console.log(user);

    if (userData.password !== user.password) {
      throw new Error("Invalid password");
    }
    if (userData.email !== user.email) {
      throw new Error("Invalid Email");
    }
    const token: string = generateToken(user.id);

    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}

```

### Exercício 7

a)Temos que tipar como "as any" porque provavelmente o resultado do payload pode ser um objeto ou uma string, ou seja,
é um retorno não tão bem definido.
b) A função é:

```
import * as jwt from "jsonwebtoken";
type authenticationData = { id: string };
export const getData = (token: string): authenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  console.log(payload);
  const result = {
    id: payload.id,
  };
  return result;
};

```

### Exercício 8

a)

```
import connection from "../connection"
export async function selectUserById(id:string){
  const resultQuery =   await connection.raw(`
    SELECT * FROM user
    WHERE id="${id}"
    `)
return resultQuery[0][0];
}
```

b)

```
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { getTokenData } from "../services/authenticator";
import { selectUserById } from "../data/selectUserById";
export async function getAutenticatedUser(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token);
    console.log(verifiedToken.id);

    const user = await selectUserById(verifiedToken.id);

    res.status(200).send({ user: user.id, email: user.email });
  } catch (err) {
    if (err.message.includes("expired")) {
      res.statusCode = 401;
    }
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}

```
