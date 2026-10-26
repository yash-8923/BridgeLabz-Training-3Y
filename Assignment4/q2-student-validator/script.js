// Each field has a RegExp and an error message
const rules = {
  name: { pattern: /^[A-Za-z ]+$/, message: "Name can only have alphabets" },
  email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email like example@domain.com" },
  phone: { pattern: /^\d{10}$/, message: "Phone must be exactly 10 digits" },
  // (?=.*[A-Z]) = at least one capital, (?=.*\d) = one number, (?=.*[^A-Za-z0-9]) = one special character
  password: { pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, message: "Password needs 1 uppercase, 1 number and 1 special character" }
};

// Checks one field, colors the border and shows/clears the message
function validateField(fieldName) {
  const input = document.getElementById(fieldName);
  const errorBox = document.getElementById(fieldName + "Error");
  const isValid = rules[fieldName].pattern.test(input.value);

  input.className = isValid ? "valid" : "invalid";
  errorBox.textContent = isValid ? "" : rules[fieldName].message;
  return isValid;
}

// Validate live while the user is typing
Object.keys(rules).forEach(function (fieldName) {
  document.getElementById(fieldName).addEventListener("input", function () {
    validateField(fieldName);
  });
});

document.getElementById("studentForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let allValid = true;
  Object.keys(rules).forEach(function (fieldName) {
    if (!validateField(fieldName)) {
      allValid = false;
    }
  });

  const result = document.getElementById("result");
  result.textContent = allValid ? "Registration successful!" : "Please fix the errors above.";
  result.style.color = allValid ? "green" : "red";
});
