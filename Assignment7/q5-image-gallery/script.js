const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const modalBox = document.getElementById("modalBox");
const modalImage = document.getElementById("modalImage");

// No internet needed: we draw simple colored pictures as SVG
function makePicture(color, label, size) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <rect width="100%" height="100%" fill="${color}"/>
    <text x="50%" y="50%" font-size="${size / 4}" fill="white" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c"];

colors.forEach(function (color, index) {
  const img = document.createElement("img");
  img.src = makePicture(color, "Pic " + (index + 1), 150);
  img.dataset.big = makePicture(color, "Pic " + (index + 1), 500); // bigger version
  grid.appendChild(img);
});

grid.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    modalImage.src = event.target.dataset.big;
    modal.classList.add("open");
  }
});

// Click on the dark background closes the modal
modal.addEventListener("click", function () {
  modal.classList.remove("open");
});

// Click inside the white box should NOT reach the background, so we stop it
modalBox.addEventListener("click", function (event) {
  event.stopPropagation();
});
