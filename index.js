//http://expressjs.com/starter/hello-world.html
//http://expressjs.com/starter/static-files.html


var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('www'));
app.use('/lib', express.static('node_modules'));

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

var server = http.listen(3000, function(){

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});

