// Change this value to test a different purchase amount.
const purchaseTotal = 6500;

let discountPercentage = 0;

if (purchaseTotal >= 10000) {
    discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
    discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
    discountPercentage = 5;
}

const discountAmount = purchaseTotal * discountPercentage / 100;
const finalPrice = Math.round(purchaseTotal - discountAmount);

console.log(`Original total: Rs. ${Math.round(purchaseTotal)}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Final price after discount: Rs. ${finalPrice}`);
