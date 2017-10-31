// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

name = 'David';
console.log(name);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
/*
var name = 'John';
var age = 26;
// console.log(name + age);
// console.log(age + age);

var job, isMarried;
// console.log(job);

job = 'teacher';
isMarried = false;
console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';
console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);
alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
*/

// Lecture: operators
/*
var now = 2016;
var birthYear = now - 26;
birthYear = now - 26 * 2;
// 2016 - 52
// 1964
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;
ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMakr = 26
// ageJohn = 26

ageJohn++;
ageMark *= 2;
// ageMark = ageMark * 2;
console.log(ageJohn);
console.log(ageMark);
*/

// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon:)');
}

isMarried = true;

if(isMarried) {
  console.log('YES!');
} else {
  console.log('NO!');
}

if(isMarried) {
  console.log('YES!');
}

if (23 === '23') {
  console.log('Something to print...');
}
*/

// Lecture: boolean logic and switch
/*
var age = 20;
if (age < 20) {
  console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
  console.log('John is a young man.');
}
else {
  console.log('John is a man.');
}

var job = 'teacher';
job = prompt('What does john do?');

switch (job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('john drives a cab in Lisbon.');
    break;
  case 'cop':
    console.log('John helps fight crime.');
    break;
  default:
    console.log('John does something else.');
}
*/

/*
var heightJohn = 202;
var heightMike = 165;
var ageJohn = 46;
var ageMike = 79;
var heightDavid = 1375;
var ageDavid = 36;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;
var scoreDavid = heightDavid + 5 * ageDavid;

if (scoreJohn > scoreMike && scoreJohn > scoreDavid) {
  console.log('John wins the game with ' + scoreJohn + ' points')
} else if (scoreMike > scoreJohn && scoreMike > scoreDavid) {
  console.log('Mike wins the with ' + scoreMike + ' points')
} else if (scoreDavid > scoreJohn && scoreDavid > scoreMike) {
  console.log('David wins the with ' + scoreDavid + ' points')
} else {
  console.log('There is a draw.')
}
*/

///////////////////////////////////////////////
// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
  var age = 2016 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + 'retires in ' + retirement + ' year.');
  } else {
    console.log(name + ' has already retired.');
  }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

//////////////////////////////////
// Lecture: Statements and expressions
/*
function someFun(par) {
  // code
}

var someFun = function(par) {
  // code
}

//expressions
3 + 4;
var x = 3;

//statements
if (x === 5) {
  // do something
}
*/

//////////////////////////////////////
// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); // adds at the end
john.unshift('Mr.'); // adds in the beginning
john.pop(); // remove the last element
john.shift(); // remove the first element
console.log(john);

// alert(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
  console.log('John is NOT a teacher.');
}
*/

///////////////////////////////////////////
// Lecture: Objects
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;
console.log(jane);
*/

////////////////////////////
// Lecture: Objects and Methods
//v1.0
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
      return 2016 - this.yearOfBirth;
  }
};
// console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);
*/

//v2.0
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
      // return 2016 - this.yearOfBirth;
      this.age = 2016 - this.yearOfBirth;
  }
};

john.calculateAge();
console.log(john);

var mike = {
  yearOfBirth: 1950,
  calculateAge: function() {
      this.age = 2016 - this.yearOfBirth;
  }
};
mike.calculateAge();
console.log(mike);
*/

/////////////////////////////
// Lecture: Loops

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/

/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
// for loops
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (var i = names.length - 1; i >= 0 ; i--) {
  console.log(names[i]);
}
*/

// while loops
/*
var i = 0;
while(i < names.length) {
  console.log(names[i])
  i++;
}

for (var i = 1; i <= 5; i++) {
  console.log(i);
  if (i === 3) {
    break;
  }
}

for (var i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
    console.log(i);
}
*/

// var years = [1965, 2008, 1992];
// var personAge = [];
//
// for (var i = 0; i < years.length; i++) {
//   var age = 2016 - years[i];
//   personAge.push(age);
// }
//
// for (var i = 0; i < personAge.length; i++) {
//   if (personAge[i] > 18) {
//     console.log('Full Age of ' + personAge[i])
//   }
// }

/*
function printFullAge(age) {
  var personAge = [];
  for (var i = 0; i < age.length; i++) {
    var ages = 2016 - age[i];
    personAge.push(ages);
  }
  var fullAge = []
  for (var i = 0; i < personAge.length; i++) {
    if (personAge[i] > 18) {
      var full = true;
      fullAge.push(full);
    } else {
      full = false;
      fullAge.push(full);
    }
  }
  return fullAge
}

var full1 = printFullAge(years);
console.log(full1)
*/

///////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1965);

function calculateAge(year) {
  console.log(2016 - year);
}


// retirement(1990);
var retirement = function(year) {
  console.log(65 - (2016 - year));
}


// variables
console.log(age);
var age = 23;

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
*/

///////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
  var b = 'Hi!';
  second()

  function second() {
    var c = 'Hey!';
    third();
  }
}

function third() {
  var d = 'John';
  // console.log(c);
  console.log(a + d);
}
*/
