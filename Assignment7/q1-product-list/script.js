const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");
let editingItem = null; // the <li> that is being edited right now (or null)

// Build one list item with Edit and Delete buttons
function addProduct(text) {
  const item = document.createElement("li");
  item.innerHTML = `<span>${text}</span>
    <button data-action="edit">Edit</button>
    <button data-action="delete">Delete</button>`;
  productList.appendChild(item);
}

// Turn the text into an input box
function startEdit(item) {
  if (editingItem) {
    saveEdit(); // save the previous one first
  }
  const span = item.querySelector("span");
  const input = document.createElement("input");
  input.type = "text";
  input.value = span.textContent;
  item.replaceChild(input, span);
  input.focus();
  editingItem = item;
}

// Put the input value back as plain text
function saveEdit() {
  const input = editingItem.querySelector("input");
  const span = document.createElement("span");
  span.textContent = input.value.trim() || "(empty)";
  editingItem.replaceChild(span, input);
  editingItem = null;
}

document.getElementById("addBtn").addEventListener("click", function () {
  const text = productInput.value.trim();
  if (text === "") return;
  addProduct(text);
  productInput.value = "";
});

// EVENT DELEGATION: one listener on the <ul> handles every Edit/Delete button
productList.addEventListener("click", function (event) {
  const button = event.target.closest("button");
  if (!button) return; // clicked something else

  const item = button.closest("li");
  if (button.dataset.action === "delete") {
    if (item === editingItem) editingItem = null;
    item.remove();
  } else if (button.dataset.action === "edit") {
    if (item === editingItem) {
      saveEdit(); // clicking Edit again saves
    } else {
      startEdit(item);
    }
  }
});

// Click anywhere outside the edited item -> auto-save
document.addEventListener("click", function (event) {
  if (editingItem && !editingItem.contains(event.target)) {
    saveEdit();
  }
});

addProduct("Laptop");
addProduct("Phone");
