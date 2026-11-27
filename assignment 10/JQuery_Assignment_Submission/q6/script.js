// Q6 - Registration with duplicate check (Axios GET + POST). Run JSON Server on port 3006.
const API_URL = "http://localhost:3006/users";
const messageEl = document.getElementById("message");

function showMessage(text, color) {
  messageEl.textContent = text;
  messageEl.style.color = color;
}

document.getElementById("submitBtn").addEventListener("click", async function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    showMessage("Please fill in all fields.", "#c0392b");
    return;
  }

  try {
    // Step 1: GET /users?email=...
    const check = await axios.get(API_URL, { params: { email: email } });
    if (check.data.length > 0) {
      showMessage("Email already registered.", "#c0392b");
      return;
    }
    // Step 2: POST the new user
    await axios.post(API_URL, { name: name, email: email, password: password });
    showMessage("Registration successful.", "#27ae60");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  } catch (err) {
    showMessage("Error: could not complete the registration.", "#c0392b");
  }
});
