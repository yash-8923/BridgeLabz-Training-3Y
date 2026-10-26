// Username: at least 5 characters
const usernamePattern = /^.{5,}$/;

// Small patterns so we can give a specific message for each password rule
const hasNumber = /\d/;
const hasUppercase = /[A-Z]/;
const hasLowercase = /[a-z]/;
const hasSpecial = /[^A-Za-z0-9]/;
const hasEightChars = /^.{8,}$/;

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errors = [];

  if (!usernamePattern.test(username)) errors.push("Username must be at least 5 characters");
  if (!hasEightChars.test(password)) errors.push("Password must be at least 8 characters");
  if (!hasNumber.test(password)) errors.push("Password must include a number");
  if (!hasUppercase.test(password)) errors.push("Password must include an uppercase letter");
  if (!hasLowercase.test(password)) errors.push("Password must include a lowercase letter");
  if (!hasSpecial.test(password)) errors.push("Password must include a special character");

  const errorBox = document.getElementById("errors");
  const success = document.getElementById("success");

  if (errors.length === 0) {
    errorBox.innerHTML = "";
    success.textContent = "Login successful!";
  } else {
    success.textContent = "";
    errorBox.innerHTML = errors.join("<br>");
  }
});
