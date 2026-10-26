const user = { name: "John", email: "john@mail.com", age: 21 };

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const display = document.getElementById("display");

// Show the object on the page
function showUser() {
  display.textContent = JSON.stringify(user, null, 2);
}

// Copy the form values into the object
function updateUser() {
  user.name = nameInput.value;
  user.email = emailInput.value;
  user.age = Number(ageInput.value);
  showUser();
}

// Fill the form with the starting values
nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;
showUser();

// Update while typing (real time) and also on submit
document.getElementById("userForm").addEventListener("input", updateUser);
document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault();
  updateUser();
});
