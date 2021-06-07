import app from "./app";
import { generateId } from "./services/idGenerator";
import { createUser } from "./endpoints/createUser";

app.post("/user/signup", createUser);
