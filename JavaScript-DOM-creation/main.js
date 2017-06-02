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

articles.forEach(function(article) {
  var $post = renderPost(article)
  document.body.appendChild($post)
})
