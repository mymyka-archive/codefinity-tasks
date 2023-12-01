export abstract class Strategy<T> {
  abstract isSatisfiedBy(value: T): boolean;
}
