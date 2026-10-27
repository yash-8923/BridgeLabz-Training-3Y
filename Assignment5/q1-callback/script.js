// show() = console.log + prints on the page too
const output = document.getElementById("output");
function show(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// This function is passed in as a callback
function showEndMessage() {
  show("Welcome to the course!");
}

// greetUser prints the greeting first, then calls the callback
function greetUser(name, callback) {
  show("Hello " + name);
  callback(); // runs AFTER the greeting
}

// Flow: greetUser starts -> prints Hello -> calls showEndMessage -> prints Welcome
greetUser("Yash", showEndMessage);
