import app from "./app";
import editUser from "./endpoints/editUser";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import { hash, compare } from "./services/hashManager";
import { getTokenData } from "./services/authenticator";
import getProfile from "./endpoints/getProfile";
import getProfileAnotherUser from "./endpoints/getProfileAnotherUser";
import createRecipe from "./endpoints/createRecipe";

app.post("/signup", createUser);
app.post("/login", login);
app.get("/user/profile", getProfile);
app.get("/user/:id", getProfileAnotherUser);
app.post("/recipe", createRecipe);
//app.put("/user/edit", editUser);
