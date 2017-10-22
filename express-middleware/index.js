var express = require('express')
var app = express()

var handleGet = (req, res, next) => {
  if (req.method === 'GET' && req.url === '/express-get') {
    res.send('You sent a GET request!')
  }
  else {
    next()
  }
}

var handlePost = (req, res, next) => {
  if (req.method === 'POST' && req.url === '/express-post') {
    res.send('You sent a POST request!')
  }
  else {
    next()
  }
}

var handlePut = (req, res, next) => {
  if (req.method === 'PUT' && req.url === '/express-put') {
    res.send('You sent a PUT request!')
  }
  else {
    next()
  }
}

var handleDelete = (req, res, next) => {
  if (req.method === 'DELETE' && req.url === '/express-delete') {
    res.send('You sent a DELETE request!')
  }
  else {
    next()
  }
}

app.use(handleGet)
app.use(handlePost)
app.use(handlePut)
app.use(handleDelete)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
