import app from "./app";
import { createUser } from "./endpoints/createUser";
import { login } from "./endpoints/login";
import { getTokenData } from "./services/authenticator";
import { getAutenticatedUser } from "./endpoints/getAutenticatedUser";

app.post("/user/signup", createUser);
app.post("/user/login", login);
app.get("/user/profile", getAutenticatedUser);

