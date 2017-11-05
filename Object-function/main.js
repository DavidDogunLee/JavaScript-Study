/*
1. Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript.
2. The prototype property of an object is where we put methods and properties
   that we want other objects to inherit;
3. The Constructor's prototype property is NOT the prototype of the Constructor itself,
   it's the prtotype of ALL instances that are created throught it;
4. When a certain method(or property)is called, the search starts in the object
itself, and if it cannot be found, the search moves on to the object's prototype.
This continues until the method is found: prototype chain
*/

// Function constructor

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');

john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
