// Find the place on the page where we show output
const output = document.getElementById("output");

// Small helper: prints to the console AND on the page
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

let x = 16.75;

let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
// Random whole number between 10 and 50
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Template literal for a neat summary
let summary = `
--- Math Summary for ${x} ---
Rounded value : ${rounded}
Square root   : ${squareRoot.toFixed(2)}
Power (x^3)   : ${power.toFixed(2)}
Random (10-50): ${randomNumber}
`;

print(summary);
