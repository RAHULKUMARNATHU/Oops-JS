"use strict";

function BankAccount(name, balance = 0) {
  this.customerName = name;
  this.accountNumber = Date.now();
  this.balance = balance;
  /*These function are not optimized, can read the internal logic in console */
  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

// const johnAccount = new BankAccount("John", 1000);
// const jackAccount = new BankAccount("Jack", 500);
// jackAccount.balance = 1000; /*to avoid this change in real life we should use Oops . (encapsulation:-getter & Setter) */

// jackAccount.deposit(20000);
// jackAccount.withdraw(500);
// console.log(johnAccount, jackAccount);

/*DOM manipulation */

const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");




accountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = new BankAccount(customerName.value, +balance.value);
  // console.log(customerName.value , balance.value);
  accounts.push(account);
  console.log(accounts);
});


depositForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  const account = accounts.find((account) => account.accountNumber === +accountNumber.value);
  account.deposit(+amount.value);
  console.log(accounts);
})