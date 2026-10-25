"use strict";

// print() = console.log + shows the text on the page too
const output = document.getElementById("output");
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// 1. Prediction for the original code:
//    outer: count is hoisted as undefined       -> prints undefined
//    inner: its OWN count is hoisted as undefined -> prints undefined (not 5!)
// 2. Each function call gets its own memory (execution context), so the two
//    "count" variables are different. inner's var count hides outer's count.
function outer() {
  print("outer count: " + count);   // undefined
  var count = 5;
  function inner() {
    print("inner count: " + count); // undefined
    var count = 10;
  }
  inner();
}
outer();

// Without the var inside inner, it would use outer's count (closure)
function outerClosure() {
  var count = 5;
  function inner() {
    print("inner (closure) count: " + count);   // 5
  }
  inner();
}
outerClosure();

// 3. Arrow version: same var behaviour inside, but the arrow is stored in a const,
//    so it cannot be called before its line (it is not hoisted like a function declaration).
function outerArrow() {
  var count = 5;
  try {
    inner();   // fails here
  } catch (error) {
    print("Arrow error: " + error.message);
  }
  const inner = () => {
    print("arrow inner count: " + count);   // 5 (arrow still sees outer's count)
  };
  inner();
}
outerArrow();

// 4. Debug: put a breakpoint in outer() and step into inner().
//    Call Stack: inner <- outer <- (global). Each frame has its own "count" in Locals.
