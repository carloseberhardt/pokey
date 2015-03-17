var http = require('http')
var crypto = require('crypto')
var url = require('url')

var svr = http.createServer(function (req, resp) {
  if (req.method === 'GET') {
    var query = url.parse(req.url, true).query
    var delay = query.delay ? parseInt(query.delay, 10) : 0
    var size = query.size ? parseInt(query.size, 10) : 1024
    size = Math.floor(size / 2)
    var body = crypto.pseudoRandomBytes(size).toString('hex')
    setTimeout(function () {
      resp.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': body.length
      })
      resp.end(body)
    }, delay)
  }
})

svr.listen('8888', function () {
  console.log('I am listening on 8888.')
})
