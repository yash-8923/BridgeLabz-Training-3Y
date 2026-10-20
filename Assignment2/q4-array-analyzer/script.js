// Find the place on the page where we show output
const output = document.getElementById("output");

// Small helper: prints to the console AND on the page
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Make 8 random scores between 30 and 100
let scores = [];
for (let i = 0; i < 8; i++) {
  scores.push(Math.floor(Math.random() * 71) + 30);
}

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// reduce adds all scores together
let sum = scores.reduce(function (total, score) {
  return total + score;
}, 0);
let average = sum / scores.length;

// filter keeps only passing scores (50 or more)
let passedStudents = scores.filter(function (score) {
  return score >= 50;
});

// map turns each score into a readable line
let lines = scores.map(function (score, index) {
  return "Student " + (index + 1) + ": " + score;
});

print("--- Student Summary ---");
print(lines.join("\n"));
print("Highest: " + highest);
print("Lowest: " + lowest);
print("Average: " + average.toFixed(2));
print("Passed: " + passedStudents.length + " out of " + scores.length);
