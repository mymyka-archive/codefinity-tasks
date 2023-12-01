export const andCondition =
  (...conditions: any[]) =>
  (arg: any) =>
    conditions.every((condition) => condition(arg));
