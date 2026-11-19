function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function boilWater() {
  return wait(1500).then(() => {
    if (Math.random() < 0.2) throw new Error("Water could not be boiled.");
    console.log("Water boiled.");
  });
}

function brewCoffee() {
  return wait(1200).then(() => {
    if (Math.random() < 0.2) throw new Error("Coffee could not be brewed.");
    console.log("Coffee brewed.");
  });
}

function pourCoffee() {
  return wait(1000).then(() => {
    if (Math.random() < 0.2) throw new Error("Coffee could not be poured.");
    console.log("Coffee poured into the cup.");
  });
}

// Promise chaining runs each step only after the previous step succeeds.
boilWater()
  .then(() => brewCoffee())
  .then(() => pourCoffee())
  .then(() => console.log("Coffee ready for the team!"))
  .catch(error => console.log("Coffee process failed:", error.message));
