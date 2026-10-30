const form = document.getElementById("myForm");
const success = document.getElementById("success");

// Each field: a check that returns an error message, or "" if fine
const checks = {
  name: function (value) {
    return value.trim() === "" ? "Name is required" : "";
  },
  email: function (value) {
    if (value.trim() === "") return "Email is required";
    return value.includes("@") ? "" : "Email must contain @";
  },
  password: function (value) {
    return value.length >= 6 ? "" : "Password must be at least 6 characters";
  }
};

// Checks one field and shows/clears its message. Returns true if valid
function validateField(fieldName) {
  const value = document.getElementById(fieldName).value;
  const message = checks[fieldName](value);
  document.getElementById(fieldName + "Error").textContent = message;
  return message === "";
}

// Live: errors disappear automatically when the user fixes the input
Object.keys(checks).forEach(function (fieldName) {
  document.getElementById(fieldName).addEventListener("input", function () {
    validateField(fieldName);
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); // always stop the real page submit

  let allValid = true;
  Object.keys(checks).forEach(function (fieldName) {
    if (!validateField(fieldName)) allValid = false;
  });

  success.textContent = allValid ? "Form Submitted Successfully" : "";
});
