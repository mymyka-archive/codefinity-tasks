import { isDivisibleBy } from "./conditions";
import { andCondition } from "./conditions";
import { LabelRule } from "./rules";
import { ConditionalStrategy } from "./strategies";
import { RuleQueue } from "./utils";

export class NumberRulesService {
  public checkNumberRules(number: number): string {
    const ruleQueue = new RuleQueue<number>();

    const result = ruleQueue
      .addRule(
        new LabelRule<number>(
          "FizzBuzz",
          new ConditionalStrategy<number>(
            andCondition(isDivisibleBy(3), isDivisibleBy(5))
          )
        )
      )
      .addRule(
        new LabelRule<number>(
          "Fizz",
          new ConditionalStrategy<number>(isDivisibleBy(3))
        )
      )
      .addRule(
        new LabelRule<number>(
          "Buzz",
          new ConditionalStrategy<number>(isDivisibleBy(5))
        )
      )
      .getMessage(number);

    return result;
  }
}
