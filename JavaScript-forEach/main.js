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
    title: 'Secrets of the JavaScript Ninja',
    subject: 'JavaScript'
  },
  {
    title: 'Professional JavaScript for Web Developers',
    subject: 'JavaScript'
  }
]

function getJsBooks(books) {
  var matches = []
  books.forEach(function (book) {
  if (book.subject === 'JavaScript') {
    matches.push(book)
  }
})
return matches
}
