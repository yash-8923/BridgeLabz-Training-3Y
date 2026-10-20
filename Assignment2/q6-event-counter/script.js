// Find the place on the page where we show output
const output = document.getElementById("output");

// Small helper: prints to the console AND on the page
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

let count = 0;

function increment() {
  count = count + 1;

  // Nested function: it can see and use count from outside
  function showCount() {
    print("Increased -> count = " + count);
  }
  showCount();
}

function decrement() {
  count = count - 1;

  function showCount() {
    print("Decreased -> count = " + count);
  }
  showCount();
}

// Pretend these are button clicks
increment();
increment();
increment();
decrement();
decrement();
