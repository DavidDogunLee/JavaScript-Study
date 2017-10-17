var express = require('express')

// Middleware to print the unix timestamp of the request.
var logTimestamp = (req, res, next) => {
  console.log('Request received:', Date.now())
  next()
}

// Middleware to send a 200 OK response to the client.
var respond = (req, res) => {
  res.sendStatus(200)
}

var app = express()

// Registering our middlware
// in the order they should process requests.
app.use(logTimestamp)
app.use(respond)

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
