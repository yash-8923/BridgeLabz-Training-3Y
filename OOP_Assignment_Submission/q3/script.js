function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  return this.price - (this.price * percent / 100);
};

let products = [
  new Product("Laptop", 50000),
  new Product("Headphones", 2000),
  new Product("Keyboard", 1500)
];

let discounts = [10, 20, 15];
let output = document.getElementById("output");

products.forEach((product, index) => {
  let newPrice = product.applyDiscount(discounts[index]);
  output.innerHTML += `<p>${product.name}: Original price Rs. ${product.price}, Discount: ${discounts[index]}%, New price: Rs. ${newPrice.toFixed(2)}</p>`;
});

output.innerHTML += "<p>Abstraction lets us use applyDiscount() without repeating the discount calculation each time.</p>";
