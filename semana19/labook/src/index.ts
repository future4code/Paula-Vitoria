
import {userRouter} from "./routes/userRouter"
import {postRouter} from "./routes/postRouter"
import { app } from "./controller/app";


app.use("/users", userRouter)
app.use("/posts",postRouter)

