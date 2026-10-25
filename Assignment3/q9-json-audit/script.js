"use strict";

// print() = console.log + shows the text on the page too
const output = document.getElementById("output");
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];

for (let i = 0; i < rawData.length; i++) {
  const lineNumber = i + 1;
  // Debug: step through this loop. When JSON.parse fails, control jumps straight to catch.
  try {
    const item = JSON.parse(rawData[i]);

    // Check for missing keys
    const missing = [];
    if (item.user === undefined) { missing.push("user"); }
    if (item.age === undefined) { missing.push("age"); }
    if (missing.length > 0) {
      throw new Error("Missing key(s): " + missing.join(", "));
    }

    cleanData.push(item);
  } catch (error) {
    // JSON.parse throws SyntaxError; our own throw is a plain Error
    print(`Line ${lineNumber}: ${error.name} - ${error.message}`);
  }
}

print("Clean entries: " + JSON.stringify(cleanData));

// Bonus: age to Number, then keep only users 18 or older
const adults = [];
for (let i = 0; i < cleanData.length; i++) {
  const person = { user: cleanData[i].user, age: Number(cleanData[i].age) };
  if (person.age >= 18) {
    adults.push(person);
  }
}
print("Adults (18+): " + JSON.stringify(adults));
