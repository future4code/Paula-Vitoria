import app from "./app";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import getProfile from "./endpoints/getProfile";
import getProfileAnotherUser from "./endpoints/getProfileAnotherUser";
import createRecipe from "./endpoints/createRecipe";
import getRecipeById from "./endpoints/getRecipeById";
import followUser from "./endpoints/followUser";
import unfollowUser from "./endpoints/unfollowUser";
import feed from "./endpoints/feed";
import editRecipe from "./endpoints/editRecipe";
import deleteRecipe from "./endpoints/deleteRecipe";
import deleteAccount from "./endpoints/deleteAccount";
import resetPassword from "./endpoints/resetPassword";

app.get("/user/profile", getProfile);
app.get("/user/feed", feed);
app.get("/recipe/:id", getRecipeById);
app.get("/user/:id", getProfileAnotherUser);
app.put("/recipe/edit", editRecipe);
app.post("/account/password", resetPassword);
app.post("/recipe", createRecipe);
app.post("/signup", createUser);
app.post("/login", login);
app.post("/user/follow", followUser); //tratar endpoint
app.post("/user/unfollow", unfollowUser);
app.delete("/recipe/delete", deleteRecipe);
app.delete("/account/user", deleteAccount);
