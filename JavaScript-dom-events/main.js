var $myList = document.querySelector('#my-list')
var $myInput = document.querySelector('#my-input')
var $myButton = document.querySelector('#my-button')

function renderPost(text) {
  var list = document.createElement('li')
  list.textContent = text
  return list
}

$myButton.addEventListener('click', function() {
  var text = $myInput.value
  var $text = renderPost(text)
  document.body.appendChild($text)
})
