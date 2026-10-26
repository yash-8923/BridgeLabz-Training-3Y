const namePattern = /^[A-Za-z ]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const seatsPattern = /^([1-9]|10)$/; // 1 to 9, or 10

function setError(id, message) {
  document.getElementById(id + "Error").textContent = message;
  document.getElementById(id).className = message ? "invalid" : "valid";
}

document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const seats = document.getElementById("seats").value.trim();

  const nameOk = namePattern.test(name);
  const emailOk = emailPattern.test(email);
  const seatsOk = seatsPattern.test(seats);

  setError("name", nameOk ? "" : "Name must have alphabets only");
  setError("email", emailOk ? "" : "Enter a proper email");
  setError("seats", seatsOk ? "" : "Seats must be between 1 and 10");

  const ticket = document.getElementById("ticket");
  if (nameOk && emailOk && seatsOk) {
    // Save the booking in an object
    const booking = { name: name, email: email, seats: Number(seats) };
    ticket.textContent =
      "---- MOVIE TICKET ----\n" +
      `Name : ${booking.name}\n` +
      `Email: ${booking.email}\n` +
      `Seats: ${booking.seats}`;
    console.log(booking);
  } else {
    ticket.textContent = "";
  }
});
