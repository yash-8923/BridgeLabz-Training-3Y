// A Product has an id, name, price and category
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Reduce the price by the given percent (e.g. 10 means 10% off)
  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
  }

  // Return the product details as one nice string
  getDetails() {
    return `#${this.id} | ${this.name} | ${this.category} | Rs. ${this.price}`;
  }
}

const output = document.getElementById("output");
function show(text) {
  console.log(text);
  output.textContent += text + "\n";
}

// Make some products and keep them in an array
const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 500, "Electronics"),
  new Product(3, "Office Chair", 7500, "Furniture"),
  new Product(4, "Notebook", 80, "Stationery"),
  new Product(5, "Headphones", 1500, "Electronics")
];

show("--- All products ---");
products.forEach(function (product) {
  show(product.getDetails());
});

// Apply 10% discount on the laptop
products[0].applyDiscount(10);
show("\n--- Laptop after 10% discount ---");
show(products[0].getDetails());

// Only show products costing more than 1000
const expensiveProducts = products.filter(function (product) {
  return product.price > 1000;
});
show("\n--- Products with price > 1000 ---");
expensiveProducts.forEach(function (product) {
  show(product.getDetails());
});
