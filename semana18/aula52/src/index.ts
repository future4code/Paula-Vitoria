import app from "./app";
import { generateId } from "./services/idGenerator";
import { createUser } from "./endpoints/createUser";
import { login } from "./endpoints/login";
import { getData } from "./data/getTokenData";
import { getAutenticatedUser } from "./endpoints/getAutenticatedUser";
import {createHash} from "./services/hashManager"
import {compareHash} from "./services/hashManager"

app.post("/user/signup", createUser);
app.post("/user/login", login);
app.get("/user/profile", getAutenticatedUser);

const hash1 = createHash("Elvis")
const hash2 = createHash("Elvis")


const compare1 = compareHash("Elvis",hash1)
const compare2 = compareHash("Elvis",hash1)

console.log({compare1,compare2})