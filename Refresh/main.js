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

function getNickname(coolness) {
  return coolness >= 10
  ? 'Fonzie'
  : 'Major Kirk'
}

function levelCompleted(remaining) {
  if (remaining < 1)
  alert('Game Over')
}

function levelCompleted(remaining) {
  if (remaining < 1) {
    alert('Game Over')
    confirm('Are you enjoy')
  }
  else {
    var level = 11 - remaining
    alert('Level ' + level + ': Go!')
  }
}

function levelCompleted(remaining, score) {
  if (remaining < 1) {
    alert('Game Over')
    if (score > 100) alert('You crushed it!')
    else if (score < 100) alert('Better luck next time...')
    else alert('Perfect! Try to beat your score.')
    confirm('Are you enjoy?')
  }
  else {
    var level = 11 - remaining
    alert('Level ' + level + ': Good luck!')
  }
}

function levelCompleted(remaining, score) {
  if (remaining > 0) {
    var level = 11 - remaining
    return alert('Level ' + level + ': Good luck!')
  }
  alert('Game Over')
  if (score > 100) alert ('You crushed it!')
  if (score < 100) alert ('Better luck next time...')
  if (score === 100) alert ('Perfect! Try to beat your score.')
  confirm('Are you enjoy?')
}

function showPhrase(character) {
  switch (character) {
    case 'Homer':
      alert ('D\'oh!'); break
    case 'Krusty':
      alert ('Hey Hey!'); break
    case 'Bart':
      alert ('I didn\'t do it.'); break
    default:
      alert('That\' the joke')
  }
}

function copyList(list) {
  var copy = []
  var i = 0
  while (i < list.length) {
    var item = list[i]
    copy[i] = item
    i += 1
  }
  return copy
}

function getTotal(items) {
  var total = 0
  for (var i = 0; i < items.length; i++) {
    var item = items[i]
    total += item.price
  }
  return total
}

var price = [
  {
    name: 'David',
    price: 12
  },
  {
    name: 'Yoojin',
    price: 12
  }
]

function format(item) {
  var output = ''
  for (var key in item) {
    var line = key + ': ' + item[key] + '\n'
    output += line
  }
  return output
}

var firstName = 'David'
var totalPets = 11

var fullName = firstName + ' ' + 'Lee'
var tooManyPets = totalPets > 10

function getArea(width, height) {
  return width * height
}

function doctorUp(fullName) {
  return 'Dr.' + ' ' + fullName + ' ' + 'PhD'
}

var orders = [
  {
    item: '#1',
    data: '1st',
    price: '$1'
  },
  {
    item: '#2',
    data: '2nd',
    price: '$2'
  },
  {
    item: '#3',
    data: '3rd',
    price: '$3'
  }
]

var personOne = {
  name: 'David',
  age: 1
}

var personTwo = {
  name: 'Yoojin',
  age: 2
}

function updateSenior(person) {
  var isSenior = true
  if (person.age > 1) {
    return isSenior
  }
  else {
    return isSenior = false
  }
}

var programmers = [
  {
    name: 'David',
    exp:  5
  },
  {
    name: 'YJ',
    exp:  1
  }
]

function getTotalExperience(workers) {
  var exp = 0
  for (i=0; i < workers.length; i++) {
    var total = workers[i]
    exp += total.exp
  }
  return exp
}

var library = [
  {
    title: 'JavaScript the Good Parts',
    subject: 'JavaScript'
  },
  {
    title: 'Refactoring',
    subject: 'Practices'
  },
  {
    title: 'Clean Code',
    subject: 'Practices'
  },
  {
    title: 'Secrets of the JavaScript Nina',
    subject: 'JavaScrip'
  },
  {
    title: 'Professional JavaScript for Web Developers',
    subject: 'JavaScript'
  }
]

function JsBooks(books) {
  var books = []
  library.forEach(function (book) {
    if (book.subject === 'JavaScript') {
      books.push(book)
    }
  })
  return books
}

var first = document.querySelector('.entrance')
first.textContent = 'Hello World'

var articles = [
  {
    title: 'The Law of Leaky Abstractions',
    author: 'Joel Spolsky',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at massa ultrices, commodo dui in, laoreet turpis. Donec congue eget lorem sit amet commodo.'
  },
  {
    title: 'Higher Order Functions (Composing Software)',
    author: 'Eric Elliot',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at massa ultrices, commodo dui in, laoreet turpis. Donec congue eget lorem sit amet commodo.'
  },
  {
    title: 'A Little About Patterns.',
    author: 'Robert C. Martin',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at massa ultrices, commodo dui in, laoreet turpis. Donec congue eget lorem sit amet commodo.'
  }
]

function renderPost(post) {
  var $post = document.createElement('div')
  var $title = document.createElement('h2')
  var $author = document.createElement('h5')
  var $content = document.createElement('p')

  $title.textContent = post.title
  $author.textContent = 'by ' + post.author
  $content.textContent = post.content

  $post.appendChild($title)
  $post.appendChild($author)
  $post.appendChild($content)

  return $post
}

articles.forEach(function(post) {
  var $post = renderPost(post)
  document.body.appendChild($post)
})

var cartItems = [
  {
    id: 'p001',
    name: 'Schwinn Mark V Bike',
    qty: 1
  },
  {
    id: 'p002',
    name: 'Scan disk 32GB',
    qty: 18
  },
  {
    id: 'p003',
    name: 'Honda',
    qty: 4
  }
]

var itemslist = cartItems.map(function(item) {
  var items = document.createElement('div')
  items.textContent = item.name
  return items
})

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
  return x * 2;
})

var roots = numbers.map(Math.sqrt)

var kvArray = [
  {key:1, value: 10},
  {key:2, value: 20},
  {key:3, value: 30}
]

var reformattedArray = kvArray.map(function(obj) {
  var rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

var words = ['spray', 'limit', 'elite', 'exuberant']

var longWords = words.filter(word => word.length > 5)

var users = [
  { id: 1, followers: [2] },
  { id: 2, followers: [1, 5] },
  { id: 3, followers: [1, 2, 4] },
  { id: 4, followers: [1, 2] },
  { id: 5, followers: [1, 2, 3, 4] }
];

var popular = users.filter(function(user){
  return user.followers.length > 2
})

var total = [0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value;
}, 0)

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b){
  return a.concat(b);
}, [])

var tweets = [
  { user: 'larry', message: 'I lost my ba-lance' },
  { user: 'moe', message: '@larry Oh, ya lost your ba-lance, eh?' },
  { user: 'larry', message: '@moe Yeah' },
  { user: 'moe', message: '@larry Well go find it!' },
  { user: 'zoidberg', message: 'Whooop whoop Whoop Whoop' },
  { user: 'curly', message: '@zoidberg that\'s MY line!' }
];

tweets
  .filter(function notZoidberg(tweet) {
    return tweet.user !== 'zoidberg'
  })
  .map(function tweetElement(tweet) {
    var theTweet = document.createElement('div')
    theTweet.textContent = tweet.user + ' ' + tweet.message
    return theTweet
  })
  .forEach(function appendTweet(theTweet) {
    document.body.appendChild(theTweet)
  });
