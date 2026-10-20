// Find the place on the page where we show output
const output = document.getElementById("output");

// Small helper: prints to the console AND on the page
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words by splitting on spaces
let wordCount = feedback.split(" ").length;
print("Word count: " + wordCount);

// Lowercase so "Bad" and "bad" both match
let text = feedback.toLowerCase();

if (text.includes("bad") || text.includes("poor")) {
  print("Needs Improvement");
} else {
  print("Positive Feedback");
}
