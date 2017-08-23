var food = 'pizza'
food = 'calzone'

var price = 9.99
price += 1
price -= 5

var place = 'Greyskull!'
var power = 'By the power of ' + place
place = 'Eternia!'
power = power + place

var myDog = {
  name: 'Junior',
  breed: 'Boston Terrier',
  age: 3,
  isNice: true
}

myDog.sex = 'Boy';

myDog.mother = {
  name: 'YJ',
  isNice: true
}

var myList = ['chicken', 'broccoli', 'brown rice']

var myFalsies = [false, null, NaN, 0, undefined, '']

var trios = [['Billy', 'Tre', 'Mike'], ['Geddy', 'Alex', 'Neil']]

var team = [
  {
    name: 'David',
    role: 'God\' worker'
  },
  {
    name: 'YJ',
    role: 'David\' wife'
  }
]

var company = {
  name: 'Paris Baguette',
  established: 2017,
  employees: [
    {
      name: 'Fry'
    },
    {
      name: 'Amy'
    },
    {
      name: 'Leela'
    },
    {
      name: 'Bender'
    },
    {
      name: 'Hermes'
    },
    {
      name: 'Scruffy'
    }
  ]
}
var a = 4
var b = 5
var c = 6

function isEquilateral(side1, side2, side3) {
  var allEqual = side1 === side2 && side2 === side3
  return allEqual
}

function returnsNothing() {

}

var babe = {
  type: 'pig',
  name: 'Babe'
}

var donkey = {
  type: 'donkey',
  name: 'Donkey'
}

function quote(animal) {
  return 'That\'ll do, ' + animal.type + '... That\'ll do.'
}

var calculator = {
  subtract: function (x, y) {
    return x - y
  },
  divide: function (x, y) {
    return x / y
  }
}

function add(x, y) {
  return x + y
}

function multiple(x, y) {
  return x * y
}

function apply(operation, arg1, arg2) {
  return operation(arg1, arg2)
}

var sum = apply(add, 1, 2)
var product = apply(multiple, 5, 1)
