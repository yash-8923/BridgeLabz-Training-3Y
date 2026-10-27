// show() = console.log + prints on the page too
const output = document.getElementById("output");
function show(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// --- Prototype version (from Q5) ---
function PersonProto(name) {
  this.name = name;
}
PersonProto.prototype.printName = function () {
  return "Name: " + this.name;
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function () {
  return "Branch: " + this.branch;
};

// --- ES6 class version ---
class Person {
  constructor(name) {
    this.name = name;
  }
  printName() {
    return "Name: " + this.name;
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);          // calls the Person constructor
    this.branch = branch;
  }
  printBranch() {
    return "Branch: " + this.branch;
  }
}

const oldStudent = new StudentProto("Aman", "Computer Science");
const newStudent = new Student("Aman", "Computer Science");

show("Prototype: " + oldStudent.printName() + " | " + oldStudent.printBranch());
show("Class    : " + newStudent.printName() + " | " + newStudent.printBranch());

// Both behave the same: same output and same chain
show("Same output? " + (oldStudent.printName() === newStudent.printName() &&
                        oldStudent.printBranch() === newStudent.printBranch()));
show("Class instanceof Person: " + (newStudent instanceof Person));
show("Proto instanceof PersonProto: " + (oldStudent instanceof PersonProto));
// Note: class is just cleaner syntax; underneath it still uses prototypes.
