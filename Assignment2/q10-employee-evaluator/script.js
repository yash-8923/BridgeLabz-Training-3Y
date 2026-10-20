// Find the place on the page where we show output
const output = document.getElementById("output");

// Small helper: prints to the console AND on the page
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Each inner array is [department name, score]
const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

for (let i = 0; i < departments.length; i++) {
  let name = departments[i][0];
  let score = departments[i][1];
  let rating;

  if (score >= 90) {
    rating = "Excellent";
  } else if (score >= 75) {
    rating = "Good";
  } else if (score >= 60) {
    rating = "Average";
  } else {
    rating = "Needs Improvement";
  }

  print(name + " (" + score + "): " + rating);
}
