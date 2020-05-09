var express = require('express')
var http = require('http')
var path = require('path')
var reload = require('reload')
 
var app = express() 
var publicDir = path.join(__dirname, 'views')

app.get('/', function (req, res) {
  res.sendFile(path.join(publicDir, '/index.html'))
})

app.get('/carouselPage', function (req, res) {
    res.sendFile(path.join(publicDir, '/carouselPage.html'))
})

app.get('/registerPage', function (req, res) {
    res.sendFile(path.join(publicDir, '/registerPage.html'))
})
 
app.set('port', process.env.PORT || 3000)
var server = http.createServer(app)
 
reload(app).then(function (reloadReturned) {
  server.listen(app.get('port'), function () {
    console.log('Web server listening on port ' + app.get('port'))
    console.log('Press Ctrl+C to quit')
  })
}).catch(function (err) {
  console.error('Reload could not start, could not start server/sample app', err)
})