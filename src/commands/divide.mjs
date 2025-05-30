/**
 * Divides the first number by the second number and returns the result
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} - Result of a divided by b
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}
