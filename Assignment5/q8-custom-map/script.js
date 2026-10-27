// show() = console.log + prints on the page too
const output = document.getElementById("output");
function show(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Add myMap to the Array prototype so every array can use it
Array.prototype.myMap = function (callback) {
  const result = [];
  // "this" is the array on which myMap was called
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this)); // same arguments as the real map()
  }
  return result;
};

show("myMap: " + [1, 2, 3].myMap(function (num) { return num * 2; }));
show("map   : " + [1, 2, 3].map(function (num) { return num * 2; }));
show("With index: " + ["a", "b"].myMap((item, index) => item + index));
