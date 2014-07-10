var http = false, tcp = false
if ( process.argv.length > 2 ) {
    process.argv.forEach(function (val, index, array) {
        switch(val)
        {
            case "http":
                http = true
                break;
            case "tcp":
                tcp = true
                break
        }
    });
} else {
    http = true;
    tcp = true;
}

// HTTP stuff
if ( http ) {
  var express = require("express");
  var logfmt = require("logfmt");
  var app = express();
  
  app.use(logfmt.requestLogger());
  
  app.get('/', function(req, res) {
    res.send('Hello World!');
  });
  
  var port = Number(process.env.PORT || 5000);
  app.listen(port, function() {
    console.log("Listening on " + port);
  });
}

// TCP socket stuff
if ( tcp ) {
  var Server = require('./lib/server.js').Server;
  Server.boot();
}
