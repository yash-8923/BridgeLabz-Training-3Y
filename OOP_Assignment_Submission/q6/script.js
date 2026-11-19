let products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 4 },
  { id: 2, name: "Mouse", category: "Electronics", price: 500, stock: 20 },
  { id: 3, name: "Chair", category: "Furniture", price: 3000, stock: 3 },
  { id: 4, name: "Table", category: "Furniture", price: 7000, stock: 8 },
  { id: 5, name: "Notebook", category: "Stationery", price: 60, stock: 50 }
];

function getLowStockProducts() {
  return products.filter(product => product.stock < 5);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory() {
  return products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product.name);
    return groups;
  }, {});
}

let output = document.getElementById("output");

output.innerHTML += "<h3>Low stock products (less than 5)</h3>";
getLowStockProducts().forEach(product => {
  output.innerHTML += `<p>${product.name} - Stock: ${product.stock}</p>`;
});

output.innerHTML += "<h3>Products sorted by price</h3>";
sortProductsByPrice().forEach(product => {
  output.innerHTML += `<p>${product.name} - Rs. ${product.price}</p>`;
});

output.innerHTML += `<h3>Total inventory value: Rs. ${calculateTotalInventoryValue()}</h3>`;
output.innerHTML += "<h3>Products grouped by category</h3>";
let groups = groupByCategory();
for (let category in groups) {
  output.innerHTML += `<p><b>${category}:</b> ${groups[category].join(", ")}</p>`;
}
