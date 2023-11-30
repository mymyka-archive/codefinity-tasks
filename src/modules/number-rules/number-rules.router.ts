import { Request, Response, Router } from "express";
import numberRulesController from "./number-rules.controller";

const numberRulesRouter: Router = Router();

numberRulesRouter.get(
  "/",
  numberRulesController.checkNumberRules.bind(numberRulesController)
);

export default numberRulesRouter;
