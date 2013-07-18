var express = require('express');
var fs = require('fs');
 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer(8);
  var buffer = fs.readFileSync('index.html');
  var text_to_show = buffer.toString();

  response.send(text_to_show);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
