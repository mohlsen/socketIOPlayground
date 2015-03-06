//Examples from:
//http://expressjs.com/starter/hello-world.html
//http://expressjs.com/starter/static-files.html
//http://socket.io/get-started/chat/

var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('www'));
app.use('/lib', express.static('node_modules'));

io.on('connection', function(socket){

  var iterations = 0;

  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  var cancelInterval = setInterval(function() { 
  	iterations++;
  	io.emit('deviceDetails', { 
         "address": "10.0.0." + Math.floor(Math.random() * 999),
         "port": 8080,
         "deviceType": 1,
         "productCode": 123,
         "serialNumber": "QWERTY" + Math.floor(Math.random() * 10000),
         "productName": "Device " + iterations,
       }
  	);

  	if (iterations >= 50) {
        clearInterval(cancelInterval);
        console.log('done sending at interval');
    }
  }, 500);

});

var server = http.listen(3000, function(){

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});




