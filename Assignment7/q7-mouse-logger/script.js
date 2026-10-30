const box = document.getElementById("box");
const coords = document.getElementById("coords");

// Show live clientX and clientY while moving inside the box
box.addEventListener("mousemove", function (event) {
  coords.textContent = "clientX: " + event.clientX + ", clientY: " + event.clientY;
});

// Double-click drops a red dot where the click happened
box.addEventListener("dblclick", function (event) {
  const boxPosition = box.getBoundingClientRect();
  const dot = document.createElement("div");
  dot.className = "dot";
  // clientX is from the page corner, so subtract the box position to place it inside the box
  dot.style.left = (event.clientX - boxPosition.left - box.clientLeft) + "px";
  dot.style.top = (event.clientY - boxPosition.top - box.clientTop) + "px";
  box.appendChild(dot);
});
