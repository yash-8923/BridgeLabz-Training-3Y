// show() = console.log + prints on the page too
const output = document.getElementById("output");
function show(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Constructor function: sets the data for each car
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Method on the prototype: written once, shared by all cars
Car.prototype.getDetails = function () {
  show("Car: " + this.brand + " " + this.model);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

// Both cars use the SAME function from the prototype (not a copy)
show("Same method shared? " + (car1.getDetails === car2.getDetails));
show("Does car1 own getDetails? " + car1.hasOwnProperty("getDetails")); // false
