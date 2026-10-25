"use strict";

// print() = console.log + shows the text on the page too
const output = document.getElementById("output");
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

// Custom errors
class DivideByZeroError extends Error {}
class NegativeRootError extends Error {}
class InvalidOperationError extends Error {}

function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) {
        throw new DivideByZeroError("Cannot divide by zero");
      }
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) {
        throw new NegativeRootError("Cannot take root of a negative number");
      }
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError("Unknown operation: " + operation);
  }
}

print(`--- Summary (num1 = ${num1}, num2 = ${num2}) ---`);
// Extra "modulo" added to show the InvalidOperationError
const allOperations = operations.concat(["modulo"]);

for (let i = 0; i < allOperations.length; i++) {
  try {
    const result = calculate(allOperations[i], num1, num2);
    print(`${allOperations[i].padEnd(9)}: ${result}`);
  } catch (error) {
    print(`${allOperations[i].padEnd(9)}: ${error.constructor.name} - ${error.message}`);
  }
}
