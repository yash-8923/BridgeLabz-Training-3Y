const body = document.body;
const currentText = document.getElementById("current");

function applyTheme(themeName) {
  // Everything is done with setAttribute()
  body.setAttribute("class", "theme-" + themeName);   // class on <body>
  body.setAttribute("data-theme", themeName);         // custom attribute that saves the theme (CSS uses this)
  currentText.textContent = "Current theme (data-theme): " + body.getAttribute("data-theme");
}

document.querySelectorAll("button[data-choose]").forEach(function (button) {
  button.addEventListener("click", function () {
    applyTheme(button.getAttribute("data-choose"));
  });
});

applyTheme("light");
