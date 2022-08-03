export function sort(a: number, b: number) {
  return a - b;
}

export function saturate(lower: number, upper: number, input: number) {
  return input < lower ? lower : input > upper ? upper : input;
}
