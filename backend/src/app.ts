import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";

import { requestIdMiddleware } from "./middleware/requestId.middleware.js";
import { pinoMiddleware } from "./middleware/pino.middleware.js";
import { errorHandler } from "../src/middleware/error.middleware.js";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import roomRouter from "./routes/room.routes.js";
import bookRouter from "./routes/book.routes.js";
import refreshTokenRouter from "./routes/token.routes.js";
import { createRateLimiter } from "./security/globalRateLimits.js";

const app = express();

//security-helmet
app.use(helmet());

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

//performance
app.use(compression());

//cookie-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//request-trace
app.use(requestIdMiddleware);

//login-traces
app.use(pinoMiddleware);

//rate-limitting
app.use(createRateLimiter);

//routes
app.use("/api/v1", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/rooms", roomRouter);
app.use("/api/v1/book", bookRouter);
app.use("/api/v1/auth/refresh-token", refreshTokenRouter);

//error-handler-middleware
app.use(errorHandler);

export default app;