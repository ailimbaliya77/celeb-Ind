import express from "express";
import indexRouter from "./routes/index.routes.js";
import {
  errorHandler,
  notFoundHandler,
  validationHandler,
} from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", indexRouter);

app.use(validationHandler);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
