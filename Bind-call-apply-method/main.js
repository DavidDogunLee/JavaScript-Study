let david = {
  name: 'David',
  age: 36,
  job: 'Programmer',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log(`Good ${timeOfDay}, Ladies and gentlemen! I\'m ${this.name},
      I\'m ${this.job} and I\'m ${this.age} years Old.`)
    } else if (style === 'friendly') {
      console.log(`Hey! What\'s up? I\'m a ${this.name}, I\'m a ${this.job} and I\'m
       ${this.age} years old. Have a nice ${timeOfDay}.`)
    }
  }
}

david.presentation('formal', 'morning');

let emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

// call method allows to set the this variable
// to use presentation method but to set the this variable to emily
david.presentation.call(emily, 'friendly', 'afternoon') // method borrowing

// apply same as call but it accepts the arguments as an array
david.presentation.apply(emily, ['friendly', 'afternoon'])

// bind is similar to call but bind doens't immedietly call the function
// but instead it generate copy of the function to store it somewhere
// bind allow us to preset some arguements as well.
var davidFriendly = david.presentation.bind(david, 'friendly')

davidFriendly('morning')
davidFriendly('night')

// "currying" is technic to create a function based on another function w/ some preset arguments

var emilyFormal = david.presentation.bind(emily, 'formal')
emilyFormal('afternoon')



var years = [1990, 1965, 1937, 2005, 1998]

function arrayCalc(arr, fn) {
  var arrRes = []
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]))
  }
  return arrRes
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit
}

var ages = arrayCalc(years, calculateAge)

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages)
console.log(fullJapan)
