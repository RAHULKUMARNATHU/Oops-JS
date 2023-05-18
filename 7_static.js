/*static properties */
// class config{

// static dbUser = 'username';
// static dbPassword = 'secret';
// static apiToken = 'abcd'

// }
// console.log(config.dbPassword );

/*Utility function  */
class User {
  static cache = {
    1: "some value",
  };

  static id = 1;
  constructor(name, age, income) {
    this.id = User.id++;
    this.name = name;
    this.age = age;
    this.income = income;
  }

  /*If both the method i.e calli and caller are static then we can use this to access the property */
  /*scope of 'this' depends on which type of function getting used */
  /*()=>{} ,point to window  */
  /*function(){} , point to parameter */
  /*static () , get access of property  */

  static checkCache() {
    console.log(this.cache);
  }

  static hasInCache() {
    this.checkCache()
  }


  /*Runs only once at initial level  */
  static{
    console.log('Initialized');
  }

  //   static sortByAge(user1, user2) {
  //     return user1.age - user2.age;
  //   }

  //   static sortByIncome(user1, user2) {
  //     return user1.income - user2.income;
  //   }
}

User.hasInCache();
User.hasInCache();

// const user1 = new User("John", 35, 5000);
// const user2 = new User("Jane", 15, 10000);
// const user3 = new User("Mike", 25, 15000);

// const users = [user1, user2, user3];
// users.sort(User.sortByIncome);
// // users.sort((user1, user2) => user2.age - user1.age);

// console.log(users);
