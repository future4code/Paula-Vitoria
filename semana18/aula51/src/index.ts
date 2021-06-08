import app from "./app";
import { generateId } from "./services/idGenerator";
import { createUser } from "./endpoints/createUser";
import { login } from "./endpoints/login";
import { getData } from "./data/getTokenData";
import { getAutenticatedUser } from "./endpoints/getAutenticatedUser";

app.post("/user/signup", createUser);
app.post("/user/login", login);
app.get("/user/profile", getAutenticatedUser);
