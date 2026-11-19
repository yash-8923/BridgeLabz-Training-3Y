class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero.");
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero.");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient balance.");
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let output = document.getElementById("output");
let account = new BankAccount(5000);

account.deposit(2000);
output.innerHTML += `<p>After depositing Rs. 2000, balance: Rs. ${account.getBalance()}</p>`;

try {
  account.withdraw(10000);
} catch (error) {
  output.innerHTML += `<p>Withdrawal error handled: ${error.message}</p>`;
}

account.withdraw(1000);
output.innerHTML += `<p>After withdrawing Rs. 1000, balance: Rs. ${account.getBalance()}</p>`;
