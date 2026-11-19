let menu = [
  { name: "Burger", price: 120 },
  { name: "Pizza", price: 250 },
  { name: "Sandwich", price: 90 },
  { name: "Pasta", price: 180 }
];

function calculateBill(orderItems) {
  let priceList = orderItems.map(itemName => {
    let item = menu.find(menuItem => menuItem.name === itemName);

    if (!item) {
      throw new Error(itemName + " is not available in the menu.");
    }

    return item.price;
  });

  return priceList.reduce((total, price) => total + price, 0);
}

let output = document.getElementById("output");

try {
  let total = calculateBill(["Burger", "Pizza", "Pasta"]);
  output.innerHTML += `<p>Order: Burger, Pizza, Pasta</p><p>Total bill: Rs. ${total}</p>`;
} catch (error) {
  output.innerHTML += `<p>Error: ${error.message}</p>`;
}

try {
  let total = calculateBill(["Burger", "Sushi"]);
  output.innerHTML += `<p>Total bill: Rs. ${total}</p>`;
} catch (error) {
  output.innerHTML += `<p>Error handled: ${error.message}</p>`;
}
