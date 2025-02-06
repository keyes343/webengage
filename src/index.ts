import { Request, Response } from "express";
import { app } from "./app";
import { router } from "./router";

const port = 5000;
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server running");
});
app.use(router);

app.listen(5000, "0.0.0.0", async () => {
  console.log("hi there");
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export const handler = app;
