import { Request, Response } from "express";
import { NumberRulesService } from "./number-rules.service";

class NumberRulesController {
  private readonly numberRulesService: NumberRulesService;

  constructor(numberRulesService: NumberRulesService) {
    this.numberRulesService = numberRulesService;
  }

  public checkNumberRules(req: Request, res: Response): void {
    res.send(
      this.numberRulesService.checkNumberRules(
        Number.parseInt(req.query.number as string)
      )
    );
  }
}

const numberRulesController = new NumberRulesController(
  new NumberRulesService()
);
export default numberRulesController;
