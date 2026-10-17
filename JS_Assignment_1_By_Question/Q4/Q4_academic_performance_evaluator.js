// Enter marks for five subjects, each out of 100.
const marks = [88, 79, 91, 84, 86];

let totalMarks = 0;

for (const mark of marks) {
    totalMarks += mark;
}

const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;
const hasFailedSubject = marks.some(mark => mark < 35);

console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);

if (hasFailedSubject) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}
