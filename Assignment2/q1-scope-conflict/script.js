// Find the place on the page where we show output
const output = document.getElementById("output");

// Small helper: prints to the console AND on the page
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Global variable: can be used anywhere in the file
let bonus = 5000;

function calculateSalary(isPermanent) {
  // Local variables: only exist inside this function
  let salary = 40000;
  let total = salary;

  // Add bonus only for permanent employees
  if (isPermanent) {
    total = salary + bonus;
  }

  print("isPermanent = " + isPermanent + " -> Total salary: " + total);
}

calculateSalary(true);   // gets bonus
calculateSalary(false);  // no bonus

// Changing isPermanent only changes the result inside the function.
// The global bonus stays the same every time.
print("Global bonus is still: " + bonus);

// salary and isPermanent are local, so they don't exist outside
print("Can we see salary outside? " + (typeof salary !== "undefined"));
