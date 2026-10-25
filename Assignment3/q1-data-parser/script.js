"use strict";

// print() = console.log + shows the text on the page too
const output = document.getElementById("output");
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidValues = [];

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];

  // The three conversions
  const asNumber = Number(value);
  const asBoolean = Boolean(value);   // any non-empty string is true, even "false"!
  const asString = String(value);

  // Number("  ") is 0, so we check blank strings by hand
  const isBlank = typeof value === "string" && value.trim() === "";
  // Number(null) is 0 and Number(undefined) is NaN - both are not real data
  const isMissing = value === null || value === undefined;

  if (isNaN(asNumber) || isBlank || isMissing) {
    invalidValues.push(asString);
    print(`[${i}] INVALID -> "${asString}" | Number: ${asNumber} | Boolean: ${asBoolean}`);
  } else {
    validNumbers.push(asNumber);
    print(`[${i}] VALID   -> "${asString}" | Number: ${asNumber} | Boolean: ${asBoolean}`);
  }
}

print("--- Report ---");
print("Valid numbers: " + JSON.stringify(validNumbers));
print("Invalid values: " + JSON.stringify(invalidValues));
print(`Valid: ${validNumbers.length}, Invalid: ${invalidValues.length}`);
