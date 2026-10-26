class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name: name, price: price, quantity: quantity });
  }

  // Total of all items, minus the coupon discount if any
  getTotal() {
    const subtotal = this.items.reduce(function (sum, item) {
      return sum + item.price * item.quantity;
    }, 0);
    return subtotal - (subtotal * this.discountPercent) / 100;
  }

  // Coupon must look exactly like SAVE20 or DISC10
  applyCoupon(code) {
    const couponPattern = /^(SAVE20|DISC10)$/;
    if (!couponPattern.test(code)) {
      return false;
    }
    // SAVE20 -> 20, DISC10 -> 10 (the last two digits are the percent)
    this.discountPercent = Number(code.slice(-2));
    return true;
  }
}

const cart = new Cart();

function showCart() {
  const list = document.getElementById("cartList");
  list.innerHTML = "";
  cart.items.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} x ${item.quantity}`;
    list.appendChild(li);
  });
  document.getElementById("total").textContent = "Total: " + cart.getTotal();
}

document.getElementById("itemForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("itemName").value;
  const price = Number(document.getElementById("itemPrice").value);
  const quantity = Number(document.getElementById("itemQty").value);
  cart.addItem(name, price, quantity);
  event.target.reset();
  showCart();
});

document.getElementById("applyBtn").addEventListener("click", function () {
  const code = document.getElementById("coupon").value.trim();
  const message = document.getElementById("couponMessage");
  if (cart.applyCoupon(code)) {
    message.textContent = `Coupon applied: ${cart.discountPercent}% off`;
    message.style.color = "green";
  } else {
    message.textContent = "Invalid coupon. Use SAVE20 or DISC10.";
    message.style.color = "red";
  }
  showCart();
});
