#!/usr/bin/env node

import { sum } from "./commands/sum.mjs";
import { subtract } from "./commands/subtract.mjs";
import { multiply } from "./commands/multiply.mjs";
import { divide } from "./commands/divide.mjs";

/**
 * Main calculator function that processes command line arguments
 * and outputs the results of sum and subtract operations
 */
function main() {
  // Get command line arguments (skip the first two which are node and script path)
  const args = process.argv.slice(2);

  // Check if we have exactly two arguments
  if (args.length !== 2) {
    console.error("Usage: node calculator.mjs <number1> <number2>");
    process.exit(1);
  }

  // Parse the arguments as numbers
  const num1 = parseFloat(args[0]);
  const num2 = parseFloat(args[1]);

  // Check if arguments are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    console.error("Error: Both arguments must be valid numbers");
    process.exit(1);
  }

  // Calculate and output results
  console.log(`Sum: ${num1} + ${num2} = ${sum(num1, num2)}`);
  console.log(`Subtract: ${num1} - ${num2} = ${subtract(num1, num2)}`);
  console.log(`Multiply: ${num1} * ${num2} = ${multiply(num1, num2)}`);

  // Add divide operation
  try {
    console.log(`Divide: ${num1} / ${num2} = ${divide(num1, num2)}`);
  } catch (error) {
    console.error(`Division Error: ${error.message}`);
  }
}

// Run the main function
main();
