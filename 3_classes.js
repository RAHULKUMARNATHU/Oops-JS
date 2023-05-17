/*We can not hoist the class  , we will get reference error*/
/*we can make class expression */

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

const jackAccount = new BankAccount("jack Sparrow", 90000);
jackAccount.deposit(20000)


const johnAccount = new BankAccount("john" , 300)
johnAccount.withdraw(50)

console.log(jackAccount , johnAccount);
