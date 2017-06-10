var rush = ['Geddy', 'Neil', 'Alex']
var greenDay = ['Billy', 'Tré', 'Mike']
var motorhead = ['Lemmy', 'Mikkey', 'Phil']

var allNames = rush.concat(greenDay, motorhead)
// concat method

var billItems = [
  { qty: 2, name: 'Coca Cola', priceEach: 1 },
  { qty: 2, name: 'Taco', priceEach: 3 },
  { qty: 1, name: 'Nachos', priceEach: 3 },
  { qty: 4, name: 'Burrito', priceEach: 4 }
]

var removeTwo = billItems.slice(1, 3)
// slice

var jerry = {
  animal: 'mouse',
  name: 'Jerry'
}

var mike = {
  name: 'Mike'
}

var updatedList = Object.assign(jerry, mike)
// Object.assign
