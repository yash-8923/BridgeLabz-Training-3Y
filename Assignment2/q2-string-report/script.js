// Find the place on the page where we show output
const output = document.getElementById("output");

// Small helper: prints to the console AND on the page
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Messy product name
let productName = "  wireless headphones PRO  ";

// Step 1: remove extra spaces and make everything lowercase
let cleaned = productName.trim().toLowerCase();

// Step 2: replace "pro" with "Pro Edition"
cleaned = cleaned.replace("pro", "Pro Edition");

// Step 3: split into words, capitalize each word, join back
let words = cleaned.split(" ");
let capitalWords = words.map(function (word) {
  return word[0].toUpperCase() + word.slice(1);
});
let finalTitle = capitalWords.join(" ");

print("Original: '" + productName + "'");
print("Cleaned title: " + finalTitle);
print("Length: " + finalTitle.length);
