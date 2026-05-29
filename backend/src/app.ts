import express from "express"
import userRouter from "./routes/user.routes.js";
import authRouter from "../src/routes/auth.routes.js"
import roomRouter from "../src/routes/room.routes.js"
import bookRouter from "../src/routes/book.routes.js"
const app = express();

app.use(express.json());

// parse URL encoded data
app.use(express.urlencoded({ extended: true }));

//user-routes
app.use("/api/v1",userRouter);

//login-register-routes
app.use("/api/v1/auth", authRouter);

//room-routes
app.use("/api/v1/rooms", roomRouter)

//book-routes
app.use("/api/v1/book", bookRouter);

export default app