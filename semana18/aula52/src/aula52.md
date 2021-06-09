### Exercício 1

a)O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
round está relacionado ao cost(custo numérico) que está relacionado à segurança da senha. Porém, vale lembrar que
quanto maior o cost,maior o tempo de execução do algoritmo. O melhor cost a ser usado vai depender do sistema, porém
há um padrão na maioria das libs do round ser 12.
Salt é uma string aleatória com 22 caracteres adicionada na senha antes de criar o hash. Isso deixa a string mais segura
de ataques do tipo rainbow table, onde os hackers conseguem ver um padrão nas senhas, identificar esse padrão e perceber
quais as senhas mais comuns e, após isso, criam uma tabela de conversão senha-hash.

b) Na pasta services/hashManager temos:

```
import { genSaltSync, hashSync, compareSync } from "bcryptjs";
//função que gera o  hash
export const createHash = (plainText: string): string => {
  const salt: string = genSaltSync(12);
  const hash: string = hashSync(plainText, salt);
  return hash;
};
```

c) Na pasta services/hashManager temos:

```
export const compareHash = (plainText: string, cypherText: string): boolean => {
  return compareSync(plainText, cypherText);
};


```

### Exercício 2

a)Primeiramente, devemos modificar a parte do cadastro, para que a senha já seja guardada no banco de dados encriptada
e ninguém que manipule o banco tenha acesso a ela.

b) Primeiro endpoint:

```
import connection from "../connection";
import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import { insertUser } from "../data/InsertUser";
import { generateToken } from "../services/authenticator";
import { getTokenData } from "../services/authenticator";
import{createHash} from "../services/hashManager"
export async function createUser(req: Request, res: Response) {
  try {
    const  email = req.body.email;
    let password:string = req.body.password;

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

    password = createHash(password);//nesta linha, encriptamos a senha recebida
    const user = await connection.raw(`
    SELECT * FROM user WHERE email = "${email}"
    `);

    if (user[0][0]) {
      throw new Error("Email already registered!");
    }
    insertUser(id, email, password);
    const token: string = generateToken({ id });

    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}


```

c) Segundo endpoint:

```
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";
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

    if (!user) {
      throw new Error("User not found");
    }

    if (userData.email !== user.email) {
      throw new Error("Invalid Email");
    }
    const passwordIsCorrect: boolean = compareHash(
      userData.password,
      user.password
    );
    if (!passwordIsCorrect) {
      throw new Error("Invalid Password");
    }
    const token: string = generateToken({ id: user.id, role: user.role });
    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}


```

### Exercício 3

a)

```
ALTER TABLE user
 ADD role ENUM('NORMAL','ADMIN') DEFAULT 'NORMAL';

```

b)

```
export type authenticationData = { id: string; role: USER_ROLES };
```

c)

```
import connection from "../connection";
import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import { insertUser } from "../data/InsertUser";
import { generateToken } from "../services/authenticator";
import { createHash } from "../services/hashManager";
import { USER_ROLES } from "../types";

export async function createUser(req: Request, res: Response) {
  try {
    const email = req.body.email;
    const role: USER_ROLES= req.body.role;
    let password: string = req.body.password;

    const id: string = generateId();

    if (!email) {
      throw new Error("Email is required!");
    }
    if (!role) {
      throw new Error("Role is required");
    }

    if (!Object.values(USER_ROLES).includes(role)) {
      throw new Error("Role must be NORMAL or ADMIN!");
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

    password = createHash(password);
    const user = await connection.raw(`
    SELECT * FROM user WHERE email = "${email}"
    `);

    if (user[0][0]) {
      throw new Error("Email already registered!");
    }
    insertUser(id, email, password, role);
    const token: string = generateToken({ id, role });

    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}

```

d)

```
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";
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

    if (!user) {
      throw new Error("User not found");
    }

    if (userData.email !== user.email) {
      throw new Error("Invalid Email");
    }
    const passwordIsCorrect: boolean = compareHash(
      userData.password,
      user.password
    );
    if (!passwordIsCorrect) {
      throw new Error("Invalid Password");
    }
    const token: string = generateToken({ id: user.id, role: user.role });
    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}
```

### Exercício 4

a)

```
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { getTokenData } from "../services/authenticator";
import { selectUserById } from "../data/selectUserById";
export async function getAutenticatedUser(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token);

    console.log(verifiedToken.role);
    if (!(verifiedToken.role === "NORMAL")) {
      throw new Error("Unauthorized");
    }

    const user = await selectUserById(verifiedToken.id);
    console.log("user" + user);

    res.status(200).send({ user: user.id, email: user.email });
  } catch (err) {
    if (err.message.includes("expired")) {
      res.statusCode = 401;
    }
    res.status(400).send({ message: err.message || err.sqlMessage });
  }
}

```

DESAFIOS

