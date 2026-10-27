// show() = console.log + prints on the page too
const output = document.getElementById("output");
function show(text) {
  console.log(text);
  output.textContent += text + "\n";
}

function Person(name) {
  this.name = name;
}
Person.prototype.printName = function () {
  show("Name: " + this.name);
};

function Student(name, branch) {
  Person.call(this, name);  // reuse Person's constructor to set name
  this.branch = branch;
}

// Link prototypes so Student inherits from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
  show("Branch: " + this.branch);
};

const student = new Student("Aman", "Computer Science");
student.printName();    // found up the chain, in Person.prototype
student.printBranch();  // found in Student.prototype

// Prototype chain: student -> Student.prototype -> Person.prototype -> Object.prototype -> null
show("Student.prototype is in chain? " + (Object.getPrototypeOf(student) === Student.prototype));
show("Person.prototype is in chain? " + Person.prototype.isPrototypeOf(student));
show("student instanceof Person: " + (student instanceof Person));
