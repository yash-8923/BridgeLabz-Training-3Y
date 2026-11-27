// Q5 - College Timetable Viewer (Fetch + dynamic rendering). Run JSON Server on port 3005.
const API_URL = "http://localhost:3005/timetable";
const output = document.getElementById("output");

function showMessage(text, isError) {
  output.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = text;
  p.className = isError ? "error" : "muted";
  output.appendChild(p);
}

function renderClasses(classes) {
  output.innerHTML = "";
  classes.forEach(function (c) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.display = "block";
    ["Subject: " + c.subject, "Faculty: " + c.faculty, "Time: " + c.time].forEach(function (line, i) {
      const div = document.createElement(i === 0 ? "strong" : "div");
      div.textContent = line;
      card.appendChild(div);
    });
    output.appendChild(card);
  });
}

document.getElementById("daySelect").addEventListener("change", function () {
  const day = this.value;
  if (!day) { output.innerHTML = ""; return; }

  showMessage("Loading...", false);
  fetch(API_URL + "?day=" + encodeURIComponent(day))
    .then(function (res) {
      if (!res.ok) { throw new Error("HTTP " + res.status); }
      return res.json();
    })
    .then(function (data) {
      if (data.length === 0) {
        showMessage("No classes today.", false);
      } else {
        renderClasses(data);
      }
    })
    .catch(function () { showMessage("Error: could not load the timetable.", true); });
});
