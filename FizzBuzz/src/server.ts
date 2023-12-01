import { Request, Response } from "express";
import express from "express";
import "dotenv/config";
import numberRulesRouter from "./modules/number-rules/number-rules.router";

const app = express();
const port = process.env.PORT || 3003;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/numberRules", numberRulesRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
