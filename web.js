var express = require('express');

var app = express.createServer(express.logger());


var buffer = new Buffer(8);
var buffer = fs.readFileSync('index.html');
var text_to_show = buffer.toString();

app.get('/', function(request, response) {
  response.send(text_to_show);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
