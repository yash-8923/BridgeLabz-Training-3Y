"use strict";

// print() = console.log + shows the text on the page too
const output = document.getElementById("output");
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
  { name: "Broken" }   // extra: missing properties, to test try...catch
];

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];

    // Convert text to numbers
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    // Missing property gives NaN, so we throw our own error
    if (isNaN(salary) || isNaN(years)) {
      throw new Error("salary or years is missing/invalid");
    }

    // 10% bonus for more than 3 years, otherwise 5%
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

    print(`Name: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus} | Total: ${salary + bonus}`);
  } catch (error) {
    print(`Error for employee #${i + 1}: ${error.message}`);
  }
}
// Strict mode note: writing "bonus = 5" without const/let would throw a ReferenceError.
