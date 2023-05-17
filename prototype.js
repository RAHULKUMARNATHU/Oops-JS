function BankAccount(name, balance = 0) {
  this.customerName = name;
  this.accountNumber = Date.now();
  this.balance = balance;
  
  
}

/*makes reusable , resolves space complexity issue , function   is available every object which is created by BankAccount */
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}


const jackAccount = new BankAccount('jack' ,2000)
const johnAccount = new BankAccount("john", 100);

/*Here Prototype Chaining is used */
jackAccount.deposit(1000);
jackAccount.withdraw(500);

console.log(jackAccount, johnAccount);