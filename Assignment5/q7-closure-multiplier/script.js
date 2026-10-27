// show() = console.log + prints on the page too
const output = document.getElementById("output");
function show(text) {
  console.log(text);
  output.textContent += text + "\n";
}

function makeMultiplier(multiplier) {
  // The returned function remembers "multiplier" even after makeMultiplier has finished
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

show("triple(5) = " + triple(5));   // 15
show("double(5) = " + double(5));   // 10

// How closure works:
// makeMultiplier(3) finishes running, but the inner function still has access
// to its variable multiplier (= 3). That "remembered" variable is the closure.
// triple and double each keep their own separate multiplier.
