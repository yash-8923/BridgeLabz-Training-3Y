class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  // Increase monthly salary by the given percent
  applyBonus(percent) {
    this.salary = this.salary + (this.salary * percent) / 100;
  }
}

const output = document.getElementById("output");
function show(text) {
  console.log(text);
  output.textContent += text + "\n";
}

const employees = [
  new Employee(1, "Amit", "IT", 50000),
  new Employee(2, "Sara", "HR", 40000),
  new Employee(3, "Kiran", "Finance", 60000),
  new Employee(4, "Neha", "IT", 55000),
  new Employee(5, "Rohan", "Sales", 35000)
];

show("--- Annual salaries ---");
employees.forEach(function (emp) {
  show(`${emp.name} (${emp.department}): ${emp.getAnnualSalary()}`);
});

// Give Rohan a 10% bonus and show the change
employees[4].applyBonus(10);
show("\nRohan after 10% bonus: " + employees[4].getAnnualSalary());

// reduce() adds up every employee's annual salary
const totalPayout = employees.reduce(function (total, emp) {
  return total + emp.getAnnualSalary();
}, 0);
show("\nTotal annual payout: " + totalPayout);
