export function strictEquality<T>(a: T, b: T) {
  return a === b;
}

export function createMemo<T extends Array<any>, S>(
  func: (...args: T) => S,
  equalityFunc = strictEquality,
) {
  let lastInput: T[] = [];
  let lastRes: any = null;
  return function wrapper(...args: T) {
    // if (args.reduce((last, val, index) => val !== lastInput[index] || last, false)) {
    // if (args.some((val, index) => val !== lastInput[index])) {
    if (args.some((val, index) => !equalityFunc(val, lastInput[index]))) {
      lastRes = func(...args);
      lastInput = args;
    }
    return lastRes as S;
  };
}
