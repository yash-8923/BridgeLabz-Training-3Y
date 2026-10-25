"use strict";

// print() = console.log + shows the text on the page too
const output = document.getElementById("output");
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Ask for the number of rows. Default is 5 (also used if input is empty/invalid, or no prompt exists)
let rows = 5;
if (typeof prompt === "function") {
  const answer = Number(prompt("How many rows? (default 5)", "5"));
  if (answer > 0) {
    rows = answer;
  }
}

// Main pyramid with let
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  print(line);
}

// With var: loop variables are shared by the whole function, not just the loop block.
// Debug step: i and j are still alive after the loops end. With let they would not exist.
function withVar() {
  for (var i = 1; i <= 3; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
      line += "* ";
    }
  }
  print("var after loop -> i = " + i + ", j = " + j);   // i = 4, j = 4
}
withVar();

// Visible difference: callbacks inside loops
const showLater = [];
for (var a = 0; a < 3; a++) { showLater.push(() => a); }   // all share ONE a
print("var closures: " + showLater.map(f => f()));         // 3,3,3
const showLet = [];
for (let b = 0; b < 3; b++) { showLet.push(() => b); }     // each loop gets its own b
print("let closures: " + showLet.map(f => f()));           // 0,1,2

// "use strict" check: forgetting a declaration throws instead of making a global
try {
  new Function('"use strict"; for (k = 1; k <= 3; k++) {}')();
} catch (error) {
  print("Strict caught: " + error.message);
}
