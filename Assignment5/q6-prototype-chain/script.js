// show() = console.log + prints on the page too
const output = document.getElementById("output");
function show(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Level 1: Person
function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function () {
  show("Hi, I am " + this.name);
};

// Level 2: Faculty inherits Person
function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
  show("Department: " + this.department);
};

// Level 3: Professor inherits Faculty
function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function () {
  show(this.name + " teaches " + this.subject);
};

const prof = new Professor("Dr. Rao", "Computer Science", "JavaScript");

// One Professor object can use methods from all three levels
prof.teach();           // from Professor
prof.showDepartment();  // from Faculty
prof.introduce();       // from Person
