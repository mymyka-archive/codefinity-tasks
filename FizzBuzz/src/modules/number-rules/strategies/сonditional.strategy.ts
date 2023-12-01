import { Strategy } from "./abstract.strategy";

export class ConditionalStrategy<T> extends Strategy<T> {
  private readonly conditionalFunction: (arg: T) => boolean;

  constructor(conditionalFunction: (arg: T) => boolean) {
    super();
    this.conditionalFunction = conditionalFunction;
  }

  public isSatisfiedBy(arg: T): boolean {
    return this.conditionalFunction(arg);
  }
}
