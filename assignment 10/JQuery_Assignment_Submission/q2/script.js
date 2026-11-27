// Q2 - Employee Status Dashboard (XMLHttpRequest + PATCH). Run JSON Server on port 3002.
const API_URL = "http://localhost:3002/employees";
const listEl = document.getElementById("list");
const messageEl = document.getElementById("message");

function setBadge(badge, status) {
  badge.textContent = status;
  badge.className = "badge " + status;
}

function loadEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", API_URL);
  xhr.onload = function () {
    if (xhr.status === 200) {
      renderEmployees(JSON.parse(xhr.responseText));
    } else {
      listEl.textContent = "Error: could not load employees.";
    }
  };
  xhr.onerror = function () { listEl.textContent = "Error: could not load employees."; };
  xhr.send();
}

function renderEmployees(employees) {
  listEl.innerHTML = "";
  employees.forEach(function (emp) {
    const row = document.createElement("div");
    row.className = "card";

    const name = document.createElement("strong");
    name.textContent = emp.name;

    const badge = document.createElement("span");
    setBadge(badge, emp.status);

    const label = document.createElement("label");
    label.className = "switch";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = emp.status === "active";
    const slider = document.createElement("span");
    slider.className = "slider";
    label.append(checkbox, slider);

    checkbox.addEventListener("change", function () {
      toggleStatus(emp, checkbox, badge);
    });

    row.append(name, badge, label);
    listEl.appendChild(row);
  });
}

function toggleStatus(emp, checkbox, badge) {
  const oldStatus = emp.status;
  const newStatus = oldStatus === "active" ? "inactive" : "active";
  messageEl.textContent = "";

  // Update the UI at once
  emp.status = newStatus;
  setBadge(badge, newStatus);

  const xhr = new XMLHttpRequest();
  xhr.open("PATCH", API_URL + "/" + emp.id);
  xhr.setRequestHeader("Content-Type", "application/json");

  function revert() {
    emp.status = oldStatus;
    checkbox.checked = oldStatus === "active";
    setBadge(badge, oldStatus);
    messageEl.textContent = "Error: could not update the status of " + emp.name + ".";
  }

  xhr.onload = function () {
    if (xhr.status < 200 || xhr.status >= 300) { revert(); }
  };
  xhr.onerror = revert;
  xhr.send(JSON.stringify({ status: newStatus }));
}

loadEmployees();
