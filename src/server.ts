import { Request, Response } from "express";
import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3003;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
