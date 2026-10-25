"use strict";

// print() = console.log + shows the text on the page too
const output = document.getElementById("output");
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// 1. The broken version
function showMessageBroken() {
  greeting = "Welcome"; // never declared with let/const/var
  console.log(greeting);
}

try {
  showMessageBroken();
} catch (error) {
  // Under "use strict", assigning to an undeclared variable is a ReferenceError.
  // Without strict mode, JS would silently create a global variable instead.
  print("Error: " + error.name + " - " + error.message);
}

// 2. The fix: declare the variable first. Now it lives only inside the function (local scope).
function showMessage() {
  const greeting = "Welcome";
  debugger; // 3. Add "greeting" to the Watch panel and look at the Call Stack here
  print(greeting);
}
showMessage();

// Debug observation: the Call Stack shows showMessage <- (anonymous/global script).
// greeting is visible in the Local scope, not in Global.
