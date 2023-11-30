import { LabelRule, Rule } from "../rules";

export class RuleQueue<T> {
  private readonly rules: LabelRule<T>[];

  constructor(rules: LabelRule<T>[] = []) {
    this.rules = rules;
  }

  addRule(rule: LabelRule<T>) {
    this.rules.push(rule);
    return this;
  }

  getMessage(arg: T) {
    const rule = this.rules.find((rule) => rule.checkRule(arg));
    if (rule) {
      return rule.getLable();
    }
    return `${arg}`;
  }
}
