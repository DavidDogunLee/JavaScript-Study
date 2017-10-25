var express = require('express')
var app = express()

var respond = (req, res, next) => {
  if (req.method !== 'GET') return next()
  var options = { root: __dirname }
  res.sendFile(req.url, options)
}

app.use(respond)

app.listen(3000, () => {
  console.log('Listening on port', 3000)
})
