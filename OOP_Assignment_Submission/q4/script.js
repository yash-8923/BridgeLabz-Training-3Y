class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return this.name + " works in the " + this.department + " department.";
  }
}

class Manager extends Employee {
  work() {
    return this.name + " manages the " + this.department + " department.";
  }
}

let people = [
  new Employee("Neha", "Development"),
  new Manager("Rahul", "Sales")
];

let output = document.getElementById("output");
people.forEach(person => {
  output.innerHTML += `<p>${person.work()}</p>`;
});

output.innerHTML += "<p>The same work() call gives different results for Employee and Manager. This is runtime polymorphism.</p>";
