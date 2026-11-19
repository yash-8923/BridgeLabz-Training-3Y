class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    let total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  getGrade() {
    let average = this.calculateAverage();

    if (average >= 80) return "A";
    if (average >= 60) return "B";
    if (average >= 40) return "C";
    return "F";
  }
}

let students = [
  new Student("Aman", [85, 90, 88]),
  new Student("Riya", [70, 65, 72]),
  new Student("Karan", [32, 40, 35])
];

let output = document.getElementById("output");
students.forEach(student => {
  output.innerHTML += `<p><b>${student.name}</b> - Average: ${student.calculateAverage().toFixed(2)}, Grade: ${student.getGrade()}</p>`;
});
