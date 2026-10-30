const searchBox = document.getElementById("search");
const rows = document.querySelectorAll("#tableBody tr");
const noResults = document.getElementById("noResults");

// "input" event runs every time the user types
searchBox.addEventListener("input", function () {
  const searchText = searchBox.value.toLowerCase(); // lowercase = case-insensitive
  let visibleCount = 0;

  rows.forEach(function (row) {
    const rowText = row.textContent.toLowerCase();
    const matches = rowText.includes(searchText);
    row.style.display = matches ? "" : "none";
    if (matches) visibleCount++;
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
});
