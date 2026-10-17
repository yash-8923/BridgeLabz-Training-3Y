// Store expenses for the five categories.
const expenses = [
    { category: "Food", amount: 4500 },
    { category: "Travel", amount: 1200 },
    { category: "Rent", amount: 8000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 1000 }
];

let total = 0;

for (const expense of expenses) {
    total += expense.amount;
}

const average = total / expenses.length;
const totalBeforeTax = total;
total += total * 0.10; // Add 10% tax to the total.

console.log(`Total before tax: Rs. ${totalBeforeTax.toFixed(2)}`);
console.log(`Average expense: Rs. ${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: Rs. ${total.toFixed(2)}`);
