// Find the place on the page where we show output
const output = document.getElementById("output");

// Small helper: prints to the console AND on the page
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Put numbers 1 to 30 in an array using a loop
let numbers = [];
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

// Store the result for each number in a new array
let results = [];
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];

  if (num % 3 === 0 && num % 5 === 0) {
    results.push("FizzBuzz");
  } else if (num % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

// Show number with its result
for (let i = 0; i < numbers.length; i++) {
  print(numbers[i] + " -> " + results[i]);
}
