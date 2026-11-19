class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null || this.distance < 0) {
      throw new Error("Please provide a valid non-negative distance.");
    }

    return this.distance * 12;
  }
}

let output = document.getElementById("output");
let driver = new Driver("Vikram", 4.8, "Car");
let trip = new Trip("Agra", "Mathura", 60);

output.innerHTML += `<p>Driver: ${driver.name}, Rating: ${driver.rating}, Vehicle: ${driver.vehicle}</p>`;

try {
  output.innerHTML += `<p>Trip: ${trip.fromLocation} to ${trip.toLocation}</p>`;
  output.innerHTML += `<p>Fare: Rs. ${trip.calculateFare()}</p>`;
} catch (error) {
  output.innerHTML += `<p>Error: ${error.message}</p>`;
}

try {
  let invalidTrip = new Trip("Agra", "Delhi", -20);
  invalidTrip.calculateFare();
} catch (error) {
  output.innerHTML += `<p>Error handled: ${error.message}</p>`;
}
