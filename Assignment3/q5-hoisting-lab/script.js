"use strict";

// print() = console.log + shows the text on the page too
const output = document.getElementById("output");
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Everything is inside functions so the page's own globals don't interfere.

function original() {
  // Memory state before any line runs:
  //  score    (var)      -> hoisted, value = undefined
  //  announce (function) -> hoisted fully, can be called early
  //  status   (let)      -> hoisted but in the "temporal dead zone" until its line runs
  //  startGame(function) -> hoisted fully
  print("score before assign: " + score);   // undefined (not an error)
  announce();                                // works
  var score = 50;
  function announce() { print("Game started"); }
  let status = "ready";                      // declared before startGame() is called, so it is fine
  startGame();
  function startGame() { print(status); }
}
original();

// The trap: calling startGame BEFORE the let line breaks it
function trap() {
  try {
    startGame();
  } catch (error) {
    print("Trap error: " + error.message);   // Cannot access 'status' before initialization
  }
  let status = "ready";
  function startGame() { print(status); }
}
trap();

// Fixed: declare values first, then use them
function fixed() {
  var score = 50;
  let status = "ready";
  function announce() { print("Game started"); }
  function startGame() { print(status); }
  print("score: " + score);
  announce();
  startGame();
}
fixed();

// Arrow function version: arrows are stored in const, so they are NOT usable before their line
function arrowVersion() {
  try {
    announce();   // fails: announce is in the temporal dead zone
  } catch (error) {
    print("Arrow error: " + error.message);
  }
  const announce = () => print("Game started");
  announce();     // works after the declaration
}
arrowVersion();
