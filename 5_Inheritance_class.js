/*We are using class syntax to Inherit the base into child */

class BankAccount {
  customerName;
  accountNumber;
  balance;
  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class currentAccount extends BankAccount {
  transactionLimit = 500000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  takeBusinessLoan(amount) {
    console.log("Taking Business Loan" + amount);
  }
}

const jackAccount = new currentAccount("jack", 50000);
jackAccount.deposit(3000);
console.log(jackAccount);

class savingAccount extends BankAccount {
  transactionLimit = 300000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  takePersonalLoan(amount) {
    console.log("Taking Personal Loan" + amount);
  }
}

const johnAccount = new savingAccount("john", 10000);
johnAccount.deposit(200000);
console.log(johnAccount);
