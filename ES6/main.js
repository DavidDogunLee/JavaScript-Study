// let and const

// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// names6 = 'Jane Miller';
// console.log(name6);

// ES5
// function driversLicence5(passedTest) {
//   console.log(firstName)
//
//   if (passedTest) {
//     var firstName = 'John';
//     var yearOfBirth = 1990;
//   }
//
//   console.log(firstName + ', born in ' + yearOfBirth + ', is now allowed to dirve a car.')
// }
// driversLicence5(true);
//
// // ES6
// function driversLicence6(passedTest) {
//   console.log(firstName)
//       let firstName;
//       const yearOfBirth = 1990;
//
//   if (passedTest) {
//     firstName = 'John';
//   }
//
//   console.log(firstName + ', born in ' + yearOfBirth + ', is now allowed to dirve a car.')
// }
// driversLicence6(true);


// Default parameter
// ES5
// function LeePerson(firstName, yearOfBirth, lastName, nationality) {
//
//   lastName === undefined ? lastName = 'Lee' : lastName = lastName;
//   nationality === undefined ? nationality = 'Korean' : nationality = nationality;
//
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
//
// }
//
// var david = new LeePerson('David', 1990);


// ES6
// function LeePerson(firstName, yearOfBirth, lastName = 'Lee', nationality = 'Korean') {
//
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
//
// };
//
// var david = new LeePerson('David', 1990);



// Classes
// ES5 - Constructor function
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }
//
// var david5 = new Person5('David', 1990, 'programmer');
//
// // ES6
// class Person6 {
//
//   constructor (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//
//   calculateAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
//
// }
//
// const david6 = new Person6('David Lee', 1990, 'programmer');

// class defination are not hoisted unlike function defination so we need to 1st declear before we can start using it.
// Also, we can only add method to the class but not property
// inheriting property from object instance is not a best practice anyway.

// Sub-class
// ES5
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// }
//
// var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
//   Person5.call(this, name, yearOfBirth, job);
//   this.olymicGames = olymicGames;
//   this.medals = medals;
// }
//
// Athlete5.prototype = Object.create(Person5.prototype);
//
// Athlete5.prototype.wonMedal = function() {
//   this.medals++;
//   console.log(this.medals);
// }
// var davidAthlete5 = new Athlete5('David', 1990, 'swimmer', 3, 10);
//
// davidAthlete5.calculateAge();
// davidAthlete5.wonMedal();
// davidAthlete5.wonMedal();


// ES6 - Sub-class
class Person6 {

  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

}

class Athlete6 extends Person6 {

  constructor(name, yearOfBirth, job, olymicGames, medals) {
    super(name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }

}

const davidAthlete6 = new Athlete6('David', 1990, 'runner', 3, 10);

davidAthlete6.calculateAge();
davidAthlete6.wonMedal();
