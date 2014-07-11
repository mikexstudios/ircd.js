#!/usr/bin/env node
// Start both a simple http server for responding to health checks as well as
// the IRCd.

var http = require('http');
var http_port = Number(process.env.PORT || 5000);
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(http_port);
console.log('http server running');


var server = require('./lib/server.js').Server;
server.boot();
