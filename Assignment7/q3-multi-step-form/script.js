const steps = document.querySelectorAll(".step");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const errorBox = document.getElementById("error");
let currentStep = 0; // 0, 1, 2

// One check per step. Each returns an error text, or "" if valid
const validators = [
  function () {
    return /^[A-Za-z ]+$/.test(document.getElementById("name").value.trim()) ? "" : "Name must have alphabets only";
  },
  function () {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("email").value.trim()) ? "" : "Enter a valid email";
  },
  function () {
    return document.getElementById("password").value.length >= 6 ? "" : "Password needs at least 6 characters";
  }
];

function showStep() {
  steps.forEach(function (step, index) {
    step.classList.toggle("active", index === currentStep);
  });
  backBtn.disabled = currentStep === 0;
  nextBtn.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
}

nextBtn.addEventListener("click", function () {
  const error = validators[currentStep]();
  errorBox.textContent = error;
  if (error) return; // stay on this step

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep();
  } else {
    // All 3 steps done -> show summary
    steps[currentStep].classList.remove("active");
    backBtn.style.display = "none";
    nextBtn.style.display = "none";
    document.getElementById("summary").textContent =
      "--- Summary ---\n" +
      "Name    : " + document.getElementById("name").value + "\n" +
      "Email   : " + document.getElementById("email").value + "\n" +
      "Password: " + "*".repeat(document.getElementById("password").value.length);
  }
});

backBtn.addEventListener("click", function () {
  if (currentStep > 0) {
    currentStep--;
    errorBox.textContent = "";
    showStep();
  }
});

showStep();
