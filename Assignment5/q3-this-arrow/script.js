// show() = console.log + prints on the page too
const output = document.getElementById("output");
function show(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Version 1: showName is an ARROW function
const user = {
  name: "Yash",
  showName: () => {
    // Arrow functions do not have their own "this".
    // They use the "this" of the place where they were written (outside the object),
    // not the user object. So this.name is NOT "Yash".
    // (Node: this = {} so undefined. Browser: this = window, window.name is empty.)
    show("Arrow function: this.name = " + this.name);
  }
};
user.showName();

// Version 2: the fix, a NORMAL function
const fixedUser = {
  name: "Yash",
  showName: function () {
    // A normal function gets "this" from how it is called.
    // fixedUser.showName() -> this is fixedUser
    show("Normal function: this.name = " + this.name);
  }
};
fixedUser.showName();
