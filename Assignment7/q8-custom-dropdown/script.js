const dropdown = document.getElementById("dropdown");
const dropBtn = document.getElementById("dropBtn");
const options = document.getElementById("options");

// Button shows/hides the options
dropBtn.addEventListener("click", function () {
  options.classList.toggle("open");
});

// Clicking an option updates the button text and closes the list
options.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    dropBtn.textContent = event.target.textContent;
    options.classList.remove("open");
  }
});

// Close when clicking outside. The third argument "true" = CAPTURING phase,
// so this runs first, before the click reaches the clicked element.
document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    options.classList.remove("open");
  }
}, true);
