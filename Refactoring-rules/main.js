/*
Organize your code in the following order:
  global variables
  functions
  event listeners
  code that runs on page load
Declare your variables near where  they are first used.
Keep variable names concise
Name your variables and functions using words from your business domain.
Delete all comments, including (and especially) commented out code. Rely on meangingful names and code organization for clarity.
*/

// Function name should contain a verb. Things like find, create, append, sort.
// wrong
var total = total(items)
// right
var total = calculateCartTotal(items)

// Carfully choose between singular and plural nouns.
// wrong
function renderItem(items) {
}
function renderItems(item) {
}
function createItems(item) {
}
// right
function renderItems(items) {
}
function renderItemDetails(item) {
}

// File names should be lower-spinal-case
// wrong
userCheckout.js
// right
user-checkout.js

/* CSS classes, ids and attributes should be lower-spinal-case.
<!-- wrong -->
<div class="container" id="itemsContainer">
/div>

<!-- right -->
<div class="container" id="items-container">
</div>
*/

// JavaScript variables and function names should be lowerCamelCase.
// wrong
function RenderItemDetails(item) {
}
function render_items(items) {
}
// right
function renderItemDetails(itemDetails) {
}
function renderItems(items) {
}

/* Functions should be pure whenever possible.
This means that they take arguments and return
a value without affecting any other part of the program.
*/

// Define pure functions for DOM creation. DOM creation separate from DOM manipulation.
// wrong
function renderItemDetails(item) {
  var $itemDetails = document.createElements('div')
  // append to dom (wrong)
  var $detailsContainer = document.querySelector('#details')
  $detailsContainer.appendChild($itemDetails)
}
// right: function should only return the newly created DOM
function renderItemDetails(item) {
  var $itemDetails = document.createElements('div')
  // return created DOM
  return $itemDetails
}

// Separate data processing code into funtions
// wrong
$cart.addEventListener('click', function(event) {
  var total = 0;
  for (var i = 0; i < app.cart.items.length; i++) {
    total += app.cart.items[i].price
  }
})
// right
function calculateCartTotal(items) {

}

$cart.addEventListener('click', function(event) {
  var total = calculateCartTotal(app.cart.items)
})

// Pass arguments to functions that cause side-effects.
// wrong
function hideList() {
  var $list = document.querySelector('#list')
  $list.classList.add('hidden')
}

hideList()
// right
functino hide($view) {
  $view.classList.add('hidden')
}

hide($list)
