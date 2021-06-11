import app from "./app";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import { hash, compare } from "./services/hashManager";
import { getTokenData } from "./services/authenticator";
import getProfile from "./endpoints/getProfile";
import getProfileAnotherUser from "./endpoints/getProfileAnotherUser";
import createRecipe from "./endpoints/createRecipe";
import getRecipeById from "./endpoints/getRecipeById";
import followUser from "./endpoints/followUser";

app.post("/signup", createUser);
app.post("/login", login);
app.get("/user/profile", getProfile);
app.get("/user/:id", getProfileAnotherUser);
app.post("/recipe", createRecipe);
app.get("/recipe/:id", getRecipeById);
app.post("/user/follow", followUser);
