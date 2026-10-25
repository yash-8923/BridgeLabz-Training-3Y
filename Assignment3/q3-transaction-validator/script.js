"use strict";

// print() = console.log + shows the text on the page too
const output = document.getElementById("output");
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

// Custom error types
class NegativeAmountError extends Error {}
class MissingDataError extends Error {}
class NullEntryError extends Error {}

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  const t = transactions[i];

  // BREAKPOINT: set a breakpoint here in VS Code and watch i, t, valid, invalid
  debugger;

  try {
    if (t === null) {
      throw new NullEntryError("Null entry");
    }
    if (t.id === undefined || t.amount === undefined) {
      throw new MissingDataError("Missing id or amount");
    }
    if (t.amount < 0) {
      throw new NegativeAmountError("Negative amount: " + t.amount);
    }
    valid.push(t);
  } catch (error) {
    // Save the error type name and message
    invalid.push({ type: error.constructor.name, message: error.message, index: i });
  }
}

print("--- Final Report ---");
print("Successful: " + valid.length);
print("Failed: " + invalid.length);
for (let i = 0; i < invalid.length; i++) {
  print(`  #${invalid[i].index} ${invalid[i].type}: ${invalid[i].message}`);
}
