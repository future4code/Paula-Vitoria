import app from "./controllers/app";
import signup from "./controllers/signup";
import login from "./controllers/login";
import getAllUsers from "./controllers/getAllUsers";
import deleteUserById from "./controllers/deleteUserById";

app.post("/signup", signup);
app.post("/login", login);
app.get("/users/all", getAllUsers);
app.delete("/user/:id", deleteUserById);
