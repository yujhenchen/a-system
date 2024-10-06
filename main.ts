import express, { Request, Response } from "express";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the Dinosaur API! Deno");
});

app.listen(8000);
