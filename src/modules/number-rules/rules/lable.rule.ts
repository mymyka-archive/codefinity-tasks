import { Strategy } from "../strategies";
import { Rule } from "./abstract.rule";

export class LabelRule<T> extends Rule<T> {
  private readonly label: string;

  constructor(label: string, strategy: Strategy<T>) {
    super(strategy);
    this.label = label;
  }

  getLable(): string {
    return this.label;
  }
}
