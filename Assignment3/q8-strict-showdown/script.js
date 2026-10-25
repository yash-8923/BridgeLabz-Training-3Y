"use strict";

// print() = console.log + shows the text on the page too
const output = document.getElementById("output");
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// The "use strict" at the top of this file would stop the demo from running at all
// (duplicate parameter is a SyntaxError). So we run the code from text in both modes.
const demoCode = `
  function demo(a, a) {
    total = 10;
    delete total;
  }
  demo(5, 10);
  return "ran without errors";
`;

// 1. Without strict mode (sloppy)
try {
  print("Sloppy mode: " + new Function(demoCode)());
} catch (error) {
  print("Sloppy mode error: " + error.message);
}

// 2. With strict mode
try {
  print("Strict mode: " + new Function('"use strict";' + demoCode)());
} catch (error) {
  print("Strict mode error: " + error.name + " - " + error.message);
}

// 3. Why strict mode blocks these:
//  - function demo(a, a): duplicate parameter names are confusing (which "a" wins? the last one) -> SyntaxError
//  - total = 10: no declaration, so JS would create an accidental global -> ReferenceError
//  - delete total: deleting a plain variable makes no sense -> SyntaxError

// 4. Correct version (ES6)
function demo(a, b) {
  let total = a + b;   // declared properly, local
  return total;
}
print("Correct version: demo(5, 10) = " + demo(5, 10));
