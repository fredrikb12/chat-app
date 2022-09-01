import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
dotenv.config();

import { Request, Response } from "express";
import { router } from "./routes/start.js";
import loggerMiddleware from "./middleware/logger.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

app.post("/", (req: Request, res: Response) => {
  res.send(req.body);
});

app.listen(process.env.PORT || "3000", () => {
  console.log(`Listening to ${process.env.PORT || 3000}`);
});

export default app;
