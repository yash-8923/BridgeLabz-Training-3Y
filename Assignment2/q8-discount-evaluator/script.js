// Find the place on the page where we show output
const output = document.getElementById("output");

// Small helper: prints to the console AND on the page
function print(text) {
  console.log(text);
  output.textContent += text + "\n";
}

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

// Loop through the cart and apply category discounts
let discountedPrices = [];
for (let i = 0; i < cart.length; i++) {
  let price = cart[i].price;

  if (cart[i].category === "electronics") {
    price = price - price * 0.10;   // 10% off
  } else if (cart[i].category === "fashion") {
    price = price - price * 0.05;   // 5% off
  }

  discountedPrices.push(price);
  print(cart[i].item + ": " + cart[i].price + " -> " + price);
}

// reduce adds up all discounted prices
let total = discountedPrices.reduce(function (sum, price) {
  return sum + price;
}, 0);
print("Total after category discounts: " + total);

// Extra 5% if the total is more than 50000
if (total > 50000) {
  total = total - total * 0.05;
  print("Extra 5% discount applied!");
}

print("Final total: " + total);
