import express, { Express } from "express";
import dotenv from "dotenv";
import { router } from "./router";

dotenv.config();

export const app: Express = express();

app.use(express.json());
app.use("/", router);
