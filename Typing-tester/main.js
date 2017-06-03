var text = 'Hello World.'

for (var i = 0; i < text.length; i++) {
  var $text = document.createElement('span')
  $text.textContent = text[i]
  document.body.appendChild($text)
}

var start = document.querySelector('span')
start.classList.add('start')

window.addEventListener('keypress', function(event) {
  var prompt = document.querySelector('.start')
  var currentPrompt = prompt.textContent
  if (event.key === currentPrompt) {
    prompt.classList.remove('start')
    prompt.nextSibling.classList.add('start')
  }
  else {
   prompt.classList.add('wrong')
  }
})
