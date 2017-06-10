var cartItems = [
  {
    id: 'p001',
    name: 'Schwinn Mark V Bike',
    qty: 1
  },
  {
    id: 'p002',
    name: 'Sandisk 32GB USB Drive',
    qty: 2
  },
  {
    id: 'p003',
    name:'Honda Civic',
    qty: 10
  }
]

cartItems.map(function items(item) {
  var $item = document.createElement('div')
  var $id = document.createElement('h2')
  $id.textContent = 'id: ' + item.id
  var $name = document.createElement('h4')
  $name.textContent = 'name: ' + item.name
  var $qty = document.createElement('Number')
  $qty.textContent = 'qty\': ' + item.qty

  $item.appendChild($id)
  $item.appendChild($name)
  $item.appendChild($qty)
  document.body.appendChild($item)

  return $item
})
