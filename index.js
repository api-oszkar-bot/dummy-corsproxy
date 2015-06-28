#!/usr/bin/env node
var http = require('http')
var request = require('request')

var port = process.env.PROXY_PORT || 8080

http.createServer(function (req, res) {
  res.setTimeout(25000)
  try {
    var url = req.url.slice(1)
    console.log('GET '+url);
    request(url, {encoding: null}, function(error, response, body) {
      var headers = response.headers || {}
      headers['Access-Control-Allow-Origin'] = '*'
      res.writeHead(response.statusCode, headers)
      res.write(body)
      res.end()
    })
  }
  catch(e) {
    console.log('GET '+url+' failed\n\t'+e)
  }
}).listen(port)

console.log("Listening on port: " + port)
