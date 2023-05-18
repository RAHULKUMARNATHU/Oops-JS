/*Inheritance uses DRY-Don't Repeat itself */

/*This is constructor syntax for inheritance , we have also the class syntax */

function BankAccount(customerName, balance) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

// const johnAccount = new BankAccount("jack", 2000);
// console.log(johnAccount);

/*Current Account */
/*we can achieve it using inheritance

function currentAccount(customerName, balance) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  this.transactionLimit = 50000;
}

currentAccount.prototype.takeBusinessLoan = function (amount) {
  console.log("Taking Business Loan :" + amount);
};

currentAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

currentAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const userCurrent = new currentAccount("currentUser", 20000);

console.log(userCurrent);
*/

/*Saving Account */
/* we can achieve it using inheritance
function savingAccount(customerName, balance) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  this.transactionLimit = 10000;
}

savingAccount.prototype.takePersonalLoan = function (amount) {
  console.log("Taking Personal Loan :" + amount);
};

savingAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

savingAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const userSaving = new savingAccount("userSaving", 1999);

console.log( userSaving);

*/

function currentAccount(customerName , balance) {
    /*Constructor linking */
    /*Object.call(context , parameters) */
  BankAccount.call(this, customerName, balance);
  this.transactionLimit = 50000;
}

/*Prototype linking */
currentAccount.prototype = Object.create(BankAccount.prototype)

currentAccount.prototype.takeBusinessLoan = function (amount) {
  console.log("Taking Business Loan :" + amount);
};



const johnAccount = new currentAccount("john", 2000);
johnAccount.takeBusinessLoan(4000000);
console.log(johnAccount);



function savingAccount(customerName , balance) {
  /*Constructor linking */
    BankAccount.call(this , customerName , balance)
  this.transactionLimit = 10000;
}
/*Prototype linking */
savingAccount.prototype = Object.create(BankAccount.prototype)

savingAccount.prototype.takePersonalLoan = function (amount) {
  console.log("Taking Personal Loan :" + amount);
};



const jackAccount = new savingAccount("jack" , 1000000);
jackAccount.takePersonalLoan(399999);
jackAccount.deposit(299919)
console.log(jackAccount);

