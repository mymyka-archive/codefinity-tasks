import { Strategy } from "../strategies";

export abstract class Rule<T> {
  protected strategy: Strategy<T>;

  constructor(strategy: Strategy<T>) {
    this.strategy = strategy;
  }

  checkRule(arg: T) {
    return this.strategy.isSatisfiedBy(arg);
  }
}
