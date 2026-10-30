const MAX_CHARS = 100;
const message = document.getElementById("message");
const counter = document.getElementById("counter");

function updateCounter() {
  const remaining = MAX_CHARS - message.value.length;
  counter.textContent = remaining;

  // Change the color depending on how many characters are left
  counter.className = "";
  if (remaining <= 0) {
    counter.className = "danger";
  } else if (remaining <= 20) {
    counter.className = "warning";
  }
}

// Block typing when the limit is reached
message.addEventListener("keydown", function (event) {
  const isNormalKey = event.key.length === 1 && !event.ctrlKey && !event.metaKey;
  if (message.value.length >= MAX_CHARS && isNormalKey) {
    event.preventDefault();
  }
});

// Update on every change; also cut pasted text that is too long
message.addEventListener("input", function () {
  if (message.value.length > MAX_CHARS) {
    message.value = message.value.slice(0, MAX_CHARS);
  }
  updateCounter();
});

document.getElementById("resetBtn").addEventListener("click", function () {
  message.value = "";
  updateCounter();
});
