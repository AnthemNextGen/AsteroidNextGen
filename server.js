var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection', function(socket){
  console.log('a user connected');
  io.emit('message', 'Welcome Delveri');
});

http.listen(process.env.PORT || 5000, function(){
  console.log('listening on *:5000');
});
