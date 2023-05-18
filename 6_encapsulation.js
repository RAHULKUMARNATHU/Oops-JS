class BankAccount {
  customerName;
  #accountNumber; /*Private attribute  , can not access outside of class*/
  #balance;
  constructor(customerName, balance) {
    this.customerName = customerName;
    this.#accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }

  setBalance(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount must be a number");
    }
    this.#balance = amount;
  }

  getBalance(amount) {
    return this.#balance;
  }
}

class currentAccount extends BankAccount {
  transactionLimit = 100000;

  constructor(customerName, balance) {
    super(customerName, balance);
  }

  /*Private method  can not access outside of class*/
  #calculateInterest(amount) {
    console.log("calculating interest of amount:", +amount);
  }

  takingBusinessLoan(amount) {
    this.#calculateInterest(amount);
    console.log("taking business loan", +amount);
  }
}

const jackAccount = new currentAccount("jack sparrow", 2000);
// jackAccount.setBalance(9000);
jackAccount.takingBusinessLoan(90000);
console.log(jackAccount);
