// show() = console.log + prints on the page too
const output = document.getElementById("output");
function show(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Runs the operation (callback) on every number and returns a new array
function applyOperation(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]));
  }
  return result;
}

function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

const numbers = [1, 2, 3, 4];
show("Original: " + numbers);
show("Doubled : " + applyOperation(numbers, double));
show("Squared : " + applyOperation(numbers, square));
